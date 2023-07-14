import {
  ChartXY,
  Text,
  Heading,
  DatumCardConfigurable,
  DatumScrollArea,
} from '@siafoundation/design-system'
import { useMetrics } from '../../contexts/metrics'

export function HomeCollateral() {
  const { collateral } = useMetrics()

  return (
    <div className="flex flex-col gap-3">
      <Heading>Collateral</Heading>
      <DatumScrollArea bleed>
        <DatumCardConfigurable
          label="Locked collateral"
          color={collateral.config.data['locked'].color}
          sc={collateral.stats['locked']}
          format={(v) => v.toFixed(0)}
          defaultMode="latest"
          isLoading={collateral.isLoading}
          enabledModes={['latest', 'average']}
        />
        <DatumCardConfigurable
          label="Risked collateral"
          color={collateral.config.data['risked'].color}
          sc={collateral.stats['risked']}
          format={(v) => v.toFixed(0)}
          defaultMode="latest"
          isLoading={collateral.isLoading}
          enabledModes={['latest', 'average']}
        />
      </DatumScrollArea>
      <ChartXY
        id="collateral"
        actionsLeft={
          <>
            <Text font="mono" weight="semibold">
              Collateral
            </Text>
          </>
        }
        data={collateral.data}
        config={collateral.config}
        isLoading={collateral.isLoading}
        chartType={collateral.chartType}
        height={300}
      />
    </div>
  )
}
