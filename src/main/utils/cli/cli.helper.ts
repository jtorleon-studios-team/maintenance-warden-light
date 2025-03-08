/** 
 * @module
 * @mergeModuleWith utils/cli
 */

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

