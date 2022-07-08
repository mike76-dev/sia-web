import useSWR from 'swr'
import { apiBase } from '../config'
import { NvgAddressUtxos } from '../config/navigatorTypes'

function getUtxosKey(address?: string) {
  return address ? `${apiBase}/unspent_outputs/${address}` : null
}

async function fetchUtxos(address: string) {
  const response = await fetch(getUtxosKey(address))
  const data = await response.json()
  return data
}

export function useUtxos(address?: string) {
  return useSWR<NvgAddressUtxos>(
    getUtxosKey(address),
    () => fetchUtxos(address),
    {
      dedupingInterval: 60_000,
    }
  )
}
