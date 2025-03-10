/**
 * Used for checking if the touch point is within a perimeter that
 * is defined by the param perimeterSize.
 *
 * Uses Pythagoras' Theorem to calculate the distance from the origin
 */
 const isTouchOutOfBounds = (clientX, clientY, origin, perimeterSize) => {
  const xDelta = clientX - origin.x
  const yDelta = clientY - origin.y
  const xSquared = Math.pow(xDelta, 2)
  const ySquared = Math.pow(yDelta, 2)
  const distanceFromTheOrigin = Math.sqrt(xSquared + ySquared)

  return perimeterSize <= distanceFromTheOrigin
}

export default isTouchOutOfBounds
