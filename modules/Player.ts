import { IGame, IPlayer, ICoordinates } from 'interfaces.d';
class Player implements IPlayer {

  game: IGame;
  center: ICoordinates;
  size: {
    width: number;
    height: number;
  };

  constructor(game: IGame, gameSize: ICoordinates) {
    this.game = game;
    this.size = {
      width: 15,
      height: 15,
    };
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.width };
  }
}

export default Player;
