import Image from 'next/image'
import Carousel from './components/ui/carousel'
import banner1 from '@img/banner/banner-sample1.png'
import banner2 from '@img/banner/banner-sample2.png'
import banner3 from '@img/banner/banner-sample3.png'

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
                src={sampleBanner[i % 3]}
              />
            )
          })}
      </Carousel>
    </main>
  )
}

const sampleBanner = [banner1, banner2, banner3]
