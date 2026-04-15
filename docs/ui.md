# UI Components

All UI elements in this app use **shadcn/ui**.

## Rules

- **Never** create custom UI components — always use shadcn/ui components.
- Install missing components via `npx shadcn@latest add <component>` before using them.
- Import components from `@/components/ui/<component>`.
- Do not wrap shadcn/ui components in unnecessary abstractions.
- Customize appearance via `className` props and Tailwind utility classes — not by modifying files in `components/ui/`.
