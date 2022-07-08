import {
  Avatar,
  Box,
  NextLink,
  Tooltip,
  EntityTypes,
  getEntityTypeInitials,
  getEntityTypeLabel,
} from '@siafoundation/design-system'

type Props = {
  initials?: string
  type?: EntityTypes
  label?: string
  href?: string
  shape?: 'square' | 'circle'
}

export function EntityAvatar({ type, label, initials, href, shape }: Props) {
  const avatarEl = (
    <Avatar
      interactive={!!href}
      fallback={initials || getEntityTypeInitials(type)}
      shape={
        shape ||
        (!type || type === 'address' || type === 'block' ? 'square' : 'circle')
      }
    />
  )
  const linkEl = href && <NextLink href={href}>{avatarEl}</NextLink>
  const el = linkEl || avatarEl

  if (type) {
    return (
      <Tooltip content={label || getEntityTypeLabel(type)}>
        <Box>{el}</Box>
      </Tooltip>
    )
  }

  return el
}
