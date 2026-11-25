export type Currency = 'usd' | 'eur' | 'ars'

export interface CoingeckoPrice {
  usd?: number
  eur?: number
  ars?: number
}

export interface CoingeckoResponse {
  bitcoin?: CoingeckoPrice
  ethereum?: CoingeckoPrice
  solana?: CoingeckoPrice
}