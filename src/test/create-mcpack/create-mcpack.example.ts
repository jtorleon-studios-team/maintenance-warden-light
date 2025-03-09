import path from "path";
import { CreateMcPackTask } from "../../main/tasks/create-mcpack";

new CreateMcPackTask({
  description: "",
  extension: "zip",
  inputDirectory: path.resolve(__dirname, "fake_pack"),
  outputDirectory: "dist",
  packName: "test",
  version: "1.0.0",
}).run();
