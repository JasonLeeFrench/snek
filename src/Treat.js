import { GRID_SIZE, DRAW_AREA, TILE_COUNT, TREAT_COLOR } from './config'
import { generateTreatPositions } from './utils'

class Treat {
  constructor (opts) {
    Object.assign(this, opts)
  }
  update (isHit) {
    if(isHit) {
      [ this.x, this.y ] = generateTreatPositions(TILE_COUNT) // new snack!
    }
  }
  draw (ctx) {
    const { x, y } = this
    ctx.fillStyle = TREAT_COLOR
    ctx.fillRect(x * GRID_SIZE, y * GRID_SIZE, DRAW_AREA, DRAW_AREA)
  }
}

export default Treat