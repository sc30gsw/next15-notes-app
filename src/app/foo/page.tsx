import { Card } from '@/components/justd/ui'
import { unstable_cacheLife } from 'next/cache'
import Image from 'next/image'
import { type ReactNode, Suspense } from 'react'

const getName = async () => {
  'use cache'
  // sleep for 3seconds
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // create random name

  const randomName =
    Math.random().toString(36).substring(2, 7) +
    Math.random().toString(36).substring(2, 7)

  return randomName
}

const getCount = async () => {
  'use cache'
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const count = Math.floor(Math.random() * 100)
  unstable_cacheLife('seconds')

  return count
}

const FooPage = () => {
  const name = getName()
  const count = getCount()

  return (
    <div>
      <HomeCard>
        <Suspense
          fallback={
            <div className="animate-pulse h-6 w-20 bg-zinc-300 rounded-md" />
          }
        >
          <h1 className="text-2xl font-bold">Hello, {name}</h1>
        </Suspense>
        <span>{count}</span>
      </HomeCard>
      <HomeCard>
        <div className="flex items-center gap-2">
          <Image
            src={'/placeholder.png'}
            alt="placeholder"
            width={30}
            height={30}
            className="rounded-full"
          />
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            incidunt placeat inventore aliquam, quas corporis autem blanditiis
            facere qui illo. Delectus, harum commodi. Totam mollitia libero vero
            hic quia maxime.
          </Card.Description>
        </div>
      </HomeCard>
    </div>
  )
}

const HomeCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Card>
        <Card.Header>
          <Card.Title>Home Page</Card.Title>
        </Card.Header>
        <Card.Content>{children}</Card.Content>
      </Card>
    </div>
  )
}

export default FooPage
