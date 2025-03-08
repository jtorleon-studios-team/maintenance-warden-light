/** 
 * @module
 * @mergeModuleWith tasks/create-mcpack
 */

import { CreateMcPackConfig } from "./create-mcpack.config";
  
/**
 * 
 */
export class CreateMcPackTask {
  private readonly _options: CreateMcPackConfig;

  public constructor(options: CreateMcPackConfig) {
    this._options = options;
  }

  public run(): void {
    console.log(this._options);
  }
}
