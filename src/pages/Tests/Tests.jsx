import React from 'react'
import { Header } from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useParams } from 'react-router-dom'

export default function Tests() {
  const urls = useParams();
  console.log(urls)
  

  return (
    <>
        <Header />
        <h1> Тесты:      </h1>
        <Footer />
    </>
  )
}
