# @deliquid/token-list (beta)

A multi-chain collection of crypto tokens, including metadata, logos, and more.

## Installation

```bash
npm install @deliquid/asset-registry
```

## Basic Usage

### Get all tokens from all supported chains

```typescript
import { TokenList } from "@deliquid/token-list";

const fetchTokens = async () => {
    const tokenList = new TokenList();
    const tokens = await tokenList.getAllTokens();
    return tokens
}
```

### Get tokens from specific chains

```typescript
import { TokenList } from "@deliquid/token-list";

const chains = ["ethereum", "solana"]

const fetchTokens = async () => {
    const tokenList = new TokenList();
    const tokens = await tokenList.getTokensByChains(chains);
    return tokens
}
```

## Contributing

### Add a new token to the registry

Coming Soon
