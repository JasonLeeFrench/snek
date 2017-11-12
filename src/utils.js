const isColliding = (a, b) => a.x === b.x && a.y === b.y

const getFreeCoord = (trail, tileCount) => ['x', 'y'].map((coord) => {
  const freeTiles = [...Array(tileCount).keys()]
    .filter(tile => !trail.some(square => square[coord] === tile))
    return freeTiles[Math.floor(Math.random() * freeTiles.length)]
})

const checkBounderies = (directions, edge) => directions.map(direction =>
  direction = direction < 0 ? edge : direction > edge ? 0 : direction
)

export { isColliding, getFreeCoord, checkBounderies } 