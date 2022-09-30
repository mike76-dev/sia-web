import { Box, Flex, Grid, Section, Text } from '@siafoundation/design-system'
import { Fragment } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { SubsectionHeading } from '../components/SubsectionHeading'

export function Colors() {
  return (
    <>
      <Flex direction="column" gap="5">
        <Section py="1">
          <SectionHeading>Colors</SectionHeading>
          <Legend />
        </Section>
        <Section>
          <SubsectionHeading>Brand color system</SubsectionHeading>
          <Flex direction="column" gap="2">
            <Grid
              css={{
                gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
                gap: 2,
                ai: 'center',
              }}
            >
              <Headers />
              <Box>
                <Text size="12">Accent</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$accent1' }} />
              <Box css={{ height: 35, backgroundColor: '$accent2' }} />
              <Box css={{ height: 35, backgroundColor: '$accent3' }} />
              <Box css={{ height: 35, backgroundColor: '$accent4' }} />
              <Box css={{ height: 35, backgroundColor: '$accent5' }} />
              <Box css={{ height: 35, backgroundColor: '$accent6' }} />
              <Box css={{ height: 35, backgroundColor: '$accent7' }} />
              <Box css={{ height: 35, backgroundColor: '$accent8' }} />
              <Box css={{ height: 35, backgroundColor: '$accent9' }} />
              <Box css={{ height: 35, backgroundColor: '$accent10' }} />
              <Box css={{ height: 35, backgroundColor: '$accent11' }} />
              <Box css={{ height: 35, backgroundColor: '$accent12' }} />
              <Box>
                <Text size="12">Gray</Text>
              </Box>
              <Box css={{ height: 35, backgroundColor: '$gray1' }} />
              <Box css={{ height: 35, backgroundColor: '$gray2' }} />
              <Box css={{ height: 35, backgroundColor: '$gray3' }} />
              <Box css={{ height: 35, backgroundColor: '$gray4' }} />
              <Box css={{ height: 35, backgroundColor: '$gray5' }} />
              <Box css={{ height: 35, backgroundColor: '$gray6' }} />
              <Box css={{ height: 35, backgroundColor: '$gray7' }} />
              <Box css={{ height: 35, backgroundColor: '$gray8' }} />
              <Box css={{ height: 35, backgroundColor: '$gray9' }} />
              <Box css={{ height: 35, backgroundColor: '$gray10' }} />
              <Box css={{ height: 35, backgroundColor: '$gray11' }} />
              <Box css={{ height: 35, backgroundColor: '$gray12' }} />
            </Grid>
          </Flex>
        </Section>
        <Section>
          <SubsectionHeading>Semantic color system</SubsectionHeading>
          <Grid
            css={{
              gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
              gap: 2,
              ai: 'center',
            }}
          >
            <Headers />
            {/* <Box>
              <Text size="12">Gray</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$gray1' }} />
            <Box css={{ height: 35, backgroundColor: '$gray2' }} />
            <Box css={{ height: 35, backgroundColor: '$gray3' }} />
            <Box css={{ height: 35, backgroundColor: '$gray4' }} />
            <Box css={{ height: 35, backgroundColor: '$gray5' }} />
            <Box css={{ height: 35, backgroundColor: '$gray6' }} />
            <Box css={{ height: 35, backgroundColor: '$gray7' }} />
            <Box css={{ height: 35, backgroundColor: '$gray8' }} />
            <Box css={{ height: 35, backgroundColor: '$gray9' }} />
            <Box css={{ height: 35, backgroundColor: '$gray10' }} />
            <Box css={{ height: 35, backgroundColor: '$gray11' }} />
            <Box css={{ height: 35, backgroundColor: '$gray12' }} />

            <Box>
              <Text size="12">Mauve</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$mauve1' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve2' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve3' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve4' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve5' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve6' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve7' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve8' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve9' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve10' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve11' }} />
            <Box css={{ height: 35, backgroundColor: '$mauve12' }} />

            <Box>
              <Text size="12">Slate</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$slate1' }} />
            <Box css={{ height: 35, backgroundColor: '$slate2' }} />
            <Box css={{ height: 35, backgroundColor: '$slate3' }} />
            <Box css={{ height: 35, backgroundColor: '$slate4' }} />
            <Box css={{ height: 35, backgroundColor: '$slate5' }} />
            <Box css={{ height: 35, backgroundColor: '$slate6' }} />
            <Box css={{ height: 35, backgroundColor: '$slate7' }} />
            <Box css={{ height: 35, backgroundColor: '$slate8' }} />
            <Box css={{ height: 35, backgroundColor: '$slate9' }} />
            <Box css={{ height: 35, backgroundColor: '$slate10' }} />
            <Box css={{ height: 35, backgroundColor: '$slate11' }} />
            <Box css={{ height: 35, backgroundColor: '$slate12' }} />

            <Box>
              <Text size="12">Sage</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$sage1' }} />
            <Box css={{ height: 35, backgroundColor: '$sage2' }} />
            <Box css={{ height: 35, backgroundColor: '$sage3' }} />
            <Box css={{ height: 35, backgroundColor: '$sage4' }} />
            <Box css={{ height: 35, backgroundColor: '$sage5' }} />
            <Box css={{ height: 35, backgroundColor: '$sage6' }} />
            <Box css={{ height: 35, backgroundColor: '$sage7' }} />
            <Box css={{ height: 35, backgroundColor: '$sage8' }} />
            <Box css={{ height: 35, backgroundColor: '$sage9' }} />
            <Box css={{ height: 35, backgroundColor: '$sage10' }} />
            <Box css={{ height: 35, backgroundColor: '$sage11' }} />
            <Box css={{ height: 35, backgroundColor: '$sage12' }} />

            <Box>
              <Text size="12">Olive</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$olive1' }} />
            <Box css={{ height: 35, backgroundColor: '$olive2' }} />
            <Box css={{ height: 35, backgroundColor: '$olive3' }} />
            <Box css={{ height: 35, backgroundColor: '$olive4' }} />
            <Box css={{ height: 35, backgroundColor: '$olive5' }} />
            <Box css={{ height: 35, backgroundColor: '$olive6' }} />
            <Box css={{ height: 35, backgroundColor: '$olive7' }} />
            <Box css={{ height: 35, backgroundColor: '$olive8' }} />
            <Box css={{ height: 35, backgroundColor: '$olive9' }} />
            <Box css={{ height: 35, backgroundColor: '$olive10' }} />
            <Box css={{ height: 35, backgroundColor: '$olive11' }} />
            <Box css={{ height: 35, backgroundColor: '$olive12' }} />

            <Box>
              <Text size="12">Sand</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$sand1' }} />
            <Box css={{ height: 35, backgroundColor: '$sand2' }} />
            <Box css={{ height: 35, backgroundColor: '$sand3' }} />
            <Box css={{ height: 35, backgroundColor: '$sand4' }} />
            <Box css={{ height: 35, backgroundColor: '$sand5' }} />
            <Box css={{ height: 35, backgroundColor: '$sand6' }} />
            <Box css={{ height: 35, backgroundColor: '$sand7' }} />
            <Box css={{ height: 35, backgroundColor: '$sand8' }} />
            <Box css={{ height: 35, backgroundColor: '$sand9' }} />
            <Box css={{ height: 35, backgroundColor: '$sand10' }} />
            <Box css={{ height: 35, backgroundColor: '$sand11' }} />
            <Box css={{ height: 35, backgroundColor: '$sand12' }} />

            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} /> */}

            <Box>
              <Text size="12">Tomato</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$tomato1' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato2' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato3' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato4' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato5' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato6' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato7' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato8' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato9' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato10' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato11' }} />
            <Box css={{ height: 35, backgroundColor: '$tomato12' }} />

            <Box>
              <Text size="12">Red</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$red1' }} />
            <Box css={{ height: 35, backgroundColor: '$red2' }} />
            <Box css={{ height: 35, backgroundColor: '$red3' }} />
            <Box css={{ height: 35, backgroundColor: '$red4' }} />
            <Box css={{ height: 35, backgroundColor: '$red5' }} />
            <Box css={{ height: 35, backgroundColor: '$red6' }} />
            <Box css={{ height: 35, backgroundColor: '$red7' }} />
            <Box css={{ height: 35, backgroundColor: '$red8' }} />
            <Box css={{ height: 35, backgroundColor: '$red9' }} />
            <Box css={{ height: 35, backgroundColor: '$red10' }} />
            <Box css={{ height: 35, backgroundColor: '$red11' }} />
            <Box css={{ height: 35, backgroundColor: '$red12' }} />

            <Box>
              <Text size="12">Crimson</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$crimson1' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson2' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson3' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson4' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson5' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson6' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson7' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson8' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson9' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson10' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson11' }} />
            <Box css={{ height: 35, backgroundColor: '$crimson12' }} />

            <Box>
              <Text size="12">Pink</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$pink1' }} />
            <Box css={{ height: 35, backgroundColor: '$pink2' }} />
            <Box css={{ height: 35, backgroundColor: '$pink3' }} />
            <Box css={{ height: 35, backgroundColor: '$pink4' }} />
            <Box css={{ height: 35, backgroundColor: '$pink5' }} />
            <Box css={{ height: 35, backgroundColor: '$pink6' }} />
            <Box css={{ height: 35, backgroundColor: '$pink7' }} />
            <Box css={{ height: 35, backgroundColor: '$pink8' }} />
            <Box css={{ height: 35, backgroundColor: '$pink9' }} />
            <Box css={{ height: 35, backgroundColor: '$pink10' }} />
            <Box css={{ height: 35, backgroundColor: '$pink11' }} />
            <Box css={{ height: 35, backgroundColor: '$pink12' }} />

            <Box>
              <Text size="12">Plum</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$plum1' }} />
            <Box css={{ height: 35, backgroundColor: '$plum2' }} />
            <Box css={{ height: 35, backgroundColor: '$plum3' }} />
            <Box css={{ height: 35, backgroundColor: '$plum4' }} />
            <Box css={{ height: 35, backgroundColor: '$plum5' }} />
            <Box css={{ height: 35, backgroundColor: '$plum6' }} />
            <Box css={{ height: 35, backgroundColor: '$plum7' }} />
            <Box css={{ height: 35, backgroundColor: '$plum8' }} />
            <Box css={{ height: 35, backgroundColor: '$plum9' }} />
            <Box css={{ height: 35, backgroundColor: '$plum10' }} />
            <Box css={{ height: 35, backgroundColor: '$plum11' }} />
            <Box css={{ height: 35, backgroundColor: '$plum12' }} />

            <Box>
              <Text size="12">Purple</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$purple1' }} />
            <Box css={{ height: 35, backgroundColor: '$purple2' }} />
            <Box css={{ height: 35, backgroundColor: '$purple3' }} />
            <Box css={{ height: 35, backgroundColor: '$purple4' }} />
            <Box css={{ height: 35, backgroundColor: '$purple5' }} />
            <Box css={{ height: 35, backgroundColor: '$purple6' }} />
            <Box css={{ height: 35, backgroundColor: '$purple7' }} />
            <Box css={{ height: 35, backgroundColor: '$purple8' }} />
            <Box css={{ height: 35, backgroundColor: '$purple9' }} />
            <Box css={{ height: 35, backgroundColor: '$purple10' }} />
            <Box css={{ height: 35, backgroundColor: '$purple11' }} />
            <Box css={{ height: 35, backgroundColor: '$purple12' }} />

            <Box>
              <Text size="12">Violet</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$violet1' }} />
            <Box css={{ height: 35, backgroundColor: '$violet2' }} />
            <Box css={{ height: 35, backgroundColor: '$violet3' }} />
            <Box css={{ height: 35, backgroundColor: '$violet4' }} />
            <Box css={{ height: 35, backgroundColor: '$violet5' }} />
            <Box css={{ height: 35, backgroundColor: '$violet6' }} />
            <Box css={{ height: 35, backgroundColor: '$violet7' }} />
            <Box css={{ height: 35, backgroundColor: '$violet8' }} />
            <Box css={{ height: 35, backgroundColor: '$violet9' }} />
            <Box css={{ height: 35, backgroundColor: '$violet10' }} />
            <Box css={{ height: 35, backgroundColor: '$violet11' }} />
            <Box css={{ height: 35, backgroundColor: '$violet12' }} />

            <Box>
              <Text size="12">Indigo</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$indigo1' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo2' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo3' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo4' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo5' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo6' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo7' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo8' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo9' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo10' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo11' }} />
            <Box css={{ height: 35, backgroundColor: '$indigo12' }} />

            <Box>
              <Text size="12">Blue</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$blue1' }} />
            <Box css={{ height: 35, backgroundColor: '$blue2' }} />
            <Box css={{ height: 35, backgroundColor: '$blue3' }} />
            <Box css={{ height: 35, backgroundColor: '$blue4' }} />
            <Box css={{ height: 35, backgroundColor: '$blue5' }} />
            <Box css={{ height: 35, backgroundColor: '$blue6' }} />
            <Box css={{ height: 35, backgroundColor: '$blue7' }} />
            <Box css={{ height: 35, backgroundColor: '$blue8' }} />
            <Box css={{ height: 35, backgroundColor: '$blue9' }} />
            <Box css={{ height: 35, backgroundColor: '$blue10' }} />
            <Box css={{ height: 35, backgroundColor: '$blue11' }} />
            <Box css={{ height: 35, backgroundColor: '$blue12' }} />

            <Box>
              <Text size="12">Cyan</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$cyan1' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan2' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan3' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan4' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan5' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan6' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan7' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan8' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan9' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan10' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan11' }} />
            <Box css={{ height: 35, backgroundColor: '$cyan12' }} />

            <Box>
              <Text size="12">Teal</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$teal1' }} />
            <Box css={{ height: 35, backgroundColor: '$teal2' }} />
            <Box css={{ height: 35, backgroundColor: '$teal3' }} />
            <Box css={{ height: 35, backgroundColor: '$teal4' }} />
            <Box css={{ height: 35, backgroundColor: '$teal5' }} />
            <Box css={{ height: 35, backgroundColor: '$teal6' }} />
            <Box css={{ height: 35, backgroundColor: '$teal7' }} />
            <Box css={{ height: 35, backgroundColor: '$teal8' }} />
            <Box css={{ height: 35, backgroundColor: '$teal9' }} />
            <Box css={{ height: 35, backgroundColor: '$teal10' }} />
            <Box css={{ height: 35, backgroundColor: '$teal11' }} />
            <Box css={{ height: 35, backgroundColor: '$teal12' }} />

            <Box>
              <Text size="12">Green</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$green1' }} />
            <Box css={{ height: 35, backgroundColor: '$green2' }} />
            <Box css={{ height: 35, backgroundColor: '$green3' }} />
            <Box css={{ height: 35, backgroundColor: '$green4' }} />
            <Box css={{ height: 35, backgroundColor: '$green5' }} />
            <Box css={{ height: 35, backgroundColor: '$green6' }} />
            <Box css={{ height: 35, backgroundColor: '$green7' }} />
            <Box css={{ height: 35, backgroundColor: '$green8' }} />
            <Box css={{ height: 35, backgroundColor: '$green9' }} />
            <Box css={{ height: 35, backgroundColor: '$green10' }} />
            <Box css={{ height: 35, backgroundColor: '$green11' }} />
            <Box css={{ height: 35, backgroundColor: '$green12' }} />

            <Box>
              <Text size="12">Grass</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$grass1' }} />
            <Box css={{ height: 35, backgroundColor: '$grass2' }} />
            <Box css={{ height: 35, backgroundColor: '$grass3' }} />
            <Box css={{ height: 35, backgroundColor: '$grass4' }} />
            <Box css={{ height: 35, backgroundColor: '$grass5' }} />
            <Box css={{ height: 35, backgroundColor: '$grass6' }} />
            <Box css={{ height: 35, backgroundColor: '$grass7' }} />
            <Box css={{ height: 35, backgroundColor: '$grass8' }} />
            <Box css={{ height: 35, backgroundColor: '$grass9' }} />
            <Box css={{ height: 35, backgroundColor: '$grass10' }} />
            <Box css={{ height: 35, backgroundColor: '$grass11' }} />
            <Box css={{ height: 35, backgroundColor: '$grass12' }} />

            <Box>
              <Text size="12">Brown</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$brown1' }} />
            <Box css={{ height: 35, backgroundColor: '$brown2' }} />
            <Box css={{ height: 35, backgroundColor: '$brown3' }} />
            <Box css={{ height: 35, backgroundColor: '$brown4' }} />
            <Box css={{ height: 35, backgroundColor: '$brown5' }} />
            <Box css={{ height: 35, backgroundColor: '$brown6' }} />
            <Box css={{ height: 35, backgroundColor: '$brown7' }} />
            <Box css={{ height: 35, backgroundColor: '$brown8' }} />
            <Box css={{ height: 35, backgroundColor: '$brown9' }} />
            <Box css={{ height: 35, backgroundColor: '$brown10' }} />
            <Box css={{ height: 35, backgroundColor: '$brown11' }} />
            <Box css={{ height: 35, backgroundColor: '$brown12' }} />

            <Box>
              <Text size="12">Orange</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$orange1' }} />
            <Box css={{ height: 35, backgroundColor: '$orange2' }} />
            <Box css={{ height: 35, backgroundColor: '$orange3' }} />
            <Box css={{ height: 35, backgroundColor: '$orange4' }} />
            <Box css={{ height: 35, backgroundColor: '$orange5' }} />
            <Box css={{ height: 35, backgroundColor: '$orange6' }} />
            <Box css={{ height: 35, backgroundColor: '$orange7' }} />
            <Box css={{ height: 35, backgroundColor: '$orange8' }} />
            <Box css={{ height: 35, backgroundColor: '$orange9' }} />
            <Box css={{ height: 35, backgroundColor: '$orange10' }} />
            <Box css={{ height: 35, backgroundColor: '$orange11' }} />
            <Box css={{ height: 35, backgroundColor: '$orange12' }} />

            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />

            <Box>
              <Text size="12">Sky</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$sky1' }} />
            <Box css={{ height: 35, backgroundColor: '$sky2' }} />
            <Box css={{ height: 35, backgroundColor: '$sky3' }} />
            <Box css={{ height: 35, backgroundColor: '$sky4' }} />
            <Box css={{ height: 35, backgroundColor: '$sky5' }} />
            <Box css={{ height: 35, backgroundColor: '$sky6' }} />
            <Box css={{ height: 35, backgroundColor: '$sky7' }} />
            <Box css={{ height: 35, backgroundColor: '$sky8' }} />
            <Box css={{ height: 35, backgroundColor: '$sky9' }} />
            <Box css={{ height: 35, backgroundColor: '$sky10' }} />
            <Box css={{ height: 35, backgroundColor: '$sky11' }} />
            <Box css={{ height: 35, backgroundColor: '$sky12' }} />

            <Box>
              <Text size="12">Mint</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$mint1' }} />
            <Box css={{ height: 35, backgroundColor: '$mint2' }} />
            <Box css={{ height: 35, backgroundColor: '$mint3' }} />
            <Box css={{ height: 35, backgroundColor: '$mint4' }} />
            <Box css={{ height: 35, backgroundColor: '$mint5' }} />
            <Box css={{ height: 35, backgroundColor: '$mint6' }} />
            <Box css={{ height: 35, backgroundColor: '$mint7' }} />
            <Box css={{ height: 35, backgroundColor: '$mint8' }} />
            <Box css={{ height: 35, backgroundColor: '$mint9' }} />
            <Box css={{ height: 35, backgroundColor: '$mint10' }} />
            <Box css={{ height: 35, backgroundColor: '$mint11' }} />
            <Box css={{ height: 35, backgroundColor: '$mint12' }} />

            <Box>
              <Text size="12">Lime</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$lime1' }} />
            <Box css={{ height: 35, backgroundColor: '$lime2' }} />
            <Box css={{ height: 35, backgroundColor: '$lime3' }} />
            <Box css={{ height: 35, backgroundColor: '$lime4' }} />
            <Box css={{ height: 35, backgroundColor: '$lime5' }} />
            <Box css={{ height: 35, backgroundColor: '$lime6' }} />
            <Box css={{ height: 35, backgroundColor: '$lime7' }} />
            <Box css={{ height: 35, backgroundColor: '$lime8' }} />
            <Box css={{ height: 35, backgroundColor: '$lime9' }} />
            <Box css={{ height: 35, backgroundColor: '$lime10' }} />
            <Box css={{ height: 35, backgroundColor: '$lime11' }} />
            <Box css={{ height: 35, backgroundColor: '$lime12' }} />

            <Box>
              <Text size="12">Yellow</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$yellow1' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow2' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow3' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow4' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow5' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow6' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow7' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow8' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow9' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow10' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow11' }} />
            <Box css={{ height: 35, backgroundColor: '$yellow12' }} />

            <Box>
              <Text size="12">Amber</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$amber1' }} />
            <Box css={{ height: 35, backgroundColor: '$amber2' }} />
            <Box css={{ height: 35, backgroundColor: '$amber3' }} />
            <Box css={{ height: 35, backgroundColor: '$amber4' }} />
            <Box css={{ height: 35, backgroundColor: '$amber5' }} />
            <Box css={{ height: 35, backgroundColor: '$amber6' }} />
            <Box css={{ height: 35, backgroundColor: '$amber7' }} />
            <Box css={{ height: 35, backgroundColor: '$amber8' }} />
            <Box css={{ height: 35, backgroundColor: '$amber9' }} />
            <Box css={{ height: 35, backgroundColor: '$amber10' }} />
            <Box css={{ height: 35, backgroundColor: '$amber11' }} />
            <Box css={{ height: 35, backgroundColor: '$amber12' }} />

            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />
            <Box css={{ height: 35 }} />

            <Box>
              <Text size="12">Gold</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$gold1' }} />
            <Box css={{ height: 35, backgroundColor: '$gold2' }} />
            <Box css={{ height: 35, backgroundColor: '$gold3' }} />
            <Box css={{ height: 35, backgroundColor: '$gold4' }} />
            <Box css={{ height: 35, backgroundColor: '$gold5' }} />
            <Box css={{ height: 35, backgroundColor: '$gold6' }} />
            <Box css={{ height: 35, backgroundColor: '$gold7' }} />
            <Box css={{ height: 35, backgroundColor: '$gold8' }} />
            <Box css={{ height: 35, backgroundColor: '$gold9' }} />
            <Box css={{ height: 35, backgroundColor: '$gold10' }} />
            <Box css={{ height: 35, backgroundColor: '$gold11' }} />
            <Box css={{ height: 35, backgroundColor: '$gold12' }} />

            <Box>
              <Text size="12">Bronze</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$bronze1' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze2' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze3' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze4' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze5' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze6' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze7' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze8' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze9' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze10' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze11' }} />
            <Box css={{ height: 35, backgroundColor: '$bronze12' }} />
          </Grid>
        </Section>
      </Flex>
    </>
  )
}

function Legend() {
  return (
    <Grid
      columns={{
        '@initial': '2',
        '@bp2': '3',
        '@bp3': '4',
      }}
      gap="2"
    >
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          1
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          App background
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          2
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Subtle background
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          3
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          UI element background
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          4
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Hovered UI element background
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          5
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Active UI element background
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          6
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Subtle borders and separators
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          7
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          UI element border and focus rings
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          8
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Hovered UI element border
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          9
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Solid backgrounds
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          10
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Hovered solid backgrounds
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          11
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          Low-contrast text
        </Text>
      </Flex>
      <Flex gap="1" align="center">
        <Text size="12" css={{ color: '$gray11' }}>
          12
        </Text>
        <Text size="12" css={{ color: '$gray11' }}>
          High-contrast text
        </Text>
      </Flex>
    </Grid>
  )
}

function Headers() {
  return (
    <Fragment>
      <Box />
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          1
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          2
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          3
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          4
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          5
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          6
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          7
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          8
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          9
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          10
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          11
        </Text>
      </Box>
      <Box css={{ ta: 'center', pb: '$2' }}>
        <Text size="12" css={{ color: '$gray11' }}>
          12
        </Text>
      </Box>
    </Fragment>
  )
}
