import { TokenList, ChainList } from '../src';

describe('Test TokenList class', () => {
  test('TokenList can get tokens from all the chains', async () => {
    const tokenList = new TokenList();
    const tokens = await tokenList.getAllTokens();
    const actualChains = [...new Set(tokens.map((token) => token.chain))];
    expect(actualChains).toEqual(ChainList);
  });

  test('TokenList can get all tokens on Solana blockchain', async () => {
    const tokenList = new TokenList();
    const chains = ['solana'];
    const tokens = await tokenList.getTokensByChains(chains);
    const actualChains = [...new Set(tokens.map((token) => token.chain))];
    expect(actualChains).toEqual(chains);
  });

  test('TokenList can get all tokens on both Solana and Ethereum blockchains', async () => {
    const tokenList = new TokenList();
    const chains = ['solana', 'ethereum'];
    const tokens = await tokenList.getTokensByChains(chains);
    const actualChains = [...new Set(tokens.map((token) => token.chain))];
    expect(actualChains).toEqual(chains);
  });
});
