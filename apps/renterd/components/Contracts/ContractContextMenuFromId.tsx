import { Button } from '@siafoundation/design-system'
import { CaretDown16 } from '@siafoundation/react-icons'
import { useContract } from '@siafoundation/react-renterd'
import { ContractContextMenu } from './ContractContextMenu'

type Props = {
  id: string
  contentProps?: React.ComponentProps<
    typeof ContractContextMenu
  >['contentProps']
  buttonProps?: React.ComponentProps<typeof Button>
}

export function ContractContextMenuFromId({
  id,
  contentProps,
  buttonProps,
}: Props) {
  const contract = useContract({
    params: { id },
  })

  if (!contract.data) {
    return (
      <Button
        size="none"
        icon="hover"
        variant="ghost"
        state="waiting"
        {...buttonProps}
      >
        <CaretDown16 />
      </Button>
    )
  }
  return (
    <ContractContextMenu
      id={id}
      address={contract.data.hostIP}
      publicKey={contract.data.hostKey}
      contentProps={contentProps}
      buttonProps={buttonProps}
      trigger={
        <Button size="none" icon="hover" variant="ghost" {...buttonProps}>
          <CaretDown16 />
        </Button>
      }
    />
  )
}
