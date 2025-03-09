/** 
 * @module
 * @mergeModuleWith tasks/create-mcpack
 */

/**
 * doc
 */
export interface CreateMcPackConfig {
  inputDirectory: string;
  outputDirectory: string;
  packName: string;
  description: string;
  version: string;
  extension: "zip" | "mrpack" | "mcpack" | "rar";
}
