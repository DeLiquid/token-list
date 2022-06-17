export interface Chain {
  readonly name: string;
  readonly logoURI: string;
  readonly coin: Token;
  readonly tokens: Token[];
}

export interface Token {
  readonly name: string;
  readonly chain: string;
  readonly symbol: string;
  readonly type: string;
  readonly decimals: number;
  readonly website: string;
  readonly explorer: string;
  readonly logoURI: string;
  readonly address?: string;
  readonly links?: Link;
}

export interface FungibleToken {
  readonly address: string;
  readonly chainId: string | number;
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
  readonly logoURI?: string;
  readonly tags?: string[];
  readonly extensions?: { [key: string]: any };
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
