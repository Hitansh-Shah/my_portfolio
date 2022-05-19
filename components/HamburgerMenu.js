import { useState } from "react"
import styles from "../styles/components/HamburgerMenu.module.css"

export default function HamburgerMenu({ isOpen, setIsOpen, setDivBurgerStyle, divBurgerStyleOpen, divBurgerStyleClose }) {
    const onClickHandler = () => {
        if(isOpen) {
            setTimeout(() => setDivBurgerStyle(divBurgerStyleClose), 800)
        } else {
            setDivBurgerStyle(divBurgerStyleOpen)
        }
        setIsOpen(!isOpen)
    }

    const openStyles = styles.container + " " + styles.open

    return (
        <div className={isOpen? openStyles : styles.container} onClick={onClickHandler}>
            <div className={styles.hamburger}>
            </div>
        </div>
    )
}