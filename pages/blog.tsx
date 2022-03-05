import SearchBox from '@/components/Elements/SearchBox/SearchBox'
import MainLayout from '@/components/Layout/MainLayout'
import PageHeader from '@/components/PageHeader/PageHeader'
import BlogArticles from '@/features/blog/components/BlogArticles'
import { Header3 } from 'global.style'
import Image from 'next/image'
import React from 'react'
import style from '../styles/blog.module.css'

const Blog = () => {
  return (
    <MainLayout title='Fashion Blog' description={''}>
        <PageHeader title="Fashion Blog"/>
        <div className={style.content}>
            <div className={style.sideContent}>
            <div 
                className="u-margin-bottom-small"
                >
                <Header3>Search</Header3>
            </div>
            <SearchBox/>
            </div>
            <div className={style.sideContent}>
                <div 
                    className="u-margin-bottom-small"
                    >
                    <Header3>
                        Categories
                    </Header3>
                </div>
                <ul className={style.categories}>
                    <li className={style.category}>
                        <span>Chic Picks</span>
                        <span>(4)</span>
                    </li>
                    <li className={style.category}>
                        <span>Celeb Chic</span>
                        <span>(4)</span>
                    </li>
                    <li className={style.category}>
                        <span>Chic Find</span>
                        <span>(4)</span>
                    </li>
                    <li className={style.category}>
                        <span>Chic Reads</span>
                        <span>(4)</span>
                    </li>
                </ul>
            </div>
            <div className={style.sideContent}>
                <div 
                    className="u-margin-bottom-small"
                    >
                    <Header3>
                        Recent Post
                    </Header3>
                </div>
                <div className={style.posts}>
                    <div className={style.postImage}>
                        <Image
                            src='https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2018/05/Untitled-2_01.jpg'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                        <div className={style.postDetails}>
                            <span className={style.postTitle}>
                                Blog Article 2
                            </span>
                            <span className={style.postDate}>
                                Crre
                            </span>
                            
                        </div>
                </div>
            </div>
            <div className={style.sideContent}>
            <div 
                    className="u-margin-bottom-small"
                    >
                    <Header3>
                        Archives
                    </Header3>
                </div>
                <ul className={style.categories}>
                    <li className={style.category}>
                        Backend(4)
                    </li>
                    <li className={style.category}>
                        Backend(4)
                    </li>
                    <li className={style.category}>
                        Backend(4)
                    </li>
                    <li className={style.category}>
                        Backend(4)
                    </li>
                </ul>
            </div>
            <div className={style.sideContent}>
                <Header3>
                    Tags
                </Header3>
                <ul className={style.tags}>
                    <li className={style.tag}>
                        Page
                    </li>
                    <li className={style.tag}>
                        Beauty
                    </li>
                    <li className={style.tag}>
                        Jame
                    </li>
                </ul>
            </div>
            <BlogArticles/>
        </div>
        
    </MainLayout>
  )
}

export default Blog