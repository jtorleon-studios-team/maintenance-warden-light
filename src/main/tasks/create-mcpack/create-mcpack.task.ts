/** 
 * @module
 * @mergeModuleWith tasks/create-mcpack
 */

import { FileHelper } from "../../utils/sys";
import { CreateMcPackConfig } from "./create-mcpack.config";
import AdmZip from "adm-zip";

/**
 * 
 */
export class CreateMcPackTask {
  private readonly _options: CreateMcPackConfig;
  private readonly _dist: string;
  private readonly _distZip: string;
  private readonly _nameZip: string;

  public constructor(options: CreateMcPackConfig) {
    this._options = options;
    this._dist = FileHelper.pathResolve(this._options.outputDirectory, this._options.packName);
    this._nameZip = `${this._options.packName}.${this._options.extension}`;
    this._distZip = FileHelper.pathResolve(this._dist, this._nameZip);
  }

  public run(): void {
    console.log(this._options);
  }

  private pack(): void {
    const zipFile = new AdmZip();
    zipFile.addLocalFolder(this._options.inputDirectory);

    const zipOutputPath = FileHelper.pathResolve(this._dist, `${this._options.packName}.mcpack`);
    zipFile.writeZip(zipOutputPath);
  }

}
