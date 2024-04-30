# sia-central-js

Methods and types for interacting with the Sia Central API.

## Installation

```sh
npm install @siafoundation/sia-central-js
```

## Usage

```js
import { SiaCentral } from '@siafoundation/sia-central-js'

export async function example() {
  const siaCentral = SiaCentral()
  const latestBlock = await siaCentral.blockLatest()
  const metrics = await siaCentral.hostsNetworkMetrics()
  const averages = await siaCentral.hostsNetworkAverages()
  const exchangeRates = await siaCentral.exchangeRates({
    params: {
      currencies: 'sc',
    },
  })
  console.log({ latestBlock, metrics, averages, exchangeRates })
}
```
