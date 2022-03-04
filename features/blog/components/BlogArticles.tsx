
import React from 'react'
import { Blogs } from './blog-article.style'
import BlogArticle from './BlogArticle'
import { blogArticle } from '@/data/blogdata'
import _ from 'lodash'


const images = [
	'https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
	'https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
	'https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',
	'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

]
const BlogArticles = () => {
  return (
    <Blogs>
        {
            blogArticle.filter((data, index) => index < 10).map((a, index) => {
				const recordFind = _.get( a.record.domain_name, 'chicintuition')
				let record: any;
				let articleType: any;
				if (recordFind){
					record = Object.values(_.get( a.record.domain_name, 'chicintuition'))[0]
					articleType = Object.keys(_.get( a.record.domain_name, 'chicintuition'))[0]

				}
				return (
					(record && record["image_urls"].length !== 0) ?
					<BlogArticle 
						key={a.record.uniq_id}
						postUrl={record["post_url"]} 
						title={record["title"]} 
						articleType={articleType}
						path={a.record.uniq_id}
						commentsLength={record['comments'].length}
						timestamp={record["post_timestamp_unparsed"]} 
						imageUrl={images[(index % 3)]} 
						content={record["post_text_content"]}				
					/> : null
				)
			})
        }
    </Blogs>
  )
}

export default BlogArticles