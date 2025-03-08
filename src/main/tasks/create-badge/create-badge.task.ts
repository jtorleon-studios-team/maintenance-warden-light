/**
 * @module
 * @mergeModuleWith tasks/create-badge
 */

/**
 * ## Task: Create Badge
 * 
 * ![example: Modrinth Game Versions](https://img.shields.io/modrinth/game-versions/dGVX5JbJ)  
 */
export class CreateBadgeTask {
  /** 
   * template markdown
   * ```markdown
   * ![CurseForge Game Versions](https://img.shields.io/curseforge/game-versions/:projectId)
   * ```
   * 
   * template html
   * ```html
   * <img alt="CurseForge Game Versions" src="https://img.shields.io/curseforge/game-versions/:projectId">
   * ```
   * 
   * - https://shields.io/badges/curse-forge-game-versions
   * 
   * @param {string} projectId - The CurseForge project ID.
   * 
   * @returns {string} The URL for the badge showing the game versions.
   */
  public static getCurseforgeBadgeVersions(projectId: string): string {
    return `https://img.shields.io/curseforge/game-versions/${projectId}`
  }

  /** 
   * template markdown
   * ```markdown
   * ![CurseForge Downloads](https://img.shields.io/curseforge/dt/:projectId) 
   * ```
   * 
   * template html
   * ```html
   * <img alt="CurseForge Downloads" src="https://img.shields.io/curseforge/dt/:projectId">
   * ```
   * 
   * - https://shields.io/badges/curse-forge-downloads
   * 
   * @param {string} projectId - The CurseForge project ID.
   * 
   * @returns {string} The URL for the badge showing the total downloads.
   */
  public static getCurseforgeBadgeDownload(projectId: string): string {
    return `https://img.shields.io/curseforge/dt/${projectId}`
  }

  /** 
   * template markdown
   * ```markdown
   * ![Modrinth Game Versions](https://img.shields.io/modrinth/game-versions/:projectId)
   * ```
   * 
   * template html
   * ```html
   * <img alt="Modrinth Game Versions" src="https://img.shields.io/modrinth/game-versions/:projectId">
   * ```
   * 
   * @see https://shields.io/badges/modrinth-game-versions
   * 
   * @param {string} projectId - The Modrinth project ID.
   * 
   * @returns {string} The URL for the badge showing the game versions.
   */
  public static getModrinthBadgeVersions(projectId: string): string {
    return `https://img.shields.io/modrinth/game-versions/${projectId}`
  }

  /** 
   * template markdown
   * ```markdown
   * ![Modrinth Downloads](https://img.shields.io/modrinth/dt/:projectId) 
   * ```
   * template html
   * ```html
   * <img alt="Modrinth Downloads" src="https://img.shields.io/modrinth/dt/:projectId"> 
   * ```
   * 
   * @see https://shields.io/badges/modrinth-downloads
   * 
   * @param {string} projectId - The Modrinth project ID.
   * 
   * @returns {string} The URL for the badge showing the total downloads.
   */
  public static getModrinthBadgeDownload(projectId: string): string {
    return `https://img.shields.io/modrinth/dt/${projectId}`
  }

  /** 
   * template markdown
   * ```markdown
   * ![Discord](https://img.shields.io/discord/:serverId)
   * ```
   * template html
   * ```html
   * <img alt="Discord" src="https://img.shields.io/discord/:serverId">
   * ```
   * @param serverId 
   * @returns 
   */
  public static getDiscordBadge(serverId: string): string {
    return `https://img.shields.io/discord/${serverId}`
  }

}
