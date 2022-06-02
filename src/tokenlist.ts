import fetch from 'cross-fetch';

import { FetchStrategy } from './config';
import { Chain, Token } from './types';
import { generateTokenListPaths } from './utils';

const queryTokenList = async (files: string[]) => {
  const responses: Chain[] = await Promise.all(
    files.map(async (file) => {
      const response = await fetch(file);
      const json = (await response.json()) as Chain;
      return json;
    })
  );

  return responses
    .map((tokenlist: Chain) => tokenlist.tokens || [])
    .reduce((acc, arr) => (acc as Token[]).concat(arr), []);
};

export class TokenList {
  readonly fetchStrategy: FetchStrategy;
  constructor(fetchStrategy: FetchStrategy = FetchStrategy.Github) {
    this.fetchStrategy = fetchStrategy;
  }

  getAllTokens = async (): Promise<Token[]> => {
    const files = generateTokenListPaths(this.fetchStrategy);
    const tokens = await queryTokenList(files);
    return tokens;
  };

  getTokensByChains = async (chains: string[]): Promise<Token[]> => {
    const files = generateTokenListPaths(this.fetchStrategy, chains);
    const tokens = await queryTokenList(files);
    return tokens;
  };
}
