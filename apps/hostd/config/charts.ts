import { colors } from '@siafoundation/design-system'

export const chartConfigs = {
  // states
  successful: {
    color: colors.green[600],
  },
  active: {
    color: colors.amber[600],
    // pattern: true,
  },
  pending: {
    color: colors.amber[600],
    pattern: true,
  },
  rejected: {
    color: colors.graydark[500],
    // pattern: true,
  },
  failed: {
    color: colors.red[600],
  },
  // potential: {
  //   color: colors.amber[600],
  //   pattern: true,
  // },

  // types
  storage: {
    label: 'storage',
    color: colors.teal[600],
  },
  ingress: {
    label: 'ingress',
    color: colors.blue[600],
  },
  egress: {
    label: 'egress',
    color: colors.pink[600],
  },
  registry: {
    label: 'registry',
    color: colors.purple[600],
  },
  registryRead: {
    label: 'registry read',
    color: colors.purple[600],
  },
  registryWrite: {
    label: 'registry write',
    color: colors.fuchsia[600],
  },
  rpc: {
    label: 'RPC',
    color: colors.emerald[600],
  },

  //
  contract: {
    color: colors.green[600],
  },
  collateral: {
    color: colors.rose[600],
  },
  sectorAccess: {
    label: 'sector access',
    color: colors.blue[600],
  },
  sectorsPhysical: {
    label: 'physical sectors',
    color: colors.red[600],
  },
  sectorsTemp: {
    label: 'temp sectors',
    color: colors.amber[600],
  },
  sectorsContract: {
    label: 'contract sectors',
    color: colors.green[600],
  },
  // other: {
  //   color: colors.gray[600],
  // },

  // general
  sc: {
    color: colors.green[600],
  },
  sf: {
    color: colors.amber[600],
  },

  // collateral
  locked: {
    color: colors.slate[600],
    pattern: true,
  },
  risked: {
    color: colors.amber[900],
  },
  burnt: {
    color: colors.red[600],
  },
}
