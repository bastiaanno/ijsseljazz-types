# ijsseljazz-types

Shared TypeScript type definitions for the IJsselJazz app and CMS projects.

## Installation

```bash
bun install
```

## Usage

Import types in your project:

```typescript
import type { Artist, Location, FestivalData } from "ijsseljazz-types";
```

## Exported Types

All types are re-exported from the main entry point. Currently includes:

- **Firebase/Firestore types**: `Artist`, `Facility`, `Location`, `LocationType`, `MapAsset`, `Notification`, `Token`, `FestivalData`, `AppData`, `HomeNavItem`, `HomeSection`, `BadgeTone`, etc.
- **Root schema**: `FirestoreSchema` - maps the full Firestore database structure

## Package Configuration

This is a type-only package. The `index.ts` re-exports all types from the `types/` directory.
