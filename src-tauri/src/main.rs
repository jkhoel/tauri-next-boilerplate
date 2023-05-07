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

/**
 * Note that this type is not really used for the parameters below. But we
 * define it none the less so that we can generate typescript types for it.
 */
#[typeshare]
#[derive(Serialize, Deserialize)]
struct GreetArgs {
    name: String,
}

#[typeshare]
#[derive(Serialize)]
struct GreetResult {
    message: String,
}

#[tauri::command]
fn greet(name: &str) -> GreetResult {
    GreetResult {
        message: format!("Hello, {name}!"),
    }
}
