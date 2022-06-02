export interface Chain {
  readonly name: string;
  readonly logoURI: string;
  readonly ncoin: Coin;
  readonly tokens: Token[];
}

export interface Coin {
  readonly name: string;
  readonly symbol: string;
  readonly type: string;
  readonly decimals: number;
  readonly website: string;
  readonly explorer: string;
  readonly links?: Link;
}

export interface Token {
  readonly name: string;
  readonly symbol: string;
  readonly type: string;
  readonly decimals: number;
  readonly address: string;
  readonly website: string;
  readonly explorer: string;
  readonly links?: Link;
}

export interface Link {
  readonly github?: string;
  readonly twitter?: string;
  readonly discord?: string;
  readonly reddit?: string;
  readonly telegram?: string;
  readonly whitepaper?: string;
  readonly coinmarketcap?: string;
  readonly coingecko?: string;
  readonly coingeckoId?: string;
}
