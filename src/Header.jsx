import React from 'react'
import './Header.css';
function Header() {
  return (
    <>
        <header class="header">
          <div class="logo">
             <p>Ynlouafi.<span class="dev">dev</span></p>
          </div>
       
           <div class="navbox">

             <div class="navbox_menu">
                 <a href="#">HOME</a>
                 <a  href="#">Projects</a>
                 <a  href="#">About</a>
                 <a  href="#">Contact</a>
             </div>
           </div> 


            <div class="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="37" viewBox="0 0 43 37" fill="none">
                   <path d="M0 3.07143C0 1.37254 1.37254 0 3.07143 0H39.9286C41.6275 0 43 1.37254 43 3.07143C43 4.77031 41.6275 6.14286 39.9286 6.14286H3.07143C1.37254 6.14286 0 4.77031 0 3.07143ZM0 18.4286C0 16.7297 1.37254 15.3571 3.07143 15.3571H39.9286C41.6275 15.3571 43 16.7297 43 18.4286C43 20.1275 41.6275 21.5 39.9286 21.5H3.07143C1.37254 21.5 0 20.1275 0 18.4286ZM43 33.7857C43 35.4846 41.6275 36.8571 39.9286 36.8571H3.07143C1.37254 36.8571 0 35.4846 0 33.7857C0 32.0868 1.37254 30.7143 3.07143 30.7143H39.9286C41.6275 30.7143 43 32.0868 43 33.7857Z" fill="white"/>
                </svg>
              </div>


           <div class="lang">
               <a href="#">EN</a>
               <a href="#">FR</a>
           </div>


      </header>
    </>
  )
}

export default Header
