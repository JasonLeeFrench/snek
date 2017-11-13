const isColliding = (a, b) => a.x === b.x && a.y === b.y

const getFreeCoord = (obj, tileCount) => {
  const grid = [...Array(tileCount ** 2).keys()].map(i =>
    [ Math.floor(i / tileCount), i % tileCount ]
  )
  const fullTiles = obj.map(coords => Object.values(coords))
  const freeTiles = grid.filter(tile =>
    !fullTiles.some(coords => arraysAreSame(coords, tile))
  )
  return freeTiles[Math.floor(Math.random() * freeTiles.length)]
}

const checkBounderies = (directions, edge) => directions.map(direction =>
  direction = direction < 0 ? edge : direction > edge ? 0 : direction
)

const arraysAreSame = (a, b) => a.every((item, index) => item === b[index])
const merge = arr => [].concat(...arr)

export { isColliding, getFreeCoord, checkBounderies } 