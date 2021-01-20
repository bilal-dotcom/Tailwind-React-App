// <!-- header -->
import React from 'react';
import {Link} from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
        <header class="">
            <div class="bg-gray-800 py-6">
                <div class="space-x-10 text-gray-100 font-extrabold text-xl flex justify-center">
                    <div><Link to="/page/home" class="inline-block px-3 py-2 hover:text-gray-900 hover:bg-gray-700 rounded-md ">Home</Link></div>
                    <div><Link to="/page/list" class="inline-block px-3 py-2 hover:text-gray-900 hover:bg-gray-700 rounded-md">Products List</Link></div>
                    <div><Link to="/page/service" class="inline-block px-3 py-2 hover:text-gray-900 hover:bg-gray-700 rounded-md">Service</Link></div>
                    <div><Link to="/page/contact" class="inline-block px-3 py-2 hover:text-gray-900 hover:bg-gray-700 rounded-md ">Contact</Link></div>
                </div>       
             </div>
        </header>
        )
    }
}

export default Header;