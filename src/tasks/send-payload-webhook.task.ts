/**
 * ## Send Pay load Webhook
 * 
 * ### Feature :
 * 
 * Send any [payload](https://en.wikipedia.org/wiki/Payload_(computing)) to any webhook with [undici](https://www.npmjs.com/package/undici) 
 * module  
 * 
 * ### Intro :
 * 
 * Example [Discord Webhook](https://discord.com/developers/docs/resources/webhook):
 * ```ts
 * import * as SendPayloadWebhook from "maintenance-warden-light/tasks/send-payload-webhook.task"
 * 
 * SendPayloadWebhook.Run({
 *     payload: {
 *       content: "Hello, Discord!",
 *     },
 *     webhookUrl: "https:// ... url ... "
 *   })
 * ``` 
 * 
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute! 
 * 
 * @packageDocumentation
 */

import { request } from "undici";
import { createSimpleLogger } from "../utils/utils";

/**
 * ## Run Task
 * 
 * This function executes a task that sends a 
 * [payload](https://en.wikipedia.org/wiki/Payload_(computing)) 
 * to a webhook.
 * 
 * It takes an options object containing the webhook URL 
 * and [payload](https://en.wikipedia.org/wiki/Payload_(computing)) 
 * data, then  logs the result of the operation.
 * 
 * @param options - Configuration object containing the webhook 
 *        @see {Config}
 * 
 * @returns Promise<void> - The function is asynchronous and returns 
 *          a promise that resolves when the task is complete.
 * 
 * @throws Error - If the request to the Discord webhook fails or 
 *         the [payload](https://en.wikipedia.org/wiki/Payload_(computing)) 
 *         is invalid.
 */
export async function Run(options: Config) {
  const logger = createSimpleLogger("send-payload");
  try {
    const webhookUrl = options.webhookUrl;
    options.webhookUrl = "**********";

    const response = await request(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options.payload)
    });

    if (response.statusCode === 204) {
      logger.info("Success sending payload", {
        statusCode: response.statusCode,
        body: response.body
      });
    } else {
      logger.error(`Failed sending payload: ${response.statusCode}`);
      logger.error(`Body: ${JSON.stringify(response.headers)}`);
      logger.error(`Header: ${JSON.stringify(response.body)}`);
    }
  } catch (error) {
    logger.error("Error sending payload:", {
      error, options
    });
  }
}

export type Config = {
  /**
   * [Webhook](https://en.wikipedia.org/wiki/Webhook) URL.
   * This is the endpoint where the 
   * [payload](https://en.wikipedia.org/wiki/Payload_(computing)) 
   * will be sent.
   */
  webhookUrl: string,

  /**
   * [payload](https://en.wikipedia.org/wiki/Payload_(computing)) to be sent 
   * to the [webhook](https://en.wikipedia.org/wiki/Webhook).
   * 
   * Example [Discord Webhook](https://discord.com/developers/docs/resources/webhook): 
   * This should follow Discord"s webhook message format.
   * 
   * ```json
   * {
   *   "content": "Hello, Discord!",
   *   "embeds": [
   *     {
   *       "title": "Test Embed",
   *       "description": "Test Description",
   *       "color": 16711680
   *     }
   *   ]
   * }
   * ```
   * 
   */
  payload: any
};
