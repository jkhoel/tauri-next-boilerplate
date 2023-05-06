# Tauri + NextJS

This is a [Tauri App](https://tauri.app) with [NextJS](https://nextjs.org/). Built on versions v1.3 for Tauri and 13 for NextJS.

Note that this project deviates from the current [Tauri guide](https://tauri.app/v1/guides/getting-started/setup/next-js) in a few places:

1. As of Next 13 we can now use the `app` folder as recommended by the Next team.
2. Adding `next export` to `package.json` is no longer required, and the [recommended way is to add `output: export` to `next.config.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) instead.

## TODO

1. Add [stitches.dev](https://stitches.dev/) for styling with CSS-in-JS
2. Splash-screen
3. Some [cooler Icons?](https://tauri.app/v1/guides/features/icons) 

## Development

To run the program in development, use the following command:
```bash
$ cargo tauri dev
```

or

```bash
$ npm run tauri dev
```

### NextJS

This project uses the `app` folder and router introduced in Next 13. To start editing the Next pages, start by modifying `app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Tauri

It's a convention for Tauri apps to place all core-related files into the `src-tauri` folder. Inside you will also see the `src` sub-folder, and this is where all the Rust code lives, with `src/main.rs` being the entry point to your Rust program and the place where we bootstrap into Tauri.

## Learn More

To learn more about Rust, take a look at:

- [Invoking Commands from the Tauri+Next docs](https://tauri.app/v1/guides/getting-started/setup/next-js#invoke-commands)
- [Tauri JS/TS API documentation](https://tauri.app/v1/api/js/)
- [The Rust Book](https://doc.rust-lang.org/book/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
