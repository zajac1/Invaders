export interface ICoordinates {
  x: number;
  y: number;
}

export type IScreen = CanvasRenderingContext2D;

export interface IGame {
  canvas: HTMLCanvasElement;
  screen: IScreen;
  gameSize: ICoordinates;
  bodies: IPlayer[];
}

export interface IPlayer {
  game: IGame;
  center: ICoordinates;
  size: {
    width: number;
    height: number;
  };
}
