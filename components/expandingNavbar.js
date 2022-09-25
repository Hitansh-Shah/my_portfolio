import Link from "next/link";
import { useState, useEffect } from "react";
import { useTransition, animated, config, useSpring } from 'react-spring'
import styles from "../styles/components/Navbar.module.css"
import HamburgerMenu from "./HamburgerMenu";

const LinkButton = ({ styles, onClickHandler, link, href, isResume }) => {
    return (
        isResume ?

        <a href={href} target="_blank" style={{textDecoration: "none", border: "none"}}>
            <button className={ styles.linkButton } onClick={onClickHandler} >{link}</button>
        </a>

        :

        <Link href={href}>
            <button className={ styles.linkButton } onClick={onClickHandler} >{link}</button>
        </Link>
    )
}


export default function ExpandingNavbar() {
    const links = ["HOME", "ABOUT", "PROJECTS", "RESUME"]
    const [isOpen, setIsOpen] = useState(false)

    const menuTransition = useTransition(isOpen, {
        from: {
            opacity: 0,
            filter: "blur(90px)",
            right: "0%",
            top: "0%",
            width: "25%",
            height: "25%",
        },
        enter: item => async (next) => {
            await next({
                right: "37.5%",
                top: "37.5%",
                opacity: 0.7,
                filter: "blur(20px)",
            })

            await next({
                width: "100%",
                height: "100%",
                right: "0%",
                top: "0%",
                opacity: 1,
                filter: "blur(0px)",
            })
        },
        leave: item => async (next) => {
            await next({
                right: "37.5%",
                top: "37.5%",
                opacity: 0.7,
                filter: "blur(20px)",
                width: "25%",
                height: "25%",
                delay: 800,
            })

            await next({
                opacity: 0,
                filter: "blur(90px)",
                right: "0%",
                top: "0%",
            })
        },
        config: {
            duration: 150
        }
    })

    const homeTransition = useTransition(isOpen, {
        from:{
            transformOrigin: "0 0",
            transform: "translateY(-400%)",
            opacity: 0,
            delay: 400,
        },
        enter: {
            transformOrigin: "0 0",
            transform: "translateY(0%)",
            opacity: 1,
            delay: 400,
        },
        leave: {
            transformOrigin: "0 0",
            transform: "translateY(-400%)",
            opacity: 0,
            delay: 600,
        },
        config: config.slow,
        
    })
    const aboutTransition = useTransition(isOpen, {
        from:{
            transformOrigin: "0 0",
            transform: "translateX(-300%)",
            opacity: 0,
            delay: 700,
        },
        enter: {
            transformOrigin: "0 0",
            transform: "translateX(0%)",
            opacity: 1,
            delay: 700,
        },
        leave: {
            transformOrigin: "0 0",
            transform: "translateX(-300%)",
            opacity: 0,
            delay: 400,
        },
        config: config.slow,
    })
    const projectsTransition = useTransition(isOpen, {
        from:{
            transformOrigin: "0 0",
            transform: "translateX(200%)",
            opacity: 0,
            delay: 900,
        },
        enter: {
            transformOrigin: "0 0",
            transform: "translateX(0%)",
            opacity: 1,
            delay: 900,
        },
        leave: {
            transformOrigin: "0 0",
            transform: "translateX(200%)",
            opacity: 0,
            delay: 200,
        },
        config: config.slow,
    })
    const resumeTransition = useTransition(isOpen, {
        from:{
            transformOrigin: "0 0",
            transform: "translateY(400%)",
            opacity: 0,
            delay: 1100,
        },
        enter: {
            transformOrigin: "0 0",
            transform: "translateY(0%)",
            opacity: 1,
            delay: 1100,
        },
        leave: {
            transformOrigin: "0 0",
            transform: "translateY(400%)",
            opacity: 0,
        },
        config: config.slow,
    })

    const linkTransitions = {homeTransition, aboutTransition, projectsTransition, resumeTransition}

    const cssStyles = {width:"100%", height: "100%", backgroundColor:"black", position:"fixed", display:"flex", justifyContent:"center", alignItems:"center", zIndex: 1}
    
    const divBurgerStyleOpen = styles.divBurger + " " + styles.divBurgerIndex
    const divBurgerStyleClose = styles.divBurger
    const [divBurgerStyle, setDivBurgerStyle] = useState(divBurgerStyleClose)

    return(
        <div>
            <div className={divBurgerStyle}>
                <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} setDivBurgerStyle={setDivBurgerStyle} divBurgerStyleClose={divBurgerStyleClose} divBurgerStyleOpen={divBurgerStyleOpen}/>
            </div>

            {
                menuTransition((style, item) => 
                    item?
                    <animated.div className="container" style={{...cssStyles, ...style}}>
                        <div>
                            {links.map((link, index) => {
                                const transitionFunction = linkTransitions[`${link.toLowerCase()}Transition`]
                                return (
                                    <div key={index} style={{display: "flex", justifyContent: "center"}}>
                                        {
                                            transitionFunction((linkStyle, linkItem) => 
                                                linkItem?
                                                <animated.div style={linkStyle}>
                                                    <LinkButton styles={styles} onClickHandler={() => setIsOpen(!isOpen)} link={link} isResume={link==="RESUME"} href={ link==="RESUME" ? 
                                                        'https://drive.google.com/file/d/1n_4wG8WmI4SB2UkksP5P_GXPbMl_7u9R/view?usp=sharing&usp=embed_facebook' : 
                                                        `#${link.toLowerCase()}Page`} 
                                                    />
                                                </animated.div>

                                                :
                                                ''
                                            )
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </animated.div>

                    :
                    ''
    
                )
                
            }



        </div>
    )
}