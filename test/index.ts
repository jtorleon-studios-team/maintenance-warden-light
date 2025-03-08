import logger from "pino";
import * as CreateBadge from "../src/main/tasks/create-badge";

; (async () => {
  const o = logger({ name: "dev" });

 
  const t: CreateBadge.CreateBadgeConfig = {
    
  };
  
  o.info("starting index");
  o.info("end index");
})();
