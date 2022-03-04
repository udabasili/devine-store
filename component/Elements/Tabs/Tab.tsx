import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { TabItem, TabLink } from './tab.style'

type TabProps = {
    label: string
    link: string
    icon: React.ReactElement
}

const Tab = (props: TabProps) => {
    const router = useRouter()
    const { label, link, icon} = props

    return (
        <TabItem className={
            router.pathname === link ?
            'active':
            ''
        }>
            <Link href={link} passHref>
                <TabLink className={
                    router.pathname === link ?
                    'active':
                    ''
                }>
                    {icon}
                    {label}
                </TabLink>
            </Link>
          
        </TabItem>
    )
}

export default Tab