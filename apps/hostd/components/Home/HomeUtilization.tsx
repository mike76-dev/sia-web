import {
  ChartXY,
  Text,
  Heading,
  DatumCardConfigurable,
  DatumScrollArea,
} from '@siafoundation/design-system'
import { humanBytes } from '@siafoundation/sia-js'
import { useMetrics } from '../../contexts/metrics'
import { chartConfigs } from '../../config/charts'

export function HomeUtilization() {
  const { storage, bandwidth } = useMetrics()
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        <Heading>Storage</Heading>
        <DatumScrollArea>
          <DatumCardConfigurable
            label="storage"
            color={chartConfigs.storage.color}
            value={storage.stats['totalSectors']}
            defaultMode="latest"
            isLoading={storage.isLoading}
            enabledModes={['latest', 'average']}
            format={humanBytes}
          />
          <DatumCardConfigurable
            label="registry"
            color={chartConfigs.registry.color}
            value={storage.stats['registryEntries']}
            defaultMode="latest"
            isLoading={storage.isLoading}
            enabledModes={['latest', 'average']}
            format={humanBytes}
          />
        </DatumScrollArea>
        <ChartXY
          id="storage"
          height={300}
          data={storage.data}
          config={storage.config}
          isLoading={storage.isLoading}
          // chartType="line"
          actionsLeft={
            <>
              <Text font="mono" weight="semibold">
                Storage
              </Text>
            </>
          }
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        <Heading>Bandwidth</Heading>
        <DatumScrollArea>
          <DatumCardConfigurable
            label="ingress"
            color={chartConfigs.ingress.color}
            value={bandwidth.stats['ingress']}
            defaultMode="total"
            isLoading={bandwidth.isLoading}
            format={humanBytes}
          />
          <DatumCardConfigurable
            label="egress"
            color={chartConfigs.egress.color}
            value={bandwidth.stats['egress']}
            defaultMode="total"
            isLoading={bandwidth.isLoading}
            format={humanBytes}
          />
        </DatumScrollArea>
        <ChartXY
          id="bandwidth"
          height={300}
          data={bandwidth.data}
          config={bandwidth.config}
          isLoading={bandwidth.isLoading}
          chartType="line"
          actionsLeft={
            <>
              <Text font="mono" weight="semibold">
                Bandwidth
              </Text>
            </>
          }
        />
      </div>
    </div>
  )
}
