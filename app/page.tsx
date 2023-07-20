import Image from 'next/image'
import Carousel from './components/ui/carousel'
import dummy from '@img/dummy.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Carousel showCount={2} aspectRatio={16 / 9}>
        {Array(8)
          .fill(0)
          .map((_, i) => {
            return (
              <Image
                key={i}
                className="object-cover h-full"
                alt="img"
                src={dummy}
              />
            )
          })}
      </Carousel>
    </main>
  )
}
