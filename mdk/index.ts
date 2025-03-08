import * as Utils from "@jtorleon-studios-team/maintenance-warden-light/src/utils/utils";
import * as Badge from "@jtorleon-studios-team/maintenance-warden-light/src/utils/badges.utils";

const logger = Utils.createSimpleLogger("mdk-example");
logger.info("starting index");

const result = Badge.getModrinthBadgeVersions("dGVX5JbJ")
logger.info(`badge: ${result}`);
