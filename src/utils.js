const isColliding = (a, b) => a.x === b.x && a.y === b.y

const generateTreatPositions = tiles => Array.from({ length: 2 })
  .map(() => Math.floor(Math.random() * tiles))

const checkBounderies = (directions, edge) => directions.map(direction =>
  direction = direction < 0 ? edge : direction > edge ? 0 : direction
)

export { isColliding, generateTreatPositions, checkBounderies } 