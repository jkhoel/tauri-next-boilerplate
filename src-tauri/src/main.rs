// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};
use typeshare::typeshare;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[typeshare]
#[derive(Serialize, Deserialize)]
struct GreetArgs<'a> {
    name: &'a str,
}

#[typeshare]
#[derive(Serialize)]
struct GreetResult {
    message: String,
}

#[tauri::command]
fn greet(args: GreetArgs) -> GreetResult {
    GreetResult {
        message: format!("Hello, {name}!", name = args.name),
    }
}
