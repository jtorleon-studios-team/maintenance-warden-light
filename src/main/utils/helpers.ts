/**
 * ## title
 * 
 * ### Feature :
 * 
 * - 
 * 
 * ### Intro :
 *  
 * ```ts
 * import * as Task from "..."
 * ```
 *  
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute! 
 * 
 * @packageDocumentation
 */

import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline';
import logger from "pino";

export class CliHelper {

  /**
   * Prompts a CLI question and waits for user confirmation.
   * Returns `false` if the user types "no", otherwise returns `true`.
   * @param {string} ask - The question to ask the user.
   * @returns {Promise<boolean>} `true` if the user confirms, `false` otherwise.
   * @category General Use
   */
  static async confirm(ask: string): Promise<boolean> {
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
   * @category General Use
   */
  static createSimpleLogger(name: string) {
    return logger({ name });
  }

}

export class FileHelper {

  /**
   * Determines if the current platform is Windows. 
   */
  public static readonly IS_WIN = os.type() === "Windows_NT";

  /**
   * Resolves a file path in a cross-platform way.
   * On Windows, backslashes (`\`) are replaced with slashes (`/`) to ensure consistency.
   * @param {string} a - Base path.
   * @param {string} b - Path to join with the base path.
   * @returns {string} Normalized path using `/` as a separator. 
   */
  public static pathResolve(a: string, b: string): string {
    const resolvedPath = path.resolve(a, b);
    return path.posix.resolve("/", resolvedPath).substring(1);
  }

}

/**
 * ## Ansi Utils
 * 
 * ### Feature :
 * 
 * - 
 *  
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute!  
 */
export class AnsiHelper {
  public static readonly COLORS = {
    RED: new AnsiHelper(31),
    GREEN: new AnsiHelper(32),
    DEBUG: new AnsiHelper(34),
    YELLOW: new AnsiHelper(33),
    BLACK: new AnsiHelper(30),
    BLUE: new AnsiHelper(34),
    MAGENTA: new AnsiHelper(35),
    CYAN: new AnsiHelper(36),
    WHITE: new AnsiHelper(37),
    LIGHT_BLACK: new AnsiHelper(90),
    LIGHT_RED: new AnsiHelper(91),
    LIGHT_GREEN: new AnsiHelper(92),
    LIGHT_YELLOW: new AnsiHelper(93),
    LIGHT_BLUE: new AnsiHelper(94),
    LIGHT_MAGENTA: new AnsiHelper(95),
    LIGHT_CYAN: new AnsiHelper(96),
    LIGHT_WHITE: new AnsiHelper(97),
    RESET: new AnsiHelper(0)
  };

  private readonly _str: string;

  constructor(code: number) {
    this._str = `\u001B[${code}m`;
  }

  public toString() {
    return this._str;
  }

  public apply(text: string): string {
    return this._str + text + "\u001B[0m";
  }

  public println(text: string): void {
    console.log(this.apply(text));
  }

  public get code(): string {
    return this._str
  }

}
