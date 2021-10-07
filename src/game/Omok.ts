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
      this.map[i] = "none";
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
      return "none";
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
    x = 0;
    y = 0;
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
        let start = [x, y],
          vecX = ways[i][0] * l,
          vecY = ways[i][1] * l;
        while (this.getColor(start[0] + vecX, start[1] + vecX) === color) {
          winStack[i]++;
          start[0] += vecX;
          start[1] += vecY;
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