# KINSU AI LABS — Website

Single-file marketing website for [kinsu.health](https://kinsu.health).

## Deploy

### GitHub Pages (recommended — free, instant)
1. Push this repo to GitHub
2. Settings → Pages → Source: **Deploy from branch** → `main` → `/` (root)
3. Add custom domain `kinsu.health` in the Pages settings
4. In GoDaddy DNS: add `CNAME www → Vaibhav-nn.github.io` and A records for the apex domain

### Any static host (Netlify, Cloudflare Pages, etc.)
- Root file: `index.html`
- No build step needed

## Contact form
Uses [FormSubmit.co](https://formsubmit.co) — submissions go to `Founders@kinsu.health`.
First submission triggers a one-time email confirmation from FormSubmit.
