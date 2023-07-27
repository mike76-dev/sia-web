import {
  useGetSwr,
  usePostFunc,
  usePutFunc,
  HookArgsSwr,
  HookArgsCallback,
} from '@siafoundation/react-core'

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
  return usePutFunc({ ...args, route: satelliteConfigKey }, async (mutate) => {
    mutate((key) => key === satelliteConfigKey)
  })
}

// struct2ts:github.com/mike76-dev/renterd-satellite/RenterSettings
export interface RenterSettings {
  autoRenew:      boolean,
  backupMetadata: boolean
}

const renterSettingsKey = '/satellite/settings'

export function useRenterSettings(args?: HookArgsSwr<void, RenterSettings>) {
  return useGetSwr({
    ...args,
    route: renterSettingsKey,
  })
}

export function useRenterSettingsUpdate(
  args?: HookArgsCallback<void, RenterSettings, void>
) {
  return usePostFunc({ ...args, route: renterSettingsKey }, async (mutate) => {
    mutate((key) => key === renterSettingsKey)
  })
}
