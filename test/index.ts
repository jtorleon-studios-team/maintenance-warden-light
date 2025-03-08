import logger from "pino";

; (async () => {
  const o = logger({ name: "dev" });
  o.info("starting index");
  o.info("end index");
})();
