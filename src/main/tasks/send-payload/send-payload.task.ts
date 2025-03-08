/**
 * @module
 * @mergeModuleWith tasks/send-payload
 */

import { SendPayloadConfig } from "./send-payload.config";
import { request } from "undici";
import { Logger } from "pino";
import { CliHelper } from "../../utils/cli/cli.helper";

/** 
 * Send Payload Task
 */
export class SendPayloadTask {
  private readonly _options: SendPayloadConfig;
  private readonly _logger: Logger;

  public constructor(options: SendPayloadConfig) {
    this._logger = CliHelper.createSimpleLogger("send-payload");
    this._options = options;
  }

  public async run(): Promise<void> {
    try {
      const webhookUrl = this._options.webhookUrl;
      this._options.webhookUrl = "**********";

      const response = await request(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this._options.payload)
      });

      if (response.statusCode === 204) {
        this._logger.info("Success sending payload", {
          statusCode: response.statusCode,
          body: response.body
        });
      } else {
        this._logger.error(`Failed sending payload: ${response.statusCode}`);
        this._logger.error(`Body: ${JSON.stringify(response.headers)}`);
        this._logger.error(`Header: ${JSON.stringify(response.body)}`);
      }

    } catch (error) {
      this._logger.error("Error sending payload:", { error, options: this._options });
    }
  }
}
