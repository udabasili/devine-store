import React from 'react'
import groovyWalkAnimation from "@/data/loading.json";
import { LottieCustom } from './fillscreenloader.style';

const FullScreenLoader = () => {

  return ( 
    <LottieCustom 
        animationData={groovyWalkAnimation} 
    />
  )

};

export default FullScreenLoader;
