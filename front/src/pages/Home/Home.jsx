import React from 'react'
import { Helmet } from 'react-helmet'
import Image from './Image/Image'
import Card from './Card/Card'

const Home = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Image/>
            <Card/>
    </div>
  )
}

export default Home