# Tauri + NextJS

This is a [Tauri App](https://tauri.app) with [NextJS](https://nextjs.org/). Built on versions v1.3 for Tauri and 13 for
NextJS.

Note that this project deviates from the
current [Tauri guide](https://tauri.app/v1/guides/getting-started/setup/next-js) in a few places:

1. As of Next 13 we can now use the `app` folder as recommended by the Next team.
2. Adding `next export` to `package.json` is no longer required, and
   the [recommended way is to add `output: export` to `next.config.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
   instead.

## TODO

1. Check if we really need to have the `"use client"` flag with new Next 13 way of doing SSR
2. Add [stitches.dev](https://stitches.dev/) for styling with CSS-in-JS
3. Splash-screen
4. Some [cooler Icons?](https://tauri.app/v1/guides/features/icons)

## Development

To run the program in development, use the following command from the project root folder:

```bash
npm run tauri dev
```

### Shared Types and Commands

Tauri lets you enhance your frontend with native capabilities. We call
these [Commands](https://tauri.app/v1/guides/features/command), essentially Rust functions that you can call from your
frontend JavaScript. This enables you to handle heavy processing or calls to the OS in much more performant Rust code.

This boilerplate project has one such command found in `src/main.rs`, and we are calling this command from our NextJS
app inside `app/page.tsx` via the wrapper function inside `api/greeter.ts`. If we call the `invoke()` function from the
Tauri SDK directly inside our pages, then we will not get code-completion on the available Commands and their associated
types. Putting the invoke-call inside a wrapper-function solves this.

It would also be nice to be able to get types for `Enums` and `Structs` we might define inside our Rust code available for our type-script code as well. To
do this, we have [Typeshare](https://crates.io/crates/typeshare) added as a crate to the project, so types can be generated from
the Rust code by running:

```bash
npm run typeshare
```

This will update the `types.ts` file inside the `./api/` folder, and expose the exported types via the `@types` path.

Include the #[typeshare] attribute with any struct or enum you define to generate type definitions:

```rust
// Rust type definitions

#[typeshare]
struct MyStruct {
    my_name: String,
    my_age: u32,
}

#[typeshare]
#[serde(tag = "type", content = "content")]
enum MyEnum {
    MyVariant(bool),
    MyOtherVariant,
    MyNumber(u32),
}
```

```typescript
// Generated Typescript definitions

export interface MyStruct {
  my_name: string;
  my_age: number;
}

export type MyEnum =
  | { type: "MyVariant", content: boolean }
  | { type: "MyOtherVariant", content: undefined }
  | { type: "MyNumber", content: number };
```

### NextJS

This project uses the `app` folder and router introduced in Next 13. To start editing the Next pages, start by
modifying `app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

### Tauri

It's a convention for Tauri apps to place all core-related files into the `src-tauri` folder. Inside you will also see
the `src` sub-folder, and this is where all the Rust code lives, with `src/main.rs` being the entry point to your Rust
program and the place where we bootstrap into Tauri.

## Learn More

To learn more about Rust, take a look at:

- [Invoking Commands from the Tauri+Next docs](https://tauri.app/v1/guides/getting-started/setup/next-js#invoke-commands)
- [Tauri JS/TS API documentation](https://tauri.app/v1/api/js/)
- [The Rust Book](https://doc.rust-lang.org/book/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
