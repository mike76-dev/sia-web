import { useGetSwr } from '@siafoundation/react-core'
import {
  HookArgsSwr,
  HookArgsCallback,
} from '@siafoundation/react-core'
import { usePutFunc } from '@siafoundation/react-core'

// struct2ts:github.com/mike76-dev/renterd-satellite/Config
export interface SatelliteConfig {
  enabled:    boolean,
  address:    string,
  publicKey:  string,
  renterSeed: string
}

const satelliteConfigKey = '/satellite/config'

export function useSatelliteConfig(args?: HookArgsSwr<void, SatelliteConfig>) {
  return useGetSwr({
    ...args,
    route: satelliteConfigKey,
  })
}

export function useSatelliteConfigUpdate(
  args?: HookArgsCallback<void, SatelliteConfig, void>
) {
  return usePutFunc({ ...args, route: satelliteConfigKey }, (mutate) => {
    mutate((key) => key === satelliteConfigKey)
  })
}
