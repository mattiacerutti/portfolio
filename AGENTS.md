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
- If you add, remove, or rename a project page, keep `src/data/projects.ts`, the route file under `src/app/(pages)/projects/(items)/`, and `src/app/sitemap.ts` aligned.
- The app is fully static at build time: `next.config.ts` sets `output: "export"` and `images.unoptimized = true`. Avoid server-only/runtime-only Next features unless you also change the deployment model.

## Architecture

- `src/app/layout.tsx` owns the global shell: fonts, theme provider, comet background, header, footer, and `globals.css`.
- `src/app/(pages)/layout.tsx` adds the shared centered content wrapper for non-home pages.
- Project detail pages are file-based static routes under `src/app/(pages)/projects/(items)/<slug>/page.tsx`.
- Project and work content is stored in `src/data/projects.ts` and `src/data/work.ts`; UI sections/components mostly consume those data modules directly.
