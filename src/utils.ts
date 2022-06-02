import { ChainList } from './config';

export const generateTokenListPaths = (
  dir: string,
  chains: string[] = ChainList
) => {
  return chains.map((chain) => `${dir}/${chain}/tokenlist.json`);
};
