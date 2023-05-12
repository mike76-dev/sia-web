import {
  Text,
  Button,
  triggerSuccessToast,
  Reset16,
  Save16,
  ConfigurationPanel,
  triggerErrorToast,
  ConfigFields,
} from '@siafoundation/design-system'
import { useCallback, useEffect, useMemo } from 'react'
import { RenterdSidenav } from '../RenterdSidenav'
import { routes } from '../../config/routes'
import { useDialog } from '../../contexts/dialog'
import { RenterdAuthedLayout } from '../RenterdAuthedLayout'
import {
  useSatelliteConfig,
  useSatelliteConfigUpdate,
} from './renterdSatellite'
import { FieldErrors, useForm } from 'react-hook-form'
import { entries } from 'lodash'

const initialValues = {
  enabled: false,
  address: '',
  publicKey: '',
  renterSeed: '',
}

export function Satellite() {
  const form = useForm({
    mode: 'all',
    defaultValues: initialValues,
  })

  const fields: ConfigFields<typeof initialValues, 'satellite'> = {
    enabled: {
      type: 'boolean',
      category: 'satellite',
      title: 'Enabled',
      description: <>Check if you want to connect to a satellite.</>,
      validation: {},
    },
    address: {
      type: 'text',
      category: 'satellite',
      title: 'Address',
      description: (
        <>The network address of the satellite.</>
      ),
      suggestion: ' ',
      suggestionTip: (
        <>IP address or domain name plus port number.</>
      ),
      validation: {
        validate: {
          required: value => {
            if (!value && form.getValues('enabled')) return 'required'
            return true
          },
        },
      },
    },
    publicKey: {
      type: 'text',
      category: 'satellite',
      title: 'Public Key',
      description: (
        <>The public key of the satellite.</>
      ),
      suggestion: ' ',
      suggestionTip: (
        <>Hexadecimal 32-byte public key</>
      ),
      validation: {
        validate: {
          required: value => {
            if (!value && form.getValues('enabled')) return 'required'
            return true
          },
        },
        minLength: 64,
        maxLength: 64,
        pattern: /^[a-f0-9]+$/,
      },
    },
    renterSeed: {
      type: 'text',
      category: 'satellite',
      title: 'Renter Seed',
      description: (
        <>The seed provided by the satellite.</>
      ),
      suggestion: ' ',
      suggestionTip: (
        <>Hexadecimal 32-byte seed</>
      ),
      validation: {
        validate: {
          required: value => {
            if (!value && form.getValues('enabled')) return 'required'
            return true
          },
        },
        minLength: 64,
        maxLength: 64,
        pattern: /^[a-f0-9]+$/,
      },
    },
  }

  const { openDialog } = useDialog()
  const configUpdate = useSatelliteConfigUpdate()
  const config = useSatelliteConfig({
    // Do not automatically refetch
    config: {
      swr: {
        revalidateOnFocus: false,
      },
    },
  })

  const onValid = useCallback(
    async (values: typeof initialValues) => {
      if (!config.data) {
        return
      }
      try {
        await configUpdate.put({
          payload: {
            enabled: values.enabled,
            address: values.address,
            publicKey: encodePK(values.publicKey),
            renterSeed: encodeSeed(values.renterSeed),
          },
        })
        triggerSuccessToast('Configuration has been saved.')
      } catch (e) {
        triggerErrorToast((e as Error).message)
        console.log(e)
      }
    },
    [config.data, configUpdate]
  )

  const onInvalid = useCallback((errors: FieldErrors<typeof initialValues>) => {
    triggerErrorToast(
      entries(errors)
        .map(([key, e]) => `${fields[key].title}: ${e.message}`)
        .join(', ')
    )
  }, [])

  const onSubmit = useMemo(
    () => form.handleSubmit(onValid, onInvalid),
    [form, onValid, onInvalid]
  )

  const resetFormData = useCallback(() => {
    if (!config.data) {
      return
    }
    form.reset({
      enabled: config.data?.enabled,
      address: config.data?.address,
      publicKey: decodePK(config.data?.publicKey),
      renterSeed: decodeSeed(config.data?.renterSeed),
    })
  }, [form, config.data])

  const revalidateAndResetFormData = useCallback(async () => {
    await config.mutate()
    // Theoretically mutate should trigger the init effect,
    // but for some reason it does not (maybe when the response is cached?)
    // therefore we manually call form.reset.
    resetFormData()
  }, [resetFormData, config])

  // init - when new config is fetched, reset the form with the values
  useEffect(() => {
    resetFormData()
  }, [config.data])

  const changeCount = Object.entries(form.formState.dirtyFields).filter(
    ([_, val]) => !!val
  ).length

  return (
    <RenterdAuthedLayout
      title="Satellite"
      routes={routes}
      sidenav={<RenterdSidenav />}
      actions={
        <div className="flex items-center gap-2">
          {!!changeCount && (
            <Text size="12" color="subtle">
              {changeCount === 1 ? '1 change' : `${changeCount} changes`}
            </Text>
          )}
          <Button
            tip="Reset all changes"
            icon="contrast"
            disabled={!changeCount}
            onClick={() => revalidateAndResetFormData()}
          >
            <Reset16 />
          </Button>
          <Button
            tip="Save all changes"
            variant="accent"
            onClick={onSubmit}
          >
            <Save16 />
            Save changes
          </Button>
        </div>
      }
      openSettings={() => openDialog('settings')}
    >
      <div className="px-5 py-6 flex flex-col gap-16 max-w-screen-xl">
        <ConfigurationPanel
          title="Satellite Configuration"
          category="satellite"
          fields={fields}
          form={form}
        />
      </div>
    </RenterdAuthedLayout>
  )
}

function decodePK(pk: string) {
  let i = pk.indexOf(':')
  if (i < 0) {
    return pk
  } else {
    return pk.slice(i + 1)
  }
}

function encodePK(pk: string) {
  let i = pk.indexOf(':')
  if (i > 0) {
    return pk
  } else {
    return 'ed25519:' + pk
  }
}

function decodeSeed(seed: string) {
  return Buffer.from(seed, 'base64').toString('hex')
}

function encodeSeed(seed: string) {
  return Buffer.from(seed, 'hex').toString('base64')
}
