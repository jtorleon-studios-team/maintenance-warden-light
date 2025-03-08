/** 
 * @module
 * @mergeModuleWith utils/sys
 */

import os from 'node:os';
import path from 'node:path';

/**
 * Determines if the current platform is Windows. 
 */
export const IS_WIN = os.type() === "Windows_NT";


