import React from 'react'
import Head from 'next/head'

type CustomHeadProps = {
    title: string
    description: string
}

const CustomHead = ({
    title = '',
    description = ''
}: CustomHeadProps)  => {
  return (
    <>
     <Head>
        <title>{title} | Devine Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
    </>
  )
}

export default CustomHead