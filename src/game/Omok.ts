/* eslint-disable no-eval */
class Omok {
  map: string[] = [];
  width: number;
  height: number;
  winCount: number;
  winEvents: string[] = [];

  constructor(width: number = 15, height: number = 15, winCount: number = 5) {
    this.map.length = width * height;
    this.width = width;
    this.height = height;
    this.winCount = winCount;
    for (let i = 0; i < this.map.length; i++) {
      this.map[i] = "transparent";
    }
  }

  static loadData(origin: Omok): Omok {
    let result: Omok = new Omok();
    result.map = origin.map;
    result.width = origin.width;
    result.height = origin.height;
    result.winCount = origin.winCount;
    result.winEvents = origin.winEvents;
    return result;
  }

  readonly board: Function = (): string[][] => {
    const result: string[][] = [];
    for (let y = 0; y < this.height; y++) {
      const t: string[] = [];
      for (let x = 0; x < this.width; x++) {
        t.push(this.map[x + y * this.width]);
      }
      result.push(t);
    }
    return result;
  };

  readonly getColor: Function = (x: number, y: number): string => {
    if (x + y * this.width < this.map.length) {
      return this.map[x + y * this.width];
    } else {
      return "transparent";
    }
  };

  readonly place: Function = (
    x: number,
    y: number,
    color: string = "black"
  ): void => {
    if (x != null && y != null && color != null) {
      this.map[x + y * this.width] = color;
      this.winCheck(x, y, color);
    }
  };

  private readonly winCheck: Function = (
    x: number,
    y: number,
    color = "black"
  ): boolean => {
    let winStack = [1, 1, 1, 1];
    let isWin = false;
    let ways = [
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
    ];
    for (let i = 0; i < ways.length; i++) {
      for (let l = -1; l < 2; l += 2) {
        let sx = x, sy = y,
          vecX = ways[i][0] * l,
          vecY = ways[i][1] * l;
        while (this.getColor(sx + vecX, sy + vecY) === color) {
          winStack[i]++;
          sx += vecX;
          sy += vecY;
        }
      }
    }

    winStack.forEach((count) => {
      if (count >= this.winCount) {
        isWin = true;
      }
    });

    if (isWin) {
      this.win();
    }
    return isWin;
  };

  private readonly win: Function = (): void => {
    this.winEvents.forEach((handler) => {
      eval(handler);
    });
  };
}

export default Omok;