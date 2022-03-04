import React from 'react'
import { PageHeaderBackground, PageHeaderContainer, PageHeaderContent, PageHeaderLink, PageHeaderList } from './page-header.style'
import { Header1 } from 'global.style'
import { useRouter } from 'next/router'
import Link from 'next/link'

type PageHeaderProps = {
    title: string
    link?: string
}

const PageHeader = ({
    title,
    link
    }: PageHeaderProps) => {

        let path: string;
        const router = useRouter()
        path = router.asPath

        if (path.includes('?')) {
            path = router.route
        }
        const pathArray = path.split('/').filter(e => e)
        
        return (
            <PageHeaderContainer>
                <PageHeaderBackground>
                    <div className="rectangle"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path 
                            fill="#6D72C3" 
                            fill-opacity="1" 
                            d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,160C672,117,768,75,864,53.3C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>

                </PageHeaderBackground>
                <PageHeaderContent>
                <Header1>
                    {title} 
                </Header1>
                <PageHeaderList>
                    <Link href='/'>
                        <PageHeaderLink>
                            home
                        </PageHeaderLink>
                    </Link>
                    {
                        pathArray.map((link, i) => (
                            <Link key={i} href={`/${pathArray.filter((e, index) => index <= i).join('/')}`}>
                                <PageHeaderLink >
                                    {link}
                                </PageHeaderLink>
                            </Link>
                    ))
                    }
                </PageHeaderList>

                </PageHeaderContent>
                
                

            </PageHeaderContainer>
        )
}

export default PageHeader