import {
  ObjectDirectoryParams,
  useBuckets,
  useObjectDirectory,
} from '@siafoundation/react-renterd'
import { sortBy, toPairs } from '@technically/lodash'
import useSWR from 'swr'
import { useContracts } from '../contracts'
import { ObjectData, SortField } from './types'
import {
  bucketAndKeyParamsFromPath,
  getBucketFromPath,
  buildDirectoryPath,
  getFilename,
  join,
  isDirectory,
} from './paths'
import {
  ServerFilterItem,
  minutesInMilliseconds,
} from '@siafoundation/design-system'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

type Props = {
  setActiveDirectory: (func: (directory: string[]) => string[]) => void
  activeDirectoryPath: string
  uploadsList: ObjectData[]
  sortDirection: 'asc' | 'desc'
  sortField: SortField
  filters: ServerFilterItem[]
}

const defaultLimit = 50

export function useDataset({
  setActiveDirectory,
  activeDirectoryPath,
  uploadsList,
  sortDirection,
  sortField,
  filters,
}: Props) {
  const buckets = useBuckets()

  const router = useRouter()
  const limit = Number(router.query.limit || defaultLimit)
  const offset = Number(router.query.offset || 0)
  const activeBucketName = getBucketFromPath(activeDirectoryPath)
  const activeBucket = buckets.data?.find((b) => b.name === activeBucketName)
  const fileNamePrefix =
    filters.find((f) => f.id === 'fileNamePrefix')?.value || ''

  const params = useMemo(() => {
    const p: ObjectDirectoryParams = {
      ...bucketAndKeyParamsFromPath(activeDirectoryPath),
      sortBy: sortField,
      sortDir: sortDirection,
      offset,
      limit,
    }
    if (fileNamePrefix) {
      p.prefix = fileNamePrefix
    }
    return p
  }, [
    activeDirectoryPath,
    fileNamePrefix,
    sortField,
    sortDirection,
    offset,
    limit,
  ])

  const response = useObjectDirectory({
    disabled: !activeBucketName,
    params,
    config: {
      swr: {
        refreshInterval: minutesInMilliseconds(1),
      },
    },
  })

  const { dataset: allContracts } = useContracts()

  const d = useSWR<ObjectData[] | null>(
    response.isValidating || buckets.isValidating
      ? null
      : [
          response.data,
          uploadsList,
          allContracts,
          buckets.data,
          activeBucketName,
          activeDirectoryPath,
        ],
    () => {
      const dataMap: Record<string, ObjectData> = {}
      if (!activeBucket) {
        buckets.data?.forEach((bucket) => {
          const name = bucket.name
          const path = buildDirectoryPath(name, '')
          dataMap[name] = {
            id: path,
            path,
            bucket,
            size: 0,
            health: 0,
            name,
            onClick: () => {
              setActiveDirectory((p) => p.concat(name))
            },
            type: 'bucket',
          }
        })
      } else if (response.data) {
        response.data.entries?.forEach(({ name: key, size, health }) => {
          const path = join(activeBucketName, key)
          const name = getFilename(key)
          dataMap[path] = {
            id: path,
            path,
            bucket: activeBucket,
            size,
            health,
            name,
            onClick: isDirectory(key)
              ? () => {
                  setActiveDirectory((p) => p.concat(name.slice(0, -1)))
                }
              : undefined,
            type: isDirectory(key) ? 'directory' : 'file',
          }
        })
        uploadsList
          .filter(({ path, name }) => path === join(activeDirectoryPath, name))
          .forEach((upload) => {
            dataMap[upload.path] = upload
          })
      }
      const all = sortBy(
        toPairs(dataMap).map((p) => p[1]),
        sortField as keyof ObjectData
      )
      if (sortDirection === 'desc') {
        all.reverse()
      }
      return all
    },
    {
      keepPreviousData: true,
    }
  )

  return {
    limit,
    offset,
    response,
    dataset: d.data,
    refresh: response.mutate,
  }
}
