import { ContractsProvider } from '../contexts/contracts'
import { MetricsProvider } from '../contexts/metrics'
import { DialogProvider, Dialogs } from '../contexts/dialog'
import { VolumesProvider } from '../contexts/volumes'
import { ConfigProvider } from '../contexts/config'
import { OnboardingBar } from '../components/OnboardingBar'
import { TransactionsProvider } from '../contexts/transactions'

type Props = {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <DialogProvider>
      <ConfigProvider>
        <TransactionsProvider>
          <VolumesProvider>
            <ContractsProvider>
              <MetricsProvider>
                {/* this is here so that dialogs can use all the other providers,
            and the other providers can trigger dialogs */}
                <Dialogs />
                <OnboardingBar />
                {children}
              </MetricsProvider>
            </ContractsProvider>
          </VolumesProvider>
        </TransactionsProvider>
      </ConfigProvider>
    </DialogProvider>
  )
}
