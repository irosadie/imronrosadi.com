export function getYearsOfExperience(): number {
  const start = new Date(2016, 9)
  const now = new Date()
  const years = now.getFullYear() - start.getFullYear()
  const hasPassedAnniversary = now.getMonth() >= start.getMonth()
  return years - (hasPassedAnniversary ? 0 : 1)
}
