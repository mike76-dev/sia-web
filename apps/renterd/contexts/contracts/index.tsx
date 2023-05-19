import {
  blockHeightToTime,
  useTableState,
  getContractsTimeRangeBlockHeight,
  useDatasetEmptyState,
  useClientFilters,
  useClientFilteredDataset,
} from '@siafoundation/design-system'
import { useRouter } from 'next/router'
import {
  useConsensusState,
  useContracts as useContractsData,
  useEstimatedNetworkBlockHeight,
} from '@siafoundation/react-renterd'
import { useSatellite } from './satellite'
import { createContext, useContext, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import {
  ContractData,
  columnsDefaultVisible,
  columnsDefaultSort,
} from './types'
import { columns } from './columns'

const defaultLimit = 50

function useContractsMain() {
  const router = useRouter()
  const limit = Number(router.query.limit || defaultLimit)
  const offset = Number(router.query.offset || 0)
  const response = useContractsData()
  const satellite = useSatellite()

  const estimatedNetworkHeight = useEstimatedNetworkBlockHeight()
  const network = useConsensusState({
    config: {
      swr: {
        refreshInterval: 60_000,
      },
    },
  })
  const currentHeight = network.data?.Synced
    ? network.data.BlockHeight
    : estimatedNetworkHeight

  const dataset = useMemo<ContractData[] | null>(() => {
    if (!response.data) {
      return null
    }
    const data: ContractData[] =
      response.data?.map((c) => {
        const isRenewed =
          c.renewedFrom !==
          'fcid:0000000000000000000000000000000000000000000000000000000000000000'
        const startTime = blockHeightToTime(currentHeight, c.startHeight)
        const endHeight = c.windowStart
        const endTime = blockHeightToTime(currentHeight, endHeight)
        return {
          id: c.id,
          contractId: c.id,
          hostIp: c.hostIP,
          hostKey: c.hostKey,
          timeline: startTime,
          startTime,
          endTime,
          contractHeightStart: c.startHeight,
          contractHeightEnd: endHeight,
          proofWindowHeightStart: c.windowStart,
          proofWindowHeightEnd: c.windowEnd,
          proofHeight: c.proofHeight,
          revisionHeight: c.revisionHeight,
          isRenewed,
          renewedFrom: c.renewedFrom,
          totalCost: new BigNumber(c.totalCost),
          spendingUploads: new BigNumber(c.spending.uploads),
          spendingDownloads: new BigNumber(c.spending.downloads),
          spendingFundAccount: new BigNumber(c.spending.fundAccount),
          satellite: satellite.data && satellite.data.contracts ?
            satellite.data.contracts[c.id] : '',
        }
      }) || []
    return data
  }, [response.data, currentHeight, satellite.data])

  const { filters, setFilter, removeFilter, removeLastFilter, resetFilters } =
    useClientFilters<ContractData>()

  const {
    configurableColumns,
    enabledColumns,
    toggleColumnVisibility,
    setColumnsVisible,
    setColumnsHidden,
    toggleSort,
    setSortDirection,
    setSortColumn,
    sortColumn,
    sortDirection,
    sortOptions,
    resetDefaultColumnVisibility,
  } = useTableState(
    'renterd/v0/contracts',
    columns,
    columnsDefaultVisible,
    columnsDefaultSort
  )

  const datasetFiltered = useClientFilteredDataset({
    dataset,
    filters,
    sortColumn,
    sortDirection,
  })

  const datasetPage = useMemo<ContractData[] | null>(() => {
    if (!datasetFiltered) {
      return null
    }
    return datasetFiltered.slice(offset, offset + limit)
  }, [datasetFiltered, offset, limit])

  const { range: contractsTimeRange } = useMemo(
    () => getContractsTimeRangeBlockHeight(currentHeight, datasetPage || []),
    [currentHeight, datasetPage]
  )

  const filteredTableColumns = useMemo(
    () =>
      columns.filter(
        (column) => column.fixed || enabledColumns.includes(column.id)
      ),
    [enabledColumns]
  )

  const dataState = useDatasetEmptyState(
    datasetFiltered,
    response.isValidating,
    response.error,
    filters
  )

  return {
    dataState,
    limit,
    offset,
    error: response.error,
    pageCount: datasetPage?.length || 0,
    datasetCount: datasetFiltered?.length || 0,
    columns: filteredTableColumns,
    dataset,
    datasetPage,
    cellContext: {
      currentHeight: estimatedNetworkHeight,
      contractsTimeRange,
    },
    configurableColumns,
    enabledColumns,
    toggleColumnVisibility,
    setColumnsVisible,
    setColumnsHidden,
    toggleSort,
    setSortDirection,
    setSortColumn,
    sortColumn,
    filters,
    setFilter,
    removeFilter,
    removeLastFilter,
    resetFilters,
    sortDirection,
    sortOptions,
    resetDefaultColumnVisibility,
  }
}

type State = ReturnType<typeof useContractsMain>

const ContractsContext = createContext({} as State)
export const useContracts = () => useContext(ContractsContext)

type Props = {
  children: React.ReactNode
}

export function ContractsProvider({ children }: Props) {
  const state = useContractsMain()
  return (
    <ContractsContext.Provider value={state}>
      {children}
    </ContractsContext.Provider>
  )
}
