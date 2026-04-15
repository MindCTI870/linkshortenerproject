# Agent Instructions

> **CRITICAL — NON-NEGOTIABLE**: You MUST read the relevant `/docs` instructions file(s) **before writing a single line of code**. Generating code without first reading the applicable doc is strictly forbidden. No exceptions.

For detailed guidelines on specific topics, refer to the module documentation in the /docs directory.
The files below **must be read in full** before touching any related code:

- **Authentication**: [docs/auth.md](docs/auth.md)
- **UI Components**: [docs/ui.md](docs/ui.md)


## Non-negotiable rules

- Always `await params` in dynamic route components — it is a `Promise` in Next.js 16.
- Never use `'use client'` unless the component genuinely needs browser APIs or React hooks.
- Every Server Function must verify authentication before touching the database.
- Use `@/` path aliases — never relative `../../` imports.
- Use HugeIcons (`@hugeicons/react`) — not Lucide or any other icon library.
- Do not use `tailwind.config.js` — Tailwind v4 configuration lives in `app/globals.css`.
