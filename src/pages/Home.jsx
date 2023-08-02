import React from 'react'
import Movies from '../components/Fetchdata'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Movies />
      <Row rowID='1' title='Upcoming' fetchURL={requests.Upcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.Popular} />
      <Row rowID='3' title='Top Rated' fetchURL={requests.TopRated} />
      <Row rowID='4' title='Trending' fetchURL={requests.Trending} />
    </div>
  )
}

export default Home