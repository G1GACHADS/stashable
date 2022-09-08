const defaultOptions = {
  thousandsSeparator: '.',
  symbol: 'Rp. ',
}

export const currencyFormatter = (value, options) => {
  if (typeof value !== 'number') value = 0.0
  options = { ...defaultOptions, ...options }

  const { symbol, thousandsSeparator } = options
  const [integer] = value.toString().split('.')
  const integerFormatted = integer.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1${thousandsSeparator}`
  )
  return `${symbol}${integerFormatted}`
}
