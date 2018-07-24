import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import SecondHeader from './SecondHeader';
import Category from './Category' ;
import Shelf from './Shelf';
import Bests from './Bests';
import BottomBoard from './BottomBoard';
import Articles from './Articles';
import Footer from './Footer';

export default ()=>(
    <div>
        <Header />
        <SecondHeader />
        <Category />
        <Shelf />
        <Bests />
        <BottomBoard />
        <Articles />
        <Footer />
    </div>
)