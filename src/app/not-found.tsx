import Link from 'next/link'
import { NotFoundSVG } from './assets/Illustrations'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto my-6">
        <NotFoundSVG/>
        <p className="max-w-xs mt-4">The requested Page could not be found. Please check the URL or go back to the homepage.</p>
        <Link href="/">
          <button className='button-1'>Home</button>
        </Link>
    </div>
  )
}
export default NotFound