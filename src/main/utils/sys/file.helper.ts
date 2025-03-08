/** 
 * @module
 * @mergeModuleWith utils/sys
 */

import path from 'node:path';

export class FileHelper {
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
