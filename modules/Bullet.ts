import { ICoordinates, IBullet } from './interfaces';
class Bullet implements IBullet {
  center: ICoordinates;
  size: {
    width: number;
    height: number;
  };
  velocity: {
    x: number;
    y: number
  };

  constructor(center, velocity = { x: 0, y: -6 }) {
    this.size = { width: 3, height: 3 };
    this.center = center;
    this.velocity = velocity;
  }

  update() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  }
}

export default Bullet;
