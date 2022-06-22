import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import slugify from 'slugify'

export default function ItemCard({ item, isTv }) {
  const [isShown, setShown] = useState(false)
  const image = `https://image.tmdb.org/t/p/w500/${
    item.poster_path || item.backdrop_path
  }`

  return (
    <div className='item-card'>
      <div
        className='card'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
        <Image
          src={`${image}`}
          alt={item.title || item.name}
          layout='responsive'
          loading='lazy'
          width={197}
          height={295}
          sizes={15}
          className='card-img'
          objectFit='cover'
        />

        <Link
          key={item.id}
          href={isTv ? `/tv/[...id]` : `/movie/[...id]`}
          as={
            isTv
              ? `/tv/${item.id}/${slugify(`${item.title || item.name}`, {
                  lower: true,
                  remove: /[^\w ]/g,
                })}`
              : `/movie/${item.id}/${slugify(`${item.title || item.name}`, {
                  lower: true,
                  remove: /[^\w ]/g,
                })}`
          }>
          <a title={item.title || item.name} className='streched-link'></a>
        </Link>
        {isShown && (
          <div className='card-body'>
            <h2 className='name'>{item.title || item.name}</h2>
            <p className='des'>
              {item.overview ? item.overview.slice(0, 50) + '...' : ''}
            </p>
            <Link
              key={item.id}
              href={isTv ? `/tv/[...id]` : `/movie/[...id]`}
              as={
                isTv
                  ? `/tv/${item.id}/${slugify(`${item.title || item.name}`, {
                      lower: true,
                    })}`
                  : `/movie/${item.id}/${slugify(`${item.title || item.name}`, {
                      lower: true,
                    })}`
              }>
              <a title={item.title || item.name} className='streched-link'></a>
            </Link>
            <button className='watchlist-btn'>add to watchlist</button>
          </div>
        )}
      </div>
    </div>
  )
}
