import Button from '@/components/Elements/Button/Button'
import { Header3, Paragraph } from 'global.style'
import Image from 'next/image'
import React from 'react'
import { Blog, BlogDetail, BlogImage, BlogSummary } from './blog-article.style'
import { GoCommentDiscussion } from "react-icons/go";
import { FaCommentSlash } from 'react-icons/fa'
import { useRouter } from 'next/router'
const MAX_LENGTH_TEXT = 50

type BlogArticleProps = {
    postUrl: string,
    title: string,
    timestamp: string,
    imageUrl: string,
    content: string,
    articleType: string
    commentsLength: number
    path: string
}
const BlogArticle = (props: BlogArticleProps) => {
    const {
        postUrl,
        title,
        timestamp,
        imageUrl,
        articleType,
        content,
        path,
        commentsLength
    } = props

    const router = useRouter()

    const navigation = () => {
        router.push(`/blog/${path}`)
    }

    console.log(props)
    return (
        <Blog >
            <BlogImage>
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </BlogImage>
            <div className="u-margin-top-medium">
                <Header3>
                    {title}
                </Header3>
            </div>
            <BlogDetail>
                <GoCommentDiscussion/>
                <span>
                {commentsLength} Comments
                </span>
            </BlogDetail>
            <BlogSummary>
                <Paragraph>
                    {content.substring(0, MAX_LENGTH_TEXT)}
                </Paragraph>
            </BlogSummary>
            <Button onClickHandler={navigation} variant="primary" size="lg" type='button'>
                See More
            </Button>
        </Blog>
    )
}

export default BlogArticle