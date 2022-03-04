import { Header3 } from 'global.style';
import React from 'react'
import style from './summary.module.css';
import Link from 'next/link'

type SummaryProps = {
  text: string;
  image: string;
}

const SummaryCard = ({ text, image }: SummaryProps) => {
  return (
    <div className={style.summaryCard} style={{
      backgroundImage: `url(${image})`
    }}>
      <div className={style.summaryCardContent}>
        <Header3>
          {text}
        </Header3>
        <Link href="/products">
          <a className={style.summaryLink}>Shop</a>
        </Link>
      </div>
    </div>
  )
}

export default SummaryCard 