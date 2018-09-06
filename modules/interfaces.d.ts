export type IScreen = CanvasRenderingContext2D;
export type keys = {
    left: 37,
    right: 39,
    space: 32,
}
export type size = {
  width: number;
  height: number;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IGame {
  canvas: HTMLCanvasElement;
  screen: IScreen;
  gameSize: ICoordinates;
  bodies: (IPlayer | IBullet)[];
  player: IPlayer;
  addBody: (body) => void;
  createInvaders: (game) => void;
  colliding: (body1, body2) => boolean;
  invadersBelow: (invader: IInvader) => boolean;
}

export interface IPlayer {
  game: IGame;
  center: ICoordinates;
  size: size;
  shoot: (center: ICoordinates, velocity?: {x: number, y: number}) => void
}

export interface IBullet {
  center: ICoordinates;
  size: size;
  velocity: {
    x: number;
    y: number;
  }
}

export interface IKeyboarder {
  keyState: {};
  keys: keys;
  isDown: (keyCode: number) => boolean;
}

export interface IInvader {
  game: IGame;
  center: ICoordinates;
  size: size;
  patrolX: number;
  speedX: number;
  shoot: (center: ICoordinates, velocity?: {x: number, y: number}) => void
}
