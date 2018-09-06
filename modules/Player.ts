import { IGame, IPlayer, ICoordinates, IKeyboarder } from 'interfaces.d';
import Keyboarder from './Keyboarder';
import Bullet from './Bullet';
class Player implements IPlayer {

  game: IGame;
  center: ICoordinates;
  size: {
    width: number;
    height: number;
  };
  keyboarder: IKeyboarder;

  constructor(game: IGame, gameSize: ICoordinates) {
    this.game = game;
    this.size = {
      width: 15,
      height: 15,
    };
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.width };
    this.keyboarder = new Keyboarder();
    this.game.addBody(this);
  }

  shoot(bulletCenter) {
    this.game.addBody(new Bullet(bulletCenter));
  }

  update() {
    const { center: { x, y }, size: { height }, keyboarder: { isDown, keys } } = this;
    isDown(keys.left) && (this.center.x -= 2);
    isDown(keys.right) && (this.center.x += 2);
    isDown(keys.space) && this.shoot({ x, y: y - height });
  }
}

export default Player;
