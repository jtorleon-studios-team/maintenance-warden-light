import { CliHelper } from "@jtorleon-studios-team/maintenance-warden-light/utils/cli/cli.helper";
import { CreateMcPackTask } from "@jtorleon-studios-team/maintenance-warden-light/tasks/create-mcpack/create-mcpack.task"
import * as path from "path";

const logger = CliHelper.createSimpleLogger("mdk-example");
logger.info("starting index");

new CreateMcPackTask({
  description: "",
  extension: "zip",
  inputDirectory: path.resolve(__dirname, "src"),
  outputDirectory: "dist",
  packName: "test",
  version: "1.0.0",
  type: "minecraft_pack"
}).run();
