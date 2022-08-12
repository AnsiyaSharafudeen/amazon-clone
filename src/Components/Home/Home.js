


import React from 'react'
import Product from '../Product/Product'
import './Home.css'


function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/Herotator/2_GW_3000x1200_Accessorize_your_Bathroom_Reviseda._CB624910847_.jpg" alt="" />
            
            <div className="home_row">
            <Product id='123' title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)' price={74999} 
            image="https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY200_.jpg"
            rating={5}/>

            <Product id='456' title='Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)' 
            price={3999} image="https://m.media-amazon.com/images/I/41FgiLFNhFL.jpg"
            rating={5} />
           
            </div>
            <div className="home_row">
            <Product id='789' title='HP Deskjet 2331 Colour Printer, Scanner and Copier for Home/Small Office' 
            price={3799} image="https://m.media-amazon.com/images/I/61UAALWKT0L._SX425_.jpg"
            rating={4} />

            <Product id='101112' title='Tecno Phantom X Summer Sunset (8GB+256GB) |Ultra Flagship' 
            price={25999} image="https://images-eu.ssl-images-amazon.com/images/I/41lOYIWS8GL._AC_SR400,600_.jpg"
            rating={3}/>

            <Product id='131415' title='All new Echo Show 5 (2nd Gen, 2021 release) - Smart speaker with 5.5" screen, crisp sound and Alexa (Black)' 
            price={6499} image="https://m.media-amazon.com/images/I/514kzV+UPOS._SX569_.jpg"
            rating={4}/>
           
            </div>
            <div className="home_row">
            <Product title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray' 
            price={81000} image="https://m.media-amazon.com/images/I/91pi34PiUPL._SX425_.jpg"
            rating={5}/>
            
            </div>
        </div>
    </div>
  )
}

export default Home