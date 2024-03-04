export interface ExchangeRatesResponse {
    conversion_rates: {
        [key: string]: number
    }
    base: string,
    date: string
}
