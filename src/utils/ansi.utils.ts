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
 * 
 * @packageDocumentation
 */

/**
 * Ansi Color Builder
 */
export class AnsiColorBuilder {
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

export const ANSI = {
  RED: new AnsiColorBuilder(31),
  GREEN: new AnsiColorBuilder(32),
  DEBUG: new AnsiColorBuilder(34),
  YELLOW: new AnsiColorBuilder(33),
  BLACK: new AnsiColorBuilder(30),
  BLUE: new AnsiColorBuilder(34),
  MAGENTA: new AnsiColorBuilder(35),
  CYAN: new AnsiColorBuilder(36),
  WHITE: new AnsiColorBuilder(37),
  LIGHT_BLACK: new AnsiColorBuilder(90),
  LIGHT_RED: new AnsiColorBuilder(91),
  LIGHT_GREEN: new AnsiColorBuilder(92),
  LIGHT_YELLOW: new AnsiColorBuilder(93),
  LIGHT_BLUE: new AnsiColorBuilder(94),
  LIGHT_MAGENTA: new AnsiColorBuilder(95),
  LIGHT_CYAN: new AnsiColorBuilder(96),
  LIGHT_WHITE: new AnsiColorBuilder(97),
  RESET: new AnsiColorBuilder(0)
};
