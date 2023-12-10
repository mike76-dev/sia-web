import BigNumber from 'bignumber.js'

export function toFixedMax(val: BigNumber, limit: number) {
  let dp = val.decimalPlaces()
  return dp && dp > limit ? val.toFixed(limit) : val.toString()
}

// to precision for values less than 1, otherwise to fixed
export function toFixedOrPrecision(
  val: BigNumber | number,
  {
    digits,
    dynamicFixed = true,
  }: {
    // number of digits to round to
    digits: number
    // if true, will use toFixed if decimalPlaces > digits
    dynamicFixed?: boolean
  }
) {
  const v = new BigNumber(val)
  if (v.lt(1)) {
    return v.precision(digits)
  }
  if (dynamicFixed) {
    let dp = v.decimalPlaces()
    return dp && dp > digits ? v.toFormat(digits) : v.toFormat()
  }
  return v.toFormat(digits)
}
