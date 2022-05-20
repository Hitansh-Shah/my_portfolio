import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css"
import JellyName from "../components/jellyName";
import { useEffect, useRef } from "react";
import LaptopIllustration from "../public/laptop_illustration.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import AboutMeButton from "../components/aboutMeButton";
import { SiGmail } from "react-icons/si"
import AboutPage from "./about";
import ProjectsPage from "./projects";
import Copyright from "../components/copyright";
import useIntersectionObserver from "../components/project/useIntersectionObserver";
import { useSpring, animated } from "react-spring";

export default function Home() {
  
  useEffect(() => {

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    
    const webDeveloper = document.getElementsByClassName(styles.webDeveloper)[0]
    const mouseScrollContainer = document.getElementsByClassName(styles.mouseScrollContainer)[0]
    const socialHandles = document.getElementsByClassName(styles.socialHandles)[0]
    
    setTimeout(() => {
      webDeveloper.classList.add(styles.revealOpacity)
      mouseScrollContainer.classList.add(styles.revealOpacity)
      socialHandles.classList.add(styles.revealOpacity)
    }, 1500)
    
    
    const imageIllustration = document.getElementsByClassName(styles.imageIllustration)[0]
    setTimeout(() => {
      imageIllustration.classList.add(styles.imageIllustrationOpacity)
    }, 1500)
    setTimeout(() => {
      imageIllustration.classList.add(styles.imageIllustrationFloat)
    }, 3500)
    
  }, [])
  
  

  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  });

  const mouseVanishAnimation = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      duration: 300
    }
  })

  return (
    <div>
      <Head>
        <title>Hitansh Shah</title>
        <link rel="icon" href="laptop_illustration.png" />
      </Head>
      <div ref={triggerRef}/>
      <div style={{height: "100vh", display: "flex", alignItems: "center"}} id="homePage" >

        <div className={styles.mainContent} >
          <div style={{marginLeft: "5vw", marginBottom: "0px"}}>
            <div style={{display:"flex", justifyContent: "flex-start"}} className={styles.hitanshShah} >
              <JellyName string={"Hitansh"} effectClass="hitanshshah"/>
              <JellyName string={"Shah"} effectClass="hitanshshah"/>
            </div>

            <div className={styles.webDeveloper}>
              Web Developer
            </div>

            <div className={styles.socialHandles}>
              <a href="https://github.com/hitansh-shah" target="_blank" className={styles.socialIcons} >
                <FaGithub size={25} />
              </a>
              <a href="https://www.facebook.com/hitansh.shah.79230" target="_blank" className={styles.socialIcons} >
                <FaFacebook size={25} />
              </a>
              <a href="https://www.linkedin.com/in/hitansh-shah-b71161200/" target="_blank" className={styles.socialIcons} >
                <FaLinkedin size={25} />
              </a>
              <a href="https://www.instagram.com/hitansh_123/" target="_blank" className={styles.socialIcons} >
                <FaInstagram size={25} />
              </a>
              <a href="mailto:hitanshshah123@gmail.com" target="_blank" className={styles.socialIcons} >
                <SiGmail size={25} />
              </a>
            </div>

            <div style={{ marginTop: "40px", marginLeft: "-5px", position: "relative" }}>
              <AboutMeButton/>
            </div>

          </div>
        </div>

        <div className={styles.imageIllustrationContent} >
          <div style={{marginRight: "10vw"}} className={styles.imageIllustration}>
            <Image alt="laptop illustration" src={LaptopIllustration} width="300vw" height="300vh"  />
          </div>

          <animated.div style={mouseVanishAnimation}>
            <div className={styles.mouseScrollContainer}>
              <div className={styles.mousey} >
                <div className={styles.scroller} ></div>
              </div>
            </div>
          </animated.div>

        </div>


      </div>


      
      <div style={{marginLeft: "20px"}}>
        <AboutPage/>
      </div>

      <div>
        <ProjectsPage/>
      </div>


      <div style={{marginTop: "100px"}}>
        <Copyright/>
      </div>

    </div>
    
  )
}