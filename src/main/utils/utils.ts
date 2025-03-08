/**
 * ## Common Utils
 * 
 * ### Feature :
 * 
 * - coming soon
 *   
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute! 
 * 
 * @packageDocumentation
 */


import readline from 'node:readline';
import os from 'node:os';
import path from 'node:path';
import logger from "pino";

/**
 * Determines if the current platform is Windows.
 */
export const IS_WIN = os.type() === "Windows_NT";

/**
 * Resolves a file path in a cross-platform way.
 * On Windows, backslashes (`\`) are replaced with slashes (`/`) to ensure consistency.
 * @param {string} a - Base path.
 * @param {string} b - Path to join with the base path.
 * @returns {string} Normalized path using `/` as a separator.
 */
export function pathResolve(a: string, b: string): string {
  const resolvedPath = path.resolve(a, b);
  return path.posix.resolve("/", resolvedPath).substring(1);
}

/**
 * Prompts a CLI question and waits for user confirmation.
 * Returns `false` if the user types "no", otherwise returns `true`.
 * @param {string} ask - The question to ask the user.
 * @returns {Promise<boolean>} `true` if the user confirms, `false` otherwise.
 */
export async function confirm(ask: string): Promise<boolean> {
  const input = readline.createInterface(
    process.stdin,
    process.stdout
  );

  console.log(`> ${ask} `);
  console.log(`> Confirm ? press ["any key" = true]["no" = false] `)
  return new Promise((resolve) => {
    input.question("", (response) => {
      input.close();
      resolve(response !== "no")
    });
  });
}

/**
 * Creates a simple logger with a custom name.
 * 
 * @param name - The name to assign to the logger.
 * @returns A logger instance with the given name.
 */
export function createSimpleLogger(name: string) {
  return logger({ name });
}
