import { Heading } from '@/components/justd/ui'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Heading>Not Found</Heading>
      <Heading level={3}>Could not find requested resource</Heading>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
