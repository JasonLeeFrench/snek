import { CANVAS_COLOR, TEXT_STYLE, TEXT_POSITION, TILE_COUNT, FPS } from './config'
import { isColliding } from './utils'

class Game {
  constructor (opts) {
    Object.assign(this, opts)
  }
  tick () {
    const timeout = 1000 / FPS
    const update = this.update()
    const draw = this.draw()
    const text = this.drawScore(this.elements[0])
    return setTimeout(() => requestAnimationFrame(() => this.tick()), timeout)
  }
  update () {
    const [ player, treat ] = this.elements
    const colliding = isColliding(player, treat)
    if(colliding) {
      player.score += 10
    }
    return this.elements.map(element => element.update(colliding, player))
  }
  draw () {
    const { width, height } = this.ctx.canvas
    this.ctx.fillStyle = CANVAS_COLOR
    this.ctx.fillRect(0, 0, width, height)
    return this.elements.map(element => element.draw(this.ctx))
  }
  drawScore (player) {
    this.ctx.font = TEXT_STYLE.font
    this.ctx.fillStyle = TEXT_STYLE.color
    return this.ctx.fillText(player.score, ...TEXT_POSITION)
  }
}

export default Game