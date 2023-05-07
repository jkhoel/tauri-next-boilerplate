"use client";
import { invoke } from "@tauri-apps/api";
import { GreetArgs, GreetResult } from "./types";

/**
 * This enum maps to all available functions we can call on the Rust backend
 */
enum GreeterCommand {
  Greet = "greet"
}

/**
 * Example wrapper function that wraps the default invoke() function, providing proper typing
 */
async function greeter(params: GreetArgs): Promise<GreetResult> {
  return await invoke(GreeterCommand.Greet, { ...params }).then((res) => res as GreetResult).catch(err => {
    console.error(err);
    return { message: "error" };
  });
}

export default greeter;