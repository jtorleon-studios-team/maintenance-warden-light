/** 
 * @module
 * @mergeModuleWith tasks/create-mcpack
 */

import { FileNamePackMinecraftMeta, PackMinecraftMeta } from "../../types/minecraft.types";
import { FileHelper } from "../../utils/sys";
import { CreateMcPackConfig } from "./create-mcpack.config";
import { CliHelper } from "../../utils/cli/cli.helper";
import AdmZip from "adm-zip";
import { Logger } from "pino";
import * as fs from "fs";

/**
 * 
 */
export class CreateMcPackTask {
  public static readonly FILE_NAME_PACK_MC_META: FileNamePackMinecraftMeta = "pack.mcmeta";
  private readonly _options: CreateMcPackConfig;
  private readonly _logger: Logger;
  private _dist!: string;
  private _distZip!: string;
  private _nameZip!: string;

  public constructor(options: CreateMcPackConfig) {
    this._options = options;
    this._logger = CliHelper.createSimpleLogger(`create-pack-${this._options.packName}`);
  }

  public run(): void {
    this._dist = FileHelper.pathResolve(this._options.outputDirectory, this._options.packName);
    this._nameZip = `${this._options.packName}-${this._options.version}.${this._options.extension}`;
    this._distZip = FileHelper.pathResolve(this._dist, this._nameZip);

    try {
      this._logger.info("Starting Minecraft Pack creation process");
      this._logger.debug(`Pack Configuration: ${JSON.stringify(this._options)}`);
      if (this.validate()) {
        this._logger.info("Validation passed. Proceeding with pack creation.");
        this.pack();
        this._logger.info("Minecraft Pack created successfully.");
      } else {
        this._logger.warn("Validation failed. The configuration is invalid.");
        this._logger.warn("Please check the configuration and try again.");
      }
    } catch (error: any) {
      this._logger.error("An unexpected error occurred during Minecraft Pack creation:");
      this._logger.error(error["stack"] || error["message"] || error);
    }
  }

  public validate(): boolean {
    switch (this._options.type) {
      case "minecraft_pack":
        return this.hasValidPackMcMeta();
      case "curseforge_pack":
        return this.hasValidCurseforgePack();
      case "modrinth_pack":
        return this.hasValidModrinthPack();
      case "warden_pack":
        return this.hasValidWardenPack();
      default:
        this._logger.error(
          `Error extension not supported ${this._options.extension}`)
        return false;
    }
  }

  private pack(): void {
    const zipFile = new AdmZip();
    zipFile.addLocalFolder(this._options.inputDirectory);
    zipFile.writeZip(this._distZip);
    this._logger.info(`created Minecraft Pack at ${this._distZip}`);
  }

  private hasValidPackMcMeta(): boolean {
    const inputFileMcMeta = FileHelper.pathResolve(
      this._options.inputDirectory,
      CreateMcPackTask.FILE_NAME_PACK_MC_META
    );

    if (!fs.existsSync(inputFileMcMeta)) {
      this._logger.debug(
        `missing ${CreateMcPackTask.FILE_NAME_PACK_MC_META} : ${inputFileMcMeta}`);
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} file is required in the input directory.`)
      return false;
    }

    let result = "";
    try {
      result = fs.readFileSync(inputFileMcMeta, "utf-8");
    } catch (e) {
      this._logger.debug(e);
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} is invalid. (File Reading)`);
      return false;
    }

    let unsafeParsed: PackMinecraftMeta;
    try {
      unsafeParsed = JSON.parse(result);
    } catch (e) {
      this._logger.debug(e);
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} is invalid. (JSON Error)`);
      return false;
    }

    if (!unsafeParsed.pack) {
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} is invalid.`);
      return false;
    }

    let valid = true;
    if (!(typeof unsafeParsed.pack.description === "string")) {
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} is invalid. (description, string required)`);
      valid = false;
    }

    if (!(typeof unsafeParsed.pack.pack_format === "number")) {
      this._logger.error(
        `The ${CreateMcPackTask.FILE_NAME_PACK_MC_META} is invalid. (pack_format, number required)`);
      valid = false;
    }
    return valid;
  }

  private hasValidModrinthPack(): boolean {
    return true;
  }

  private hasValidCurseforgePack(): boolean {
    return true;
  }

  private hasValidWardenPack(): boolean {
    return true;
  }
}
