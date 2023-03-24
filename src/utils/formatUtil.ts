
export function formatDate(date: Date): string {
  const locale: string = 'es-CL'
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(new Date(date));
}

export function formatCurrency(currency: string, price: number): string {
  let currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  return currencyFormat.format(price)
}