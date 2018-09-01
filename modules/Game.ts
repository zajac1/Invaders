import Player from './Player';
import Invader from './Invader';
import { IGame, IScreen, ICoordinates, IPlayer, IInvader } from './interfaces.d';

class Game implements IGame {

  canvas: HTMLCanvasElement;
  screen: IScreen;
  gameSize: ICoordinates;
  bodies: Player[];
  player: IPlayer;

  constructor() {
    this.canvas = document.getElementById('screen') as HTMLCanvasElement;
    this.screen = this.canvas.getContext('2d');
    this.gameSize = {
      x: this.canvas.width,
      y: this.canvas.height,
    };
    this.bodies = [];
    this.player = new Player(this, this.gameSize);
  }

  update() {
    this.bodies = this.bodies.filter(this.notCollidingWithAnything);
    this.bodies.map(body => body.update());
  }

  addBody = body => this.bodies.push(body);

  drawRect(screen: IScreen, body) {

    screen.fillRect(
      body.center.x - body.size.width / 2,
      body.center.y - body.size.height / 2,
      body.size.width,
      body.size.height,
    );
  }

  draw(screen: IScreen) {
    screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.bodies.map(body => this.drawRect(screen, body));
  }

  tick() {
    this.update();
    this.draw(this.screen);
    requestAnimationFrame(this.tick.bind(this));
  }

  createInvaders(game) {
    const invadersNumber = 24;
    const invaders = [...Array(invadersNumber)].map((invader, index) => {
      const x = 30 + (index % 8) * 30;
      const y = 30 + (index % 3) * 30;
      this.addBody(new Invader(game, { x, y }));
    });
  }

  colliding(body1: IPlayer | IInvader, body2: IPlayer | IInvader) {
    return !(body1 === body2 ||
      body1.center.x + body1.size.width / 2 < body2.center.x - body2.size.width / 2 ||
      body1.center.y + body1.size.height / 2 < body2.center.y - body2.size.height / 2 ||
      body1.center.x - body1.size.width / 2 > body2.center.x + body2.size.width / 2 ||
      body1.center.y - body1.size.height / 2 > body2.center.y + body2.size.height / 2
    );
  }

  notCollidingWithAnything = body1 =>
    this.bodies.filter(body2 => this.colliding(body1, body2)).length === 0

  start() {
    this.createInvaders(this);
    this.tick();
  }
}

window.onload = () => {
  new Game().start();
};
