import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle, AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import Image from "next/image";
// import deved from "@/public/dev-ed-wave.png";

// import design from '@/public/design.png';
// import code from '@/public/code.png';
// import test from '@/public/test.png';
// import web1 from "@/public/web1.png";
// import web2 from "@/public/web2.png";
// import web3 from "@/public/web3.png";
// import web4 from "@/public/web4.png";
// import web5 from "@/public/web5.png";
// import web6 from "@/public/web6.png";
// import web7 from "@/public/web7.png";
// import web8 from "@/public/web8.png";
// import web9 from "@/public/web9.png";
// import web10 from "@/public/web10.png";
// import web11 from "@/public/web11.png";
// import web12 from "@/public/web12.png";
// import web13 from "@/public/web13.png";
// import web14 from "@/public/web14.png";
// import web15 from "@/public/web15.png";
// import web16 from "@/public/web16.png";
// import web17 from "@/public/web17.png";
// import web18 from "@/public/web18.png";
// import web19 from "@/public/web19.png";



import Swipe from "react-swipe";
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Typewriter from './Typewriter';
import Portfolio from './Portfolio';
import buymecoffee from "@/public/buymecoffee.png";




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maaz Khalil</title>
        <meta name="description" content="Portfolio of Maaz Khalil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-4 md:px-10 lg-px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-5 mb-8 flex justify-between">
            <h1 className="text-lg font-burtons ">developedbymk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl md:text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md ml-4 md:ml-8" href="https://www.linkedin.com/in/maazkhalil/" target="_blank" rel="noopener noreferrer">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 md:p-10">
            <h2 className="text-3xl py-1 text-teal-600 font-medium md:text-5xl">Maaz Khalil</h2>
            <section className="text-center p-5 md:p-10">
              <Typewriter words={['Game Developer.', 'Computer Scientist.']} />
            </section>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto ">
              Hey there! I'm Maaz Khalil, a computer science grad with a knack for crafting immersive experiences as a Unity game developer. Let's level up your gaming world together! 🚀
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/maazkhalil/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/maazkhalil" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>

            <a href="mailto:maazkhalil500@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillGoogleCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 mb-10">
            <Image src={'/dev-ed-wave.png'} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-5 leading-8 text-gray-80">
              Let's elevate your gaming experience with our comprehensive range of professional services. Whether it's <span className=" text-teal-500">game development</span>, <span className=" text-teal-500">asset creation</span>, or <span className=" text-teal-500">technical support</span>, we're dedicated to bringing your vision to life with expertise and precision.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={'/design.png'} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Game Design</h3>
              <p className="py-2">
                We craft games that look great and play even better, making every moment exciting.
              </p>
              <h4 className="py-4 text-teal-600">Designing Tools I Use</h4>
              <p className=" text-gray-800 py-1" >Adobe Photoshop </p>
              <p className=" text-gray-800 py-1">Blender</p>
              <p className=" text-gray-800 py-1">Sketch</p>
              <p className=" text-gray-800 py-1">ProBuilder</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={'/code.png'} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Game Development</h3>
              <p className="py-2">
                We transform your imagination into playable realities, one line of code at a time.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className=" text-gray-800 py-1">Unity</p>
              <p className=" text-gray-800 py-1">Microsoft Visual Studio</p>
              <p className=" text-gray-800 py-1">Blender</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Illustrator</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={'/Test.png'} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Game Testing</h3>
              <p className="py-2">
                We make sure your game runs smoothly and is fun to play before it reaches your players' hands.
              </p>
              <h4 className="py-4 text-teal-600">Testing Tools I Use</h4>
              <p className=" text-gray-800 py-1" >Unity Test Framework</p>
              <p className=" text-gray-800 py-1">Unity Test Runner</p>
              <p className=" text-gray-800 py-1">Visual Studio Test Explorer</p>
            </div>



          </div>
        </section>




        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-80">
              Welcome to my gaming universe! 🎮 Dive into a collection of <span className="text-teal-500">games</span> where every pixel tells a story. From solo ventures to collaborative masterpieces, explore my <span className="text-teal-500">portfolio</span> to witness the fusion of passion, skill, and endless imagination. Join me on this journey through the realms of interactive entertainment, where every click unlocks a new adventure. 🚀
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
            {/* <a href="https://shorturl.at/jwBS5" target="_blank" rel="noopener noreferrer" className=" h-10 w-10">
    <div className=" rounded-lg  h-10 w-10">
      <Image src={'/web1.png'} alt="Image 1" fill className="" />
    </div>
  </a> */}

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.ngv.monsterbike.merge.master.puzzle&pli=1" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web1.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://apps.apple.com/pk/app/car-crash-stunt-cash-payday/id6468963096" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web2.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.drago.battle.simulator&pli=1" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web3.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.dss.bank.robbery.armed.heist.shooting.games&hl=en&gl=US" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web4.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.army.training.school.game" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web5.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.police.eagle.robot.transform.game" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web6.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.lgn.bird.hunter.gun.shooting.range" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web7.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.gkstudio.flying.stickman.man.superhero.ropehero.transform" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web8.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.gkstudio.flying.stickman.man.superhero.ropehero.transform" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web9.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.pgstudio.oiltankertransport.truck.driving.advance.car.parking.driving.school" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web10.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.trucks.manual.shift.driving" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web11.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.vinegargame.secret.agent.bank.job" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web12.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.falcon.robot.transform.monster.truck.game" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web13.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.ngv.offroad.dirt.bike.racing.stunts" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web14.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.ngv.jet.ski.water.boat.racing" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web15.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.treasure.hunt.lost.city.escape" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web16.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.shark.hunt.revenge" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web17.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.skateboard.stunts.fever2017" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web18.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>

            <div className="flex justify-center w-full">
              <a href="https://play.google.com/store/apps/details?id=com.kick.hill.climb.bike.racer" className="w-[500px] h-[500px] lg:w-[430px] lg:h-[430px] relative">
                <Image src="/web19.PNG" alt="My Image" fill className="object-cover" />
              </a>
            </div>




            {/* <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/bd7rnbwa" target="_blank" rel="noopener noreferrer">
                <Image src={'/web2.png'} alt="Image 2" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://shorturl.at/mqtvY" target="_blank" rel="noopener noreferrer">
                <Image src={'/web3.png'} alt="Image 3" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://shorturl.at/dnHKN" target="_blank" rel="noopener noreferrer">
                <Image src={'/web4.png'} alt="Image 4" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://rb.gy/tuzzgn" target="_blank" rel="noopener noreferrer">
                <Image src={'/web5.png'} alt="Image 5" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://rb.gy/74gyek" target="_blank" rel="noopener noreferrer">
                <Image src={'/web6.png'} alt="Image 6" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://rb.gy/fktihq" target="_blank" rel="noopener noreferrer">
                <Image src={'/web7.png'} alt="Image 7" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://rb.gy/9yl2hc" target="_blank" rel="noopener noreferrer">
                <Image src={'/web8.png'} alt="Image 8" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://rb.gy/anioek" target="_blank" rel="noopener noreferrer">
                <Image src={'/web9.png'} alt="Image 9" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/y94a9phj" target="_blank" rel="noopener noreferrer">
                <Image src={'/web10.png'} alt="Image 10" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/yuv3krr9" target="_blank" rel="noopener noreferrer">
                <Image src={'/web11.png'} alt="Image 11" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/hucvnhpt" target="_blank" rel="noopener noreferrer">
                <Image src={'/web12.png'} alt="Image 12" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/2e5k5m7a" target="_blank" rel="noopener noreferrer">
                <Image src={'/web13.png'} alt="Image 13" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/3pjrjvm5" target="_blank" rel="noopener noreferrer">
                <Image src={'/web14.png'} alt="Image 14" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/2btnenpa" target="_blank" rel="noopener noreferrer">
                <Image src={'/web15.png'} alt="Image 15" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/3vv79bka" target="_blank" rel="noopener noreferrer">
                <Image src={'/web16.png'} alt="Image 16" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/2s3uff9x" target="_blank" rel="noopener noreferrer">
                <Image src={'/web17.png'} alt="Image 17" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/5n8yn329" target="_blank" rel="noopener noreferrer">
                <Image src={'/web18.png'} alt="Image 18" className="object-cover w-full h-full" />
              </a>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <a href="https://tinyurl.com/mrxs2b22" target="_blank" rel="noopener noreferrer">
                <Image src={'/web19.png'} alt="Image 19" className="object-cover w-full h-full" />
              </a>
            </div> */}
          </div>
          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1.5px] border-t-[#3F3E45] mb-10">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
              2024 maazkhalil. All Rights Reserved.
            </p>
            <div className="flex flex-row md:mt-0 mt-6">
              <a href="mailto:maazkhalil500@gmail.com" target="_blank" rel="noopener noreferrer" className="mr-4"> <AiFillGoogleCircle style={{ fontSize: '24px' }} />
              </a>
              <a href="https://www.buymeacoffee.com/maazkhalil" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
                <Image
                  src={buymecoffee}
                  alt="Buy me a Coffee"
                  width={90}
                  height={95}
                  layout="fixed"
                />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}