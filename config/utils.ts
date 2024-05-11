export function formatProductNameShort(productName: string) {
  if (productName.length <= 60) {
    return productName
  }
  return productName.substring(0, 57) + '...'
}

export function formatPrice(price: number): string {
  const formattedPrice: string = `DZD ${(Math.ceil(price / 100) * 100)
    .toString()
    .replace(/\d(?=(\d{3})+(?!\d))/g, '$&,')}`

  return formattedPrice
}
