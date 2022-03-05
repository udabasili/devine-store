import MainLayout from '@/components/Layout/MainLayout'
import SlideShow from '@/components/Slide/SlideShow'
import { getPlaiceholder } from 'plaiceholder';
import style from '../styles/index.module.css'
import { jewelryData } from '@/data/slideData'
import { InferGetStaticPropsType } from 'next';
import SummaryCard from '@/features/categories/components/SummaryCard';
import CategorySummary from '@/features/categories/components/CategorySummary';
import { Header1, Header2, Header3, Paragraph } from 'global.style';
import Image from 'next/image';
import Button from '@/components/Elements/Button/Button';
import ProductSummary from '@/features/products/components/ProductSummary';
import { useRouter } from 'next/router';

const summary = [
  {
    text: 'new arrival',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    text: 'best seller',
    image: 'https://images.unsplash.com/photo-1589828994425-cee7c6e8dbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80'
  }, 
  {
    text: 'clearance',
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  }

]

const Home : React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ images }) => {
  const route = useRouter()

  const navigation = (url: string) => {
    route.push({
        pathname: url,
    })
  }

  return (
    <MainLayout title='Home' description={''}>
      <header className={style.header}>
        <SlideShow images={images} jewelryData={jewelryData}/>
      </header>
      <section 
        id='summary' 
        className={`
        ${style.section}
        ${style.sectionSummary}

        `}
      >
        {
          summary.map((item, index) => (
            <SummaryCard key={index} text={item.text} image={item.image}/>
          ))
        }
      </section>
      <section 
        id='category' 
        className={`
          ${style.section}
          ${style.sectionCategory}
        `}
      >
        <div 
            className="u-margin-bottom-medium u-center-text"
          >
          <Header2>Categories</Header2>
        </div>
        <CategorySummary/>
      </section>
      <section id='story'  className={style.storyPictures}>
        <div className={style.storyImage1}>
          <Image
            objectFit="cover"
            src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80'
            layout="fill"/>
        </div>
        <div className={style.storyImage2}>
        <Image
          objectFit="cover"
          src='https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          layout="fill"/>
        </div>
      </section>
      <section id='story'  className={style.storyContent}>
        <Header3>
          Happy Customers
        </Header3>
        <Header2>Quality Clothing and Accessories</Header2>
        <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta! 
        </Paragraph>
        <Button variant="primary" size="lg" onClickHandler={() => navigation('/products')} type="button">
          See More
        </Button>

      </section>
      <section id='products'  
        className={`
        ${style.section}
        ${style.sectionProducts}
      `}
      >
        <div 
            className="u-margin-bottom-medium u-center-text"
          >
          <Header2>Sample Products</Header2>
        </div>
        <ProductSummary/>
      </section>
      <section id='reviews'  className={style.section}>

      </section>
      <section id='subscribe'  className={style.section}>

      </section>

    </MainLayout>
  )
}

export const getStaticProps = async () => {  
    
  const imagePaths = jewelryData.map(data => data.image)
  const images = await Promise.all(
    imagePaths.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src);
      return {
        ...img,
        alt: "Paint Splashes",
        title: "Photo from Unsplash",
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      images,
    },
  };
};


export default Home
