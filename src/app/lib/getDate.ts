import { formatDistanceToNow } from 'date-fns'
export function getDate(date: string) {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}