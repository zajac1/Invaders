import Player from './Player';
import { IGame, IScreen, ICoordinates } from './interfaces.d';

class Game implements IGame {

  canvas: HTMLCanvasElement;
  screen: IScreen;
  gameSize: ICoordinates;
  bodies: Player[];

  constructor() {
    this.canvas = document.getElementById('screen') as HTMLCanvasElement;
    this.screen = this.canvas.getContext('2d');
    this.gameSize = {
      x: this.canvas.width,
      y: this.canvas.height,
    };
    this.bodies = [new Player(this, this.gameSize)];
  }

  update() {
    // console.log('hi');
  }

  drawRect(screen: IScreen, body) {

    screen.fillRect(
      body.center.x - body.size.width / 2,
      body.center.y - body.size.height / 2,
      body.size.width,
      body.size.height,
    );
  }

  draw(screen: IScreen) {
    this.bodies.map(body => this.drawRect(screen, body));
  }

  tick() {
    this.update();
    this.draw(this.screen);
    requestAnimationFrame(this.tick.bind(this));
  }

  start() {
    this.tick();
  }
}

window.onload = () => {
  new Game().start();
};
