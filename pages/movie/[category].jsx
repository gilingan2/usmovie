import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import TitlePage from '../../components/title-page'
import { moviesEndpoint } from '../../service'
const HeroCarousel = dynamic(() => import('../../components/hero-carousel'), {
  ssr: true,
})
const ItemCard = dynamic(() => import('../../components/item-card'), {
  ssr: true,
})
function category(props) {
  const { movies, category, totalPages, currentPage } = props
  const [itemJsx, setItemJsx] = useState('')
  const showItemCard = () => {
    const iJsx = []
    movies.map((item, i) => {
      iJsx.push(<ItemCard key={i} item={item} isTv={false} />)
    })
    setItemJsx(iJsx)
  }
  if (!itemJsx && movies.length) {
    showItemCard()
  }
  const pagginationHandler = (page) => {
    const currentPath = props.router.aspath
    const currentQuery = { ...props.router.query }
    currentQuery.page = page.selected + 1

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }
  return (
    <>
      <HeroCarousel popular={movies} isTv={false} />
      <TitlePage category={category} />
      <div className='section'>
        <div className='item-grid'>{itemJsx}</div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={'active'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          initialPage={currentPage - 1}
          pageCount={totalPages} //page count
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={pagginationHandler}
        />
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const category = query.category.replace('-', '_')
  const data = await moviesEndpoint.getMovies(category, {
    params: { page: page },
  })
  return {
    props: {
      movies: data.results,
      category: query.category,
      totalPages: data.total_pages,
      currentPage: data.page,
    },
  }
}

export default withRouter(category)
