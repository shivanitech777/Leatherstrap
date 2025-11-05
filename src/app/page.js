import React from 'react'
import Hero from './component/Hero'
import AboutPage from './component/aboutus'
import ProductPage from './component/product'
import CollectionsPage from './component/collections'
import OurProduct from './component/our-product'


const page = () => {
  return (
  <>
  <Hero/>
 
  <ProductPage/>
<CollectionsPage/>

<OurProduct/> 
 
  
 

  </>
  )
}

export default page