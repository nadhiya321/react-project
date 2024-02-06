import React from 'react';
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
 import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
 import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Login from './Login';
import 'tippy.js/themes/light.css';
import './Carousel.css';
import Slider from 'react-slick';
// import { Block } from '@mui/icons-material';


function Header() {
    const slick ={
        dots:false,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        
    

    }
    

    return (
        <div className='nav'>
            <div className='header'>
                <div className='header_first'><img src="./img/flip.svg" alt="flip" />
                </div>
                <div className='header_second'>
                    <SearchIcon />
                    <input type='text' name='search' placeholder='Search for Products,Brand and More' />
                </div>
                <div className='header_third'>
                    <img className='image' src="./img/profile.svg" alt="profile" />
                    <Tippy theme='light' content={<Login></Login>} interactive={true}>
                        <span>Login</span>
                    </Tippy>
                    <ExpandMoreIcon />
                </div>
                <div className='header_fourth'>
                    <ShoppingCartIcon />
                    <p>Cart</p>
                </div>
                <div className='header_fifthy'>
                    <StorefrontIcon />
                    <p>Become a Seller</p>
                </div>
                <div className='header_sixth'>
                    <MoreVertIcon />
                </div>
            </div>
            <div className='Section'>
                <div className='row'>
                    <div className='Col'>
                        <img src='./img/grocery1.jpg' alt='grocery1' />
                        <p className='text'>Grocery</p>
                    </div>
                    <div className='Col'>
                        <img src='./img/moblie1.webp' alt='moblie' />
                        <p className='text'> Mobiles</p>

                    </div>
                    <div className='Col'>
                        <img src='./img/Fashion.webp' alt='Fashion' />
                        <p className='text'>  Fashion <ExpandMoreIcon /> </p>

                    </div>
                    <div className='Col'>
                        <img src='./img/electronic.jpg' alt='Electronic' />
                        <p className='text'>Electronics  <ExpandMoreIcon /></p>
                    </div>

                    <div className='Col'>
                        <img src='./img/Home & Furniture.webp' alt='Home & Furniture' />
                        <p className='text'>Home & Furniture<ExpandMoreIcon /></p>
                    </div>

                    <div className='Col'>
                        <img src='./img/Appliance.webp' alt='Appliance' />
                        <p className='text'>Appliances</p>

                    </div>

                    <div className='Col'>
                        <img src='./img/Travel.jpg' alt='Travel' />
                        <p className='text'>Travel</p>
                    </div>

                    <div className='Col'>
                        <img src='./img/beauty.jpg' alt='beauty' />
                        <p className='text'>Beauty, Toys & More<ExpandMoreIcon /></p>
                    </div>
                    <div className='Col'>
                        <img src='./img/two.jpg' alt='two' />
                        <p className='text'>Two Wheelers<ExpandMoreIcon />
                        </p>
                    </div>
                </div>
            </div>

            <div className='Carousel'>
                <Slider {...slick} >
                    <div className='sampleprevarrow'>
                     <ChevronLeftIcon /> 

                    </div>

                    <div className='slider-image'>
                        <img src='./img/card.webp' alt='card' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card1.webp' alt='card1' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card2.webp' alt='card2' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card3.webp' alt='card3' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card4.webp' alt='card4' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card5.webp' alt='card5' style={{ width: '100%', height: '50vh' }} />
                        </div>
                        <div className='slider-image'>
                        <img src='./img/card6.webp' alt='card6' style={{ width: '100%', height: '50vh' }} />
                                        </div>
                    <div> <ChevronRightIcon /></div>


                </Slider>
            </div>


        </div>








    );
}

















export default Header;