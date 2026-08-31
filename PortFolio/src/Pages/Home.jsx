import {React} from 'react'
import { motion } from "motion/react"
import Hero from '../Components/Home/Hero'
// import Lamp from '../Components/Home/Lamp'
import AboutMe from '../Components/Home/AboutMe'
import Project from '../Components/Home/FeaturedProject'
import TechStack from '../Components/Home/TechStack'
import Footer from '../Components/Footer'



const Home = () =>{

    return (<>
    <Hero />
    {/* <Lamp/> */}
    <AboutMe/>
    <Project/>
    <TechStack/>
    <Footer/>
    </>)
}

export default Home