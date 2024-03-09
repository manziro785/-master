import React from 'react'
import './homePageModule.css'
import  {Header}  from '../../components/header/header.jsx'
import { Banner } from '../../components/common/banner/banner'
import {Cards} from '../../components/common/cards/cards'
import Info from '../../components/common/info/info'
import Video from '../../components/common/video/video'
import Aboutus from '../../components/aboutus/aboutus'
import Comments from '../../components/comments/comments'
import Footer from '../../components/footer/footer'

export  function HomePage() {
  return (
    <>
    <Header/>
    <Banner/>
    <Cards/>
    <Info/>
    <Video/>
    <Aboutus/>
    <Comments/>
    <Footer/>
    </>
  )
}
