import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import slugify from 'slugify'

export default function HeroContent(props) {
  const { item, isTv } = props
  const background = `https://image.tmdb.org/t/p/original/${
    item.backdrop_path ? item.backdrop_path : item.poster_path
  }`
  const image = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
  return (
    <div className={`hero-slide-item ${props.className}`}>
      <Image
        src={`${background}`}
        alt={item.title || item.name}
        layout='fill'
        className='-z-10'
        objectFit='cover'
        objectPosition='center'
        priority={true}
        sizes={100}
      />
      <div className='hero-slide-item-content container '>
        <div className='hero-slide-item-content-poster  '>
          <Image
            src={`${image}`}
            alt={item.title || item.name}
            width={197}
            height={295}
            className='image-poster'
            priority={true}
            objectFit='cover'
          />
        </div>
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
        <div className='hero-slide-item-content-info'>
          <h2 className='title'>{item.title || item.name}</h2>
          <p className='overview'>{item.overview}</p>
          <div className='btns'>
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
              <a>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-[18px] md:w-[24px]'>
                  <path
                    d='M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z'
                    fill='currentColor'></path>
                </svg>
                <span>Play</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroContent.propTypes = {
  isTv: PropTypes.bool.isRequired,
}
