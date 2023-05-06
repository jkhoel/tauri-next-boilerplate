# Tauri + NextJS

This is a [Tauri App](https://tauri.app) with [NextJS](https://nextjs.org/). Built on versions v1.3 for Tauri and 13 for NextJS.

Note that this project deviates from the current [Tauri guide](https://tauri.app/v1/guides/getting-started/setup/next-js) in a few places:

1. As of Next 13 we can now use the `app` folder as recommended by the Next team.
2. Adding `next export` to `package.json` is no longer required, and the [recommended way is to add `output: export` to `next.config.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) instead.

## Getting Started

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Rust, take a look at:

- [Invoking Commands from the Tauri+Next docs](https://tauri.app/v1/guides/getting-started/setup/next-js#invoke-commands)
- [Tauri JS/TS API documentation](https://tauri.app/v1/api/js/)
- [The Rust Book](https://doc.rust-lang.org/book/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
