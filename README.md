# IPK PhoneBook

Production-ready Expo (React Native) CRM starter using Expo Router, TypeScript, and Zustand. The project follows a feature-first structure with thin routes, leveraging device contacts via `expo-contacts` and a themed UI aligned with the IPK CRM palette.

## Prerequisites

- Node.js >= 18
- npm >= 9
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode for native builds (optional)
- Expo Go (for physical device testing)

## Getting Started

```bash
npm install
npm run start
```

Press `a` for Android, `i` for iOS, or scan the QR with Expo Go.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run start` | Start the Expo dev server |
| `npm run android` | Build & run Android native binary |
| `npm run ios` | Build & run iOS native binary |
| `npm run typecheck` | TypeScript strict type check |
| `npm run lint` | ESLint with Prettier rules |
| `npm run test` | Jest + React Testing Library suite |

## Folder Structure

```
Ipk-PhoneBook/
├── app/                  # Expo Router routes (thin wrappers only)
├── features/             # Feature-first modules (auth, contacts, settings)
├── core/                 # Shared API, storage, theme, utils, hooks
├── components/           # Shared UI primitives & feedback components
├── config/               # Environment access & permissions docs
├── tests/                # Jest setup and mocks
├── scripts/              # Tooling scripts (e.g., reset-project)
├── app.config.ts         # Expo config with env exposure & permissions
└── package.json
```

## Permissions

Documented in `config/permissions.android.json` and `config/permissions.ios.json` and surfaced through `app.config.ts`.

- **Android**: `READ_CONTACTS`, `WRITE_CONTACTS`, `VIBRATE`, `INTERNET`
- **iOS**: `NSContactsUsageDescription`

## Environment Variables

Expose API URLs or other runtime values via `EXPO_PUBLIC_*` keys:

```bash
EXPO_PUBLIC_API_URL=https://api.example.com npm run start
```

Access them using `env.API_URL` from `config/env.ts`.

## Testing & Quality Gates

```bash
npm run test        # jest-expo + @testing-library/react-native
npm run lint        # ESLint (Prettier compatible)
npm run typecheck   # Strict TypeScript validation
```

At least one component test ships with `features/contacts/__tests__/ContactsScreen.test.tsx`.

## Adding a New Feature

1. Create `features/<feature>/` with `screens/`, `hooks/`, `store/`, `services/`, `types.ts`, `__tests__/`.
2. Add a thin route in `app/` that simply returns the feature screen.
3. Document any new permissions in `config/permissions.*.json` and update `app.config.ts` if needed.
4. Expose shared UI through `components/` only when truly cross-feature.
5. Add tests and ensure `npm run lint`, `npm run typecheck`, and `npm run test` succeed.

## Build

When ready for native builds:

```bash
npm run android
npm run ios
```

Use EAS (`eas build`) for production pipelines if required.