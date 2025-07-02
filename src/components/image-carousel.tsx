'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type CarouselProps = {
  images: string[]
  imageWidth?: number
  imageHeight?: number
}

export function AutoCarousel({
  images,
  imageWidth = 2000 / 3,
  imageHeight = 1200 / 3,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000, stopOnInteraction: false }),
  ])

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-2"
            style={{ width: imageWidth }}
          >
            <Image
              src={src}
              alt={`slide-${idx}`}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
