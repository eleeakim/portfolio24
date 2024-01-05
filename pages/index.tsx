import type { NextPage } from 'next'
import { biodata } from '../basicData'

const Home: NextPage = () => {
  return (
    <div className='home'>
      <div className='title'>{biodata.name}</div>
      <div className='tagline'>{biodata.tagline}</div>
    </div>
  )
}

export default Home
