

import { request } from "undici";
import { CliHelper } from "../utils/cli.helper";

export type Config = {
  /**
   * [Webhook](https://en.wikipedia.org/wiki/Webhook) URL of 
   * the Discord server.
   * 
   * This is the endpoint where the payload will be sent.
   */
  webhookUrl: string,
};

/** 
 * test
 * @param options 
 */
export class CreateMcPackTask {
  private readonly _options: Config;

  public constructor(options: Config) {
    this._options = options;
  }

  public run(): void {
    console.log(this._options);
  }
}
