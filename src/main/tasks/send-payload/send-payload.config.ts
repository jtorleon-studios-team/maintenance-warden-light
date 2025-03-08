/** 
 * @module
 * @mergeModuleWith tasks/send-payload
 */

/**
 * SendPayloadConfig
 */
export type SendPayloadConfig = {
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
}
