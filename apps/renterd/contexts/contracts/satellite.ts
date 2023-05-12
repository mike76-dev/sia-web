import { useGetSwr, HookArgsSwr } from '@siafoundation/react-core'
import { SatelliteData } from './types'

export function useSatellite(args?: HookArgsSwr<void, SatelliteData>) {
  return useGetSwr({ ...args, route: '/satellite/contracts' })
}
