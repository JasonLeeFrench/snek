import { CANVAS_COLOR, FPS } from './config'
import { isColliding } from './utils'

class Game {
  constructor (opts) {
    Object.assign(this, opts)
  }
  tick () {
    const timeout = 1000 / FPS
    const update = this.update()
    const draw = this.draw()
    return setTimeout(() => requestAnimationFrame(() => this.tick()), timeout)
  }
  update () {
    const [ player, treat ] = this.elements
    const colliding = isColliding(player, treat)
    return this.elements.map(element => element.update(colliding))
  }
  draw () {
    const { width, height } = this.ctx.canvas
    this.ctx.fillStyle = CANVAS_COLOR
    this.ctx.fillRect(0, 0, width, height)
    return this.elements.map(element => element.draw(this.ctx))
  }
}

export default Game