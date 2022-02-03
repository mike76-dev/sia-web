import { Container } from '@siafoundation/design-system'
import { Buttons } from '../sections/Buttons'
import { Colors } from '../sections/Colors'
import { Typography } from '../sections/Typography'
import { Layout } from '../sections/Layout'
import { Menus } from '../sections/Menus'
import { Inputs } from '../sections/Inputs'
import { ControlGroups } from '../sections/ControlGroups'
import { Images } from '../sections/Images'
import { Indicators } from '../sections/Indicators'
import { Popups } from '../sections/Popups'
import { Skeletons } from '../sections/Skeletons'
import { Dialogs } from '../sections/Dialogs'

export function Index() {
  return (
    <Container size="3" css={{ py: '$5' }}>
      <Layout />
      <Typography />
      <Images />
      <Buttons />
      <Inputs />
      <Menus />
      <ControlGroups />
      <Indicators />
      <Dialogs />
      <Popups />
      <Skeletons />
      <Colors />
    </Container>
  )
}

export default Index
