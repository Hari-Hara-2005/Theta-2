import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

 function What() {
    return (
        <div>
            <div class="icon-bar">
                <a href="#" class="facebook"><FaWhatsapp  className='text-3xl '/></a>
                <a href="#" class="twitter"><CiYoutube className='text-3xl ' /></a>
                <a href="#" class="google"><CiInstagram  className='text-3xl '/></a>
                <a href="#" class="linkedin"><CiTwitter className='text-3xl 
'/></a>
                {/* <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> */}
            </div>

        </div>
    )
}
export default What;
