import {
  triggerSuccessToast,
  triggerErrorToast,
  minutesInMilliseconds,
} from '@siafoundation/design-system'
import { useCallback } from 'react'
import { SettingsData, initialValues } from './types'
import { calculateMaxCollateral, transformUp } from './transform'
import { Resources } from './resources'
import { useSettingsUpdate, useStateHost } from '@siafoundation/hostd-react'

export function useOnValid({
  resources,
  showAdvanced,
  revalidateAndResetForm,
}: {
  resources: Resources
  showAdvanced: boolean
  revalidateAndResetForm: () => Promise<void>
}) {
  const settingsUpdate = useSettingsUpdate()
  const host = useStateHost({
    config: {
      swr: {
        refreshInterval: minutesInMilliseconds(1),
      },
    },
  })
  const onValid = useCallback(
    async (values: typeof initialValues) => {
      if (!resources) {
        return
      }
      try {
        const calculatedValues: Partial<SettingsData> = {}
        if (!showAdvanced) {
          calculatedValues.maxCollateral = calculateMaxCollateral(
            values.storagePrice,
            values.collateralMultiplier
          )
        }

        const finalValues = {
          ...values,
          ...calculatedValues,
        }

        const response = await settingsUpdate.patch({
          payload: transformUp(finalValues, resources.settings.data),
        })
        if (response.error) {
          throw Error(response.error)
        }
        const needsToAnnounce =
          host.data?.lastAnnouncement?.address !== values.netAddress
        if (needsToAnnounce) {
          triggerSuccessToast({
            title: 'Settings have been saved',
            body: 'Address has changed, make sure to re-announce the host.',
            options: {
              duration: 20_000,
            },
          })
        } else {
          triggerSuccessToast({ title: 'Settings have been saved' })
        }
        await revalidateAndResetForm()
      } catch (e) {
        triggerErrorToast({
          title: 'Error updating settings',
          body: (e as Error).message,
        })
        console.log(e)
      }
    },
    [showAdvanced, resources, settingsUpdate, revalidateAndResetForm, host.data]
  )
  return onValid
}
