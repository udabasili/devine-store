import MainLayout from '@/components/Layout/MainLayout'
import PageHeader from '@/components/PageHeader/PageHeader'
import { useRouter } from 'next/router'
import React, {  } from 'react'
import _ from "lodash";
import { blogArticle } from '@/data/blogdata';
import { Header2, Paragraph } from 'global.style';
import { ArticleMainImage, ArticleOtherImages, ArticleText , Article} from './index.style';
import Image from 'next/image'

const BlogDetail = () => {

    const router = useRouter()
    const { id } = router.query 
    const getBlogArticle = blogArticle.find(article => article.record.uniq_id === id)   
    const recordFind = _.get( getBlogArticle.record.domain_name, 'chicintuition')
    let record;
    let articleType;
    if (recordFind){
      record = Object.values(_.get( getBlogArticle.record.domain_name, 'chicintuition'))[0]
    }


    return (
        <MainLayout title='Article' description={''}>
          {
            record ?
            <Article>
              <Header2>
                {record["title"]}
              </Header2>
              <ArticleMainImage>
                <Image
                      src='https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                      alt={record["title"]}
                      layout="fill"
                      objectFit="cover"
                  />
              </ArticleMainImage>
              <ArticleText>
                <Paragraph>
                  {record["post_text_content"]}
                </Paragraph>
                </ArticleText>

                <ArticleOtherImages>
                <Image
                      src='https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                      alt={record["title"]}
                      layout="fill"
                      objectFit="cover"
                  />
                  <Image
                      src='https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                      alt={record["title"]}
                      layout="fill"
                      objectFit="cover"
                  />
                </ArticleOtherImages>
            </Article> :
            null
          }
        </MainLayout>
    )
}
 
export async function getServerSideProps(context) {
     return {
         props: {}
     }
 }
export default BlogDetail
