export enum FetchStrategy {
  Github = 'https://raw.githubusercontent.com/DeLiquid/token-list/main/chains',
  CDN = 'https://cdn.jsdelivr.net/gh/DeLiquid/token-list@main/chains/',
}

// subfolder name in chains folder
export const ChainList: string[] = [
  'binance-smart-chain',
  'cosmos',
  'ethereum',
  'polygon',
  'solana',
];
