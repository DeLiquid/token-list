import fetch from 'cross-fetch';

import { FetchStrategy } from './config';
import { Chain, Token } from './types';
import { generateTokenListPaths } from './utils';

const queryTokenList = async (files: string[]): Promise<Token[]> => {
  const chainList: Chain[] = await Promise.all(
    files.map(async (file) => {
      const response = await fetch(file);
      const json = (await response.json()) as Chain;
      return json;
    })
  );

  const tokens = chainList
    .map((chain: Chain) => [chain.coin].concat(chain.tokens || []))
    .reduce((acc, arr) => (acc as Token[]).concat(arr), []);

  return tokens;
};

/**
 * @class TokenList: a provider that fetches token list from a remote source
 */
export class TokenList {
  readonly fetchStrategy: FetchStrategy;
  constructor(fetchStrategy: FetchStrategy = FetchStrategy.Github) {
    this.fetchStrategy = fetchStrategy;
  }

  /**
   * @function getAllTokens: get tokens from all supported chains
   * @returns Token[]: an array of tokens
   */
  getAllTokens = async (): Promise<Token[]> => {
    const files = generateTokenListPaths(this.fetchStrategy);
    const tokens = await queryTokenList(files);
    return tokens;
  };

  /**
   * @function getTokensByChains: get tokens by chains.
   * @param chains : a list of chains to fetch tokens from. (See supported chains in config.ts)
   * @returns Token[]: an array of tokens on the given chains.
   */
  getTokensByChains = async (chains: string[]): Promise<Token[]> => {
    const files = generateTokenListPaths(this.fetchStrategy, chains);
    const tokens = await queryTokenList(files);
    return tokens;
  };
}
