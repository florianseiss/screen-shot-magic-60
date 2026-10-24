// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Lovable publish builds run in the sandbox and keep the built-in Cloudflare
// nitro target. Everywhere else (e.g. a Netlify CI build) the Cloudflare deploy
// plugin is disabled and the Netlify plugin configures the build instead.
// Same detection the wrapper itself uses (see isSandboxEnvironment).
const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" || !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig(
  isLovableSandbox
    ? {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          // nitro/vite builds from this
          server: { entry: "server" },
        },
      }
    : {
        // Disable the wrapper's Cloudflare-targeted nitro plugin on non-Lovable builds.
        nitro: false,
        // Netlify: the plugin wraps the SSR entry in a Netlify function
        // (.netlify/v1/functions/server.mjs) and enables `vite dev` emulation.
        plugins: [netlify()],
        tanstackStart: {
          server: { entry: "server" },
        },
      },
);
