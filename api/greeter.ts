"use client";
import {invoke} from "@tauri-apps/api";

enum GreeterCommand {
  Greet = "greet"
}

type GreetArgs = {
  name: string,
}

export type GreetResult = string;

/**
 * Example wrapper function that wraps the default invoke() function, providing proper typing
 * */
async function greeter(params: GreetArgs): Promise<GreetResult> {
  return await invoke(GreeterCommand.Greet, params).then((res) => res as GreetResult).catch(err => {
    console.error(err);
    return "";
  });
}

export default greeter;