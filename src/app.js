import Player from './Player'
import Treat from './Treat'
import Game from './Game'

import { TILE_COUNT, KEYS } from './config'
import { getFreeCoord } from './utils'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const player = new Player({
  ctx, velocity: { x: 0, y: 0 },
  x: 10, y: 10,
  score: 0
})

const [ treatX, treatY ] = getFreeCoord(player.trail, TILE_COUNT)
const treat = new Treat({
  ctx, x: treatX, y: treatY
})

const elements = [ player, treat ]

const game = new Game({ elements, ctx })
game.tick()

window.onkeydown = e => {
  const key = KEYS[e.keyCode]
  if(key) {
    player.velocity = player.updateVelocity(key)
  }
}