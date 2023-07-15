import Link from 'next/link'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto max-w-fit my-28">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Not Found</h1>
        <p className="mb-4">The requested Page could not be found. Please check the URL or go back to the homepage.</p>
        <Link href="/">
          <button className='px-3 py-2 font-semibold transition-all rounded-md bg-button hover:bg-primary'>Home</button>
        </Link>
      </div>
    </div>
  )
}
export default NotFound