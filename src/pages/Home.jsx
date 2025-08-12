import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import HowItWorks from '../components/HowItWorks'
import FeaturedProjects from '../components/FeaturedProjects'
import ProductGrid from '../components/ProductGrid'

const Home = ({ searchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Hero />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <HowItWorks />
      <FeaturedProjects />
      <ProductGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </>
  )
}

export default Home
