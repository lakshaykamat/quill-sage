import { formatDistance } from 'date-fns'
export function getDate(date: string) {
  const comparedDate = new Date(date)
  const now = new Date()
  return formatDistance(
    new Date(comparedDate.getFullYear(), comparedDate.getMonth(), comparedDate.getDate()),
    new Date(now.getFullYear(), now.getMonth(), now.getDate())
    )
}
