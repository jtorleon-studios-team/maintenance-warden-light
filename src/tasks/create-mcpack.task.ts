

import { request } from "undici";
import { createSimpleLogger } from "../utils/utils";

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
 * 
 * @param options 
 */
export async function Run(options: Config) {
 
}
