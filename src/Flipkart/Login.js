import React from 'react';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Login.css';

const Login = () => {
    return (
        <div className='logint'>
            <div className='login_in'>
                <h5 className='blod'>New Customer?</h5>
                <h5 className='color'>Sign Up</h5>
            </div>
            <hr />
            <div className='login_in'>
                <AccountCircleRoundedIcon />
                <p className=' img text'>My profile</p>

            </div>
            <div className='login_in'>
                <img src='./img/image.svg' alt='imgage' />
                <p className='text'>Flipkart Plus Zone</p>

            </div>
            <div className='login_in'>
                <img src='./img/orders.svg' alt='orders' />
                <p className='text'>Orders</p>

            </div>
            <div className='login_in'>
                <FavoriteBorderIcon />
                <p className=' img text'>Wishlist</p>

            </div>
            <div className='login_in'>
                <img src='./img/rewards.svg' alt='rewards' />
                <p className='text'>ReWards</p>
            </div>
            <div className='login_in img'>
                <img src='./img/giftCard.svg' alt='giftCard' />
                <p className='text'>Gift Cards</p>
            </div>



        </div >





    )
}
export default Login;