import * as Test from "../main/tasks/create-mcpack";
import * as path from "path";
console.log("--");

new Test.CreateMcPackTask({
  description: "",
  extension: "zip",
  inputDirectory: path.resolve(__dirname, "fake_pack"),
  outputDirectory: "dist",
  packName: "test",
  version: "1.0.0",
  type: "minecraft_pack"
}).run();
