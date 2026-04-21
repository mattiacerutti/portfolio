# AGENTS.md

## Language, typing, and naming

- TypeScript is strict; prefer `interface` for object shapes and prefix with `I` (e.g., `IComponentProps`, `IAuthStatus`). Reach for `type` only when you need unions/intersections or literal unions.
- Use `import type` for types; keep strings double-quoted and favor `const` over `let`.
- Components/hooks are PascalCase; files stay kebab-case (`auth-wrapper.tsx`, `text-field.tsx`).
- Destructure props inside the body: `function Component(props: IComponentProps) { const {foo} = props; }`.

## Components and hooks conventions

- Default-export UI components as `export default function Component(props: IProps) { ... }`; define handlers as `const handleX = () => {}` inside the component.
- When you need to render conditional UI, prefer `condition && <Component />` over `condition ? <Component /> : null`.

## Styling

- Prefer semantic typography utilities (`text-xs`, `text-sm`, `text-base`, etc.) over arbitrary pixel font sizes (for example avoid `text-[10px]`, `text-[11px]`, `text-[13px]`).
- Keep components small and focused; compose smaller pieces instead of growing prop lists and nested conditionals. Extract reusable UI into shared components and typed props interfaces.
- Co-locate state with its owner and derive computed values instead of storing them. Keep `useEffect` scarce, with complete dependency arrays and cleanups for subscriptions/timeouts.
- In most cases React 19 auto-memoizes variables and functions, so avoid `useMemo` and `useCallback` unless you have a rare need.
- React 19 auto-forwards refs, so avoid `forwardRef` unless you have a rare interop need.
- Avoid prop drilling; lift shared data to a feature-level context or custom hook. Keep hook names descriptive (`useLoginWithEmail`, `useAuthStatus`).
- Favor readability over micro-optimizations: straightforward control flow, early returns, and clear naming. Extract constants for magic numbers/strings and keep inline styles minimal (lean on classes or computed style helpers).

## Imports and logging

- Always use path aliases (`@/...`, `@assets/...`) over deep relative imports.
- Keep logging minimal and purposeful; remove noisy debug output when not needed.

## Commands

Always use bun for this project:

- Lint: `bun run lint`
- Typecheck: `bun run typecheck` — typecheck the entire monorepo.
- Production build: `bun run build`

NEVER run commands such as `bun run dev` that would result in starting a new process for the project.

## Repo-Specific Conventions

- Keep page metadata centralized through `createPageMetadata` in `src/lib/seo.ts`.
- If you add, remove, or rename a project page, keep **three things aligned**:
  1. `src/features/projects/data/projects.ts`
  2. The route file under `src/app/(pages)/projects/(items)/`
  3. `src/app/sitemap.ts`

## Architecture

- `src/app/layout.tsx` owns the global shell: fonts, theme provider, comet background, header, footer, and `globals.css`.
- `src/app/(pages)/layout.tsx` adds the shared centered content wrapper for non-home pages.
- Project detail pages are file-based static routes under `src/app/(pages)/projects/(items)/<slug>/page.tsx`.
- **App Router** (`src/app/`) contains only route files: `page.tsx`, `layout.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`. Each `page.tsx` re-exports the corresponding feature page and defines `metadata` via `createPageMetadata`. No logic or JSX lives directly in `app/`.
- **Feature folders** (`src/features/<feature>/`) own their own components, data, and pages. Components used by a single feature stay inside that feature. Components used by **multiple** features go under `src/features/shared/`.
- **`src/components/ui/`** is for generic, reusable UI primitives (buttons, typography, glass-pane) that have no feature-specific knowledge.
- **`src/components/animations/`** is for shared animation primitives.
- **Data modules** (`projects.ts`, `work.ts`) live inside their feature's `data/` folder.
