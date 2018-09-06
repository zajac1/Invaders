// TODO: do we need game here?
import { IInvader, IGame, ICoordinates, size } from './interfaces';
import Bullet from './Bullet';
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

  shoot(bulletCenter, bulletVelocity) {
    this.game.addBody(new Bullet(bulletCenter, bulletVelocity));
  }

  update() {
    const { center: { x, y }, size: { height }, game } = this;
    if (this.patrolX < 0 || this.patrolX > 40) {
      this.speedX = -this.speedX;
    }

    this.center.x += this.speedX;
    this.patrolX += this.speedX;

    if (Math.random() > 0.995 && !game.invadersBelow(this)) {
      this.shoot({ x, y: y + height }, { x: Math.random() - 0.5, y: 2 });
    }
  }

}
export default Invader;
