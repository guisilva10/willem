# willem — Portfolio Guilherme Willem

Portfolio pessoal single-page. Deploy Vercel.

## Stack
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript 5
- Tailwind v4 + shadcn/ui (componentes em `src/app/_components/ui`, maioria nao usada)
- Lenis (scroll suave) via `src/app/_components/scroll-smooth.tsx`
- pnpm

## Estrutura
```
src/app/page.tsx        # pagina unica: intro, work, thoughts (projetos), connect, footer
src/app/layout.tsx      # fonte Geist + SmoothScroll
src/app/globals.css     # tokens Tailwind v4
public/eu.png           # foto perfil
```

## Comandos
- `pnpm dev` — dev server (porta 3000)
- `pnpm build` — build producao
- `pnpm lint` — eslint (flat config nativo do eslint-config-next 16)
- `pnpm exec tsc --noEmit` — typecheck

## Decisoes
- Conteudo (jornada, projetos, redes) hardcoded em `page.tsx` — sem CMS, sem banco
- `images.unoptimized: true` — `<img>` estatico, sem next/image
- `pnpm-workspace.yaml` aprova build scripts de `sharp` e `unrs-resolver`
- `AGENTS.md` / `CLAUDE.md` na raiz sao gerados pelo `next dev` (Next 16) — commitar pra manter tree limpa

## Env
Nenhuma variavel necessaria.
