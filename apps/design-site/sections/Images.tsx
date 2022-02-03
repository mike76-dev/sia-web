import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  NImage,
  Section,
} from '@siafoundation/design-system'
import { SectionHeading } from '../components/SectionHeading'
import { SubsectionHeading } from '../components/SubsectionHeading'
import bellLabs from '../public/bell-labs.jpeg'
import macTeam from '../public/mac-team.png'
import avatar1 from '../public/avatar1.png'
import avatar2 from '../public/avatar2.png'
import avatar3 from '../public/avatar3.png'

export function Images() {
  return (
    <Section>
      <SectionHeading>Images</SectionHeading>
      <Section>
        <SubsectionHeading>Image</SubsectionHeading>
        <Grid
          columns={{
            '@initial': '1',
            '@bp2': '2',
          }}
          gap="2"
        >
          <Box>
            <NImage {...bellLabs} alt="bell labs" />
          </Box>
          <Box>
            <NImage {...macTeam} alt="mac team" />
          </Box>
        </Grid>
      </Section>
      <Section>
        <SubsectionHeading>Image - fill</SubsectionHeading>
        <Flex gap="2" justify="start">
          <Box
            css={{
              position: 'relative',
              height: '250px',
              width: '250px',
            }}
          >
            <NImage {...bellLabs} alt="bell labs" layout="fill" />
            <Button
              variant="transparentWhite"
              css={{
                position: 'absolute',
                bottom: '$1',
                right: '$1',
              }}
            >
              Bell Labs
            </Button>
          </Box>
          <Box
            css={{
              position: 'relative',
              height: '350px',
              width: '250px',
            }}
          >
            <NImage {...macTeam} alt="mac team" layout="fill" />
            <Button
              variant="transparentWhite"
              css={{
                position: 'absolute',
                bottom: '$1',
                right: '$1',
              }}
            >
              Apple
            </Button>
          </Box>
        </Flex>
      </Section>
      <Section>
        <SubsectionHeading>Avatar</SubsectionHeading>
        <Grid columns={{ '@initial': 1, '@bp2': 2 }} justify="start" gap="3">
          <Flex gap="2" align="center" justify="start">
            <Avatar size="1" src={avatar1.src} interactive />
            <Avatar size="2" src={avatar2.src} interactive />
            <Avatar size="3" src={avatar3.src} interactive />
            <Avatar size="4" src={avatar1.src} interactive />
            <Avatar size="5" src={avatar2.src} interactive />
            <Avatar size="6" src={avatar3.src} interactive />
          </Flex>
          <Flex gap="2" align="center" justify="start">
            <Avatar size="1" fallback="RH" interactive />
            <Avatar size="2" fallback="RH" interactive />
            <Avatar size="3" fallback="RH" interactive />
            <Avatar size="4" fallback="RH" interactive />
            <Avatar size="5" fallback="RH" interactive />
            <Avatar size="6" fallback="RH" interactive />
          </Flex>
          <Flex gap="2" align="center" justify="start">
            <Avatar shape="square" size="1" src={avatar1.src} />
            <Avatar shape="square" size="2" src={avatar2.src} />
            <Avatar shape="square" size="3" src={avatar3.src} />
            <Avatar shape="square" size="4" src={avatar1.src} />
            <Avatar shape="square" size="5" src={avatar2.src} />
            <Avatar shape="square" size="6" src={avatar3.src} />
          </Flex>
        </Grid>
      </Section>
      <Section>
        <SubsectionHeading>AvatarGroup</SubsectionHeading>
        <Grid columns={{ '@initial': 1, '@bp2': 2 }} justify="start" gap="3">
          <Flex gap="2" align="center" justify="start">
            <AvatarGroup>
              <Avatar size="2" status="green" src={avatar1.src} interactive />
              <Avatar size="2" status="green" src={avatar2.src} interactive />
              <Avatar size="2" status="green" src={avatar3.src} interactive />
              <Avatar size="2" status="yellow" src={avatar3.src} inactive />
              <Avatar size="2" status="yellow" alt="A" fallback="A" inactive />
            </AvatarGroup>
          </Flex>
          <Flex gap="2" align="center" justify="start">
            <AvatarGroup>
              <Avatar
                shape="square"
                size="2"
                status="green"
                src={avatar1.src}
                interactive
              />
              <Avatar
                shape="square"
                size="2"
                status="green"
                src={avatar2.src}
                interactive
              />
              <Avatar
                shape="square"
                size="2"
                status="green"
                src={avatar3.src}
                interactive
              />
              <Avatar
                shape="square"
                size="2"
                status="yellow"
                src={avatar3.src}
                inactive
              />
              <Avatar
                shape="square"
                size="2"
                status="yellow"
                alt="A"
                fallback="A"
                inactive
              />
            </AvatarGroup>
          </Flex>
        </Grid>
      </Section>
    </Section>
  )
}
