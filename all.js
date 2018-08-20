define("Player", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Player {
        constructor(game, gameSize) {
            this.game = game;
            this.size = {
                width: 15,
                height: 15,
            };
            this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.width };
        }
    }
    exports.default = Player;
});
define("game", ["require", "exports", "Player"], function (require, exports, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Game {
        constructor() {
            this.canvas = document.getElementById('screen');
            this.screen = this.canvas.getContext('2d');
            this.gameSize = {
                x: this.canvas.width,
                y: this.canvas.height,
            };
            this.bodies = [new Player_1.default(this, this.gameSize)];
        }
        update() {
            // console.log('hi');
        }
        drawRect(screen, body) {
            screen.fillRect(body.center.x - body.size.width / 2, body.center.y - body.size.height / 2, body.size.width, body.size.height);
        }
        draw(screen) {
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
});
//# sourceMappingURL=all.js.map