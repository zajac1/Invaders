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

  update() {
    const { isDown, keys } = this.keyboarder;
    if (isDown(keys.left)) {
      this.center.x -= 2;
    } else if (isDown(keys.right)) {
      this.center.x += 2;
    }

    if (isDown(keys.space)) {
      const bullet = new Bullet(
        { x: this.center.x, y: this.center.y - this.size.height },
        { x: 0, y: -6 },
      );
      this.game.addBody(bullet);
    }
  }
}

export default Player;
