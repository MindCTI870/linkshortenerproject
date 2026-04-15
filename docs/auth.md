# Authentication

All authentication is handled exclusively by **Clerk**. No other auth methods, libraries, or custom implementations should ever be used.

## Rules

- **Clerk only** — never implement custom auth, NextAuth, or any other auth solution.
- Every Server Function/Action must verify authentication with Clerk before touching the database.
- Use `@clerk/nextjs` helpers (`auth()`, `currentUser()`, `clerkMiddleware`, etc.) for all auth checks.

## Route Protection

- `/dashboard` is a protected route — users must be signed in to access it.
- Unauthenticated users attempting to access `/dashboard` must be redirected to the home page (`/`). Do **not** open the sign-in modal automatically — the user can choose to sign in from there.
- Authenticated users visiting the homepage (`/`) must be redirected to `/dashboard`.

Enforce this in `middleware.ts` using `clerkMiddleware` with `createRouteMatcher`:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Sign In / Sign Up Modals

Sign in and sign up must always be triggered as a **modal**, never as a full-page redirect.

Use Clerk's `useClerk` hook to open the modal programmatically:

```ts
const { openSignIn, openSignUp } = useClerk();

// Sign in
openSignIn();

// Sign up
openSignUp();
```

Do **not** use `<SignIn />` or `<SignUp />` as standalone page components. Do **not** set `signInUrl` or `signUpUrl` to dedicated routes.
