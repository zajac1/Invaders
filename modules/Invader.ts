// TODO: do we need game here?
import { IInvader, IGame, ICoordinates, size } from './interfaces';
class Invader implements IInvader {
  game: IGame;
  center: ICoordinates;
  size: size;
  patrolX: number;
  speedX: number;

  constructor(game, center) {
    this.game = game;
    this.center = center;
    this.size = {
      width: 15,
      height: 15,
    };
    this.patrolX = 0;
    this.speedX = 0.3;
  }

  update() {
    if (this.patrolX < 0 || this.patrolX > 40) {
      this.speedX = -this.speedX;
    }

    this.center.x += this.speedX;
    this.patrolX += this.speedX;
  }

}
export default Invader;
