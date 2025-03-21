/**
 * Currently unused, but this function can determine if a user
 * has swiped more than a set distance
 *
 * @param clientX
 * @param clientY
 * @param touchStart
 * @param minDistance
 */
 const userSwipedMoreThan = (clientX, clientY, touchStart, minDistance) => {
  const xDistance = Math.abs(touchStart.x - clientX)
  const yDistance = Math.abs(touchStart.y - clientY)

  return xDistance > minDistance || yDistance > minDistance
}

export default userSwipedMoreThan
