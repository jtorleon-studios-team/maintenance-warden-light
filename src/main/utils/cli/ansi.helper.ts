/** 
 * @module
 * @mergeModuleWith utils/cli
 */

/**
 * ## Ansi Utils
 * 
 * ### Feature :
 * 
 * - 
 *  
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute!  
 */
export class AnsiHelper {
  public static readonly COLORS = {
    RED: new AnsiHelper(31),
    GREEN: new AnsiHelper(32),
    DEBUG: new AnsiHelper(34),
    YELLOW: new AnsiHelper(33),
    BLACK: new AnsiHelper(30),
    BLUE: new AnsiHelper(34),
    MAGENTA: new AnsiHelper(35),
    CYAN: new AnsiHelper(36),
    WHITE: new AnsiHelper(37),
    LIGHT_BLACK: new AnsiHelper(90),
    LIGHT_RED: new AnsiHelper(91),
    LIGHT_GREEN: new AnsiHelper(92),
    LIGHT_YELLOW: new AnsiHelper(93),
    LIGHT_BLUE: new AnsiHelper(94),
    LIGHT_MAGENTA: new AnsiHelper(95),
    LIGHT_CYAN: new AnsiHelper(96),
    LIGHT_WHITE: new AnsiHelper(97),
    RESET: new AnsiHelper(0)
  };

  private readonly _str: string;

  constructor(code: number) {
    this._str = `\u001B[${code}m`;
  }

  public toString() {
    return this._str;
  }

  public apply(text: string): string {
    return this._str + text + "\u001B[0m";
  }

  public println(text: string): void {
    console.log(this.apply(text));
  }

  public get code(): string {
    return this._str
  }

}
