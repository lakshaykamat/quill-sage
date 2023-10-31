import Link from 'next/link'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto max-w-fit my-28">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Not Found</h1>
        <p className="mb-4">The requested Note could not be found. Please check the URL or go back to the homepage.</p>
        <Link href="/">
          <button className=' button-1'>Home</button>
        </Link>
      </div>
    </div>
  )
}
export default NotFound