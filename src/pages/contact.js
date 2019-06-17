import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/ContactLayout'
import BannerLanding from '../components/BannerContact'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contact</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <BannerLanding />

    </Layout>
)

export default Contact