import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import styles from "../styles/components/AboutMeButton.module.css"

export default function AboutMeButton ({ onClickHandler, customStyle }) {

    useEffect(() => {
        const aboutMeButton = document.getElementsByClassName(styles.aboutMeButton)[0]
        setTimeout(() => {
            aboutMeButton.classList.add(styles.revealOpacity)
        }, 2500)
    }, [])

    const onMouseEnterHandler = (e) => {
        const buttonContent = document.getElementsByClassName(styles.buttonContent)[0]
        buttonContent.classList.add(styles.buttonContentHover)
    }

    const onMouseLeaveHandler = (e) => {
        const buttonContent = document.getElementsByClassName(styles.buttonContent)[0]
        buttonContent.classList.remove(styles.buttonContentHover)
    }

    return (
        <a href="#aboutPage" style={{textDecoration: "none", border: "none"}} >
            <button className={styles.aboutMeButton} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
                <div className={styles.buttonContent} >
                    <div className={styles.aboutMeText} >
                        About Me
                    </div>
                    <ArrowForwardIcon color={styles.buttonContent.color} />
                </div>
            </button>
        </a>
    )
}