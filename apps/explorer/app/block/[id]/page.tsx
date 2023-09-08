import { getTitleId } from '@siafoundation/design-system'
import { Block } from '../../../components/Block'
import { routes } from '../../../config/routes'
import { Metadata } from 'next'
import { getSiaCentralBlock } from '@siafoundation/sia-central'
import { buildMetadata } from '../../../lib/utils'
import { siaCentralApi } from '../../../config'
import { notFound } from 'next/navigation'

export function generateMetadata({ params }): Metadata {
  const id = decodeURIComponent((params?.id as string) || '')
  const height = Number(id || 0) as number
  if (isNaN(height)) {
    const title = getTitleId('Block', id)
    const description = getTitleId('View details for block', id)
    const url = routes.block.view.replace(':id', id)
    return buildMetadata({
      title,
      description,
      url,
    })
  }
  const title = `Block ${height.toLocaleString()}`
  const description = `View details for block ${height.toLocaleString()}`
  const url = routes.block.view.replace(':id', id)
  return buildMetadata({
    title,
    description,
    url,
  })
}

export const revalidate = 60

export default async function Page({ params }) {
  const id = params?.id as string
  const b = await getSiaCentralBlock({
    params: {
      id,
    },
    config: {
      api: siaCentralApi,
    },
  })

  if (!b.block) {
    return notFound()
  }

  return <Block block={b.block} />
}
