import {  FaChartPie,FaBars, FaCubes, FaHome, FaLink, FaPennyArcade, FaUserFriends, FaWallet } from 'react-icons/fa';
import { useState } from 'react';


const Main = () => {

    const [isActive, setIsActive] =  useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return ( 
        <>
        <aside className={isActive ? 'closeAside' : "aside" }>

            <div className="logo"> </div>
            <nav>
                <ul>
                    <li className="active" >< FaHome /> <a href="index.html"> Home</a></li>
                    <li> <span>< FaWallet /></span><a href="index.html">Message</a></li>
                    <p className="share">SHARE</p>
                    <li> <span>< FaWallet /></span><a href="index.html">Banking</a></li>
                    <li> <span>< FaChartPie /></span><a href="index.html">Challenge</a></li>
                    <li> <span>< FaCubes /></span><a href="index.html">Party</a></li>
                    <li> <span>< FaLink /></span><a href="index.html">Connect</a></li>
                    <li> <span>< FaPennyArcade /></span><a href="index.html">Parade</a></li>
                    <li> <span>< FaUserFriends /></span><a href="index.html">Group</a></li>

                </ul>
            </nav>
        </aside>
        <span className="menu" onClick={toggleMenu}>< FaBars /> </span>
        </>
     );
}
 
export default Main;