import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
function Home() {
  return (
    <>
    <div className="home" id="home">

   <main>
    <h1>Techystar</h1>
    <p>Solution to all your problems</p>
   </main>

    </div>

    <div className="home2">
     <img src={vg} alt="Graphics" />
      <div>
        <p>
           We are one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children. 
        </p>
      </div>

    </div>

    <div className="home3"  id="about">
      <div>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem, labore iste adipisci, ab dolorem animi quam sequi expedita quos aliquam ullam provident placeat quis iure officiis dolorum sapiente similique Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, error. Facilis in laudantium fuga accusantium eveniet. Veritatis dolores quisquam, delectus iste minima cumque ab facilis temporibus quibusdam quae error nostrum!</p>
    </div>
    </div>
    <div className="home4"  id="brands">
    <div>
        <h1>Brands </h1>
        <article>
        <div style={{animationDelay:"0.3s"}}>
         <AiFillGoogleCircle/>
         <p>Google</p>

        </div>
        <div style={{animationDelay:"0.5s"}}>
         <AiFillAmazonCircle/>
         <p>Amazon</p>

        </div>
        <div style={{animationDelay:"0.7s"}}>
         <AiFillYoutube/>
         <p>Youtube</p>

        </div>
        <div style={{animationDelay:"1s"}}>
         <AiFillInstagram/>
         <p>Instagram</p>

        </div>
        </article>
    </div>




    </div>
    </>
  )
}

export default Home
