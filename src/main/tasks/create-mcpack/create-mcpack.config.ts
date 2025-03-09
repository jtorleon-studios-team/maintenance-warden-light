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
  extension: string;
  type: "minecraft_pack" | "modrinth_pack" | "curseforge_pack" | "warden_pack";
}
