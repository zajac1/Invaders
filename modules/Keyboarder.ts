// TODO: change keyCode to code;
// TODO: consider using addEventListener?
import { keys, IKeyboarder } from './interfaces';
class Keyboarder implements IKeyboarder {
  keyState: {};
  keys: keys;
  constructor() {
    this.keyState = {};
    this.keys = {
      left: 37,
      right: 39,
      space: 32,
    };
    document.onkeydown = ({ keyCode }) => this.keyState[keyCode] = true;
    document.onkeyup = ({ keyCode }) => this.keyState[keyCode] = false;
  }

  isDown = (keyCode) => {
    return this.keyState[keyCode] === true;
  }
}

export default Keyboarder;
