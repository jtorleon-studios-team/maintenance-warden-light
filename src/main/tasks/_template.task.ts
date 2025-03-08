/**
 * ## Notify Discord Server 
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

/**
 * Task Description
 */
export class TemplateTask {
  private readonly _options: Config;

  public constructor(options: Config) {
    this._options = options;
  }

  public run(): void {
    console.log(this._options);
  }
}

export type Config = {
  /**
   * Webhook URL of the discord server
   */
  webhook: string
}
