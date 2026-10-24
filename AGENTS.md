<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment

- `vite.config.ts` keeps the built-in Cloudflare nitro target for Lovable publish builds (sandbox, detected via `LOVABLE_SANDBOX`/`DEV_SERVER__PROJECT_PATH`) and uses `@netlify/vite-plugin-tanstack-start` with `nitro: false` everywhere else; `netlify.toml` publishes `dist/client` via `npm run build`. Why: the site must deploy to both Lovable and Netlify without duplicate nitro/deploy plugins.
