import { Link, Text, Tooltip, Warning16 } from '@siafoundation/design-system'
import { useFiles } from '../../../contexts/files'
import { routes } from '../../../config/routes'
import { useContractSetMismatch } from '../checks/useContractSetMismatch'
import { useDefaultContractSetNotSet } from '../checks/useDefaultContractSetNotSet'
import { useAutopilotNotConfigured } from '../checks/useAutopilotNotConfigured'
import { useNotEnoughContracts } from '../checks/useNotEnoughContracts'

export function FilesStatsMenuWarnings() {
  const { dataState, activeDirectoryPath } = useFiles()
  const contractSetMismatch = useContractSetMismatch()
  const defaultContractSetNotSet = useDefaultContractSetNotSet()
  const autopilotNotConfigured = useAutopilotNotConfigured()
  const notEnoughContracts = useNotEnoughContracts()

  // onboard/warn about default contract set
  if (defaultContractSetNotSet.active) {
    return (
      <div className="flex gap-1">
        <Text size="12" font="mono" weight="medium" color="amber">
          <Warning16 />
        </Text>
        <Text size="12" font="mono" weight="medium" color="amber">
          Configure a default contract set to get started.{' '}
          <Link
            underline="hover"
            size="12"
            font="mono"
            weight="medium"
            color="amber"
            href={routes.config.index}
          >
            Configuration →
          </Link>
        </Text>
      </div>
    )
  }

  // warn about contract set mismatch
  if (contractSetMismatch.active) {
    return (
      <Tooltip
        align="start"
        content={
          <>
            The autopilot contract set does not match the default contract set.
            This means that by default workers will not upload data to contracts
            that autopilot manages. Unless these contract are being manually
            maintained, this will result in data loss. Continue with caution or
            update the autopilot contract set to match the default contract set.
          </>
        }
      >
        <div className="flex gap-1">
          <Text size="12" font="mono" weight="medium" color="amber">
            <Warning16 />
          </Text>
          <Text size="12" font="mono" weight="medium" color="amber">
            Uploaded data will not be managed by autopilot.
          </Text>
        </div>
      </Tooltip>
    )
  }

  // only show if not on the root directory because the explorer empty state shows the same info
  const autopilotNotConfiguredRootDirectory =
    autopilotNotConfigured.active &&
    activeDirectoryPath === '/' &&
    dataState !== 'noneYet'
  const autopilotNotConfiguredNotRootDirectory =
    autopilotNotConfigured.active && activeDirectoryPath !== '/'
  if (
    autopilotNotConfiguredRootDirectory ||
    autopilotNotConfiguredNotRootDirectory
  ) {
    return (
      <div className="flex gap-1">
        <Text size="12" font="mono" weight="medium" color="amber">
          <Warning16 />
        </Text>
        <Text size="12" font="mono" weight="medium" color="amber">
          Configure autopilot to get started.{' '}
          <Link
            underline="hover"
            size="12"
            font="mono"
            weight="medium"
            color="amber"
            href={routes.autopilot.index}
          >
            Autopilot →
          </Link>
        </Text>
      </div>
    )
  }

  // only show if not on the root directory because the explorer empty state shows the same info
  const notEnoughContractsRootDirectory =
    notEnoughContracts.active &&
    activeDirectoryPath === '/' &&
    dataState !== 'noneYet'
  const notEnoughContractsNotRootDirectory =
    notEnoughContracts.active && activeDirectoryPath !== '/'
  if (notEnoughContractsRootDirectory || notEnoughContractsNotRootDirectory) {
    return (
      <div className="flex gap-1">
        <Text size="12" font="mono" weight="medium" color="amber">
          <Warning16 />
        </Text>
        <Text size="12" font="mono" weight="medium" color="amber">
          Not enought contracts to upload files. {notEnoughContracts.count}/
          {notEnoughContracts.required}
        </Text>
      </div>
    )
  }

  return null
}
