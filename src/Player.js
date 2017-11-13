import { KEYS, TILE_COUNT, GRID_SIZE, DRAW_AREA, SNAKE_COLOR } from './config'
import { isColliding, checkBounderies } from './utils'

class Player {
  constructor (opts) {
    Object.assign(this, opts)
    this.trail = []
  }
  keyPush (event) {
    const prevVelocity = this.velocity
    this.velocity = KEYS[event.keyCode] || prevVelocity
  }
  update (hitTreat) {
    this.x += this.velocity.x
    this.y += this.velocity.y
    if(hitTreat) { 
      this.tail++
    }
    [ this.x, this.y ] = checkBounderies([this.x, this.y], TILE_COUNT - 1)
    const touching = this.trail.some(bit => isColliding(bit, this))
    if(touching) { // boo, reset
      this.tail = 5
      this.score = 0
    }
    this.trail.push({ x: this.x, y: this.y })
    while (this.trail.length > this.tail) { this.trail.shift() }
  }
  draw (ctx) {
    ctx.fillStyle = SNAKE_COLOR
    this.trail.forEach(bit => {
      ctx.fillRect(bit.x * GRID_SIZE, bit.y * GRID_SIZE, DRAW_AREA, DRAW_AREA)
    })
  }
}

export default Player