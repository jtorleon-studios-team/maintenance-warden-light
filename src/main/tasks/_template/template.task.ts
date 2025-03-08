/**
 * @module
 * @mergeModuleWith tasks/_template
 */

import { TemplateConfig } from "./template.config";

/**
 * ## Name Task 
 * 
 * ### Feature :
 * 
 * - feature 1
 * - feature 2
 * - feature 3
 * 
 * ### Intro :
 *   
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute!  
 */
export class TemplateTask {
  private readonly _options: TemplateConfig;

  public constructor(options: TemplateConfig) {
    this._options = options;
  }

  public run(): void {
    console.log(this._options);
  }
}
