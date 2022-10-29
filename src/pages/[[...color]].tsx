import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Head from 'next/head'

import ColorModule from '@components/ColorModule'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Color shader | Fentos</title>
        <meta
          name='description'
          content='Get dark, light and opacities shades from a color. It also generates css custom properties from them.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ColorModule />
    </Layout>
  )
}

export default Home
