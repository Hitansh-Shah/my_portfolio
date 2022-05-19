import styles from "../styles/components/JellyName.module.css"
import { useEffect } from "react"

export default function JellyName({ string, size, color, effectClass }) {
    const stringArray = string.split("")
    const onMouseEnterHandler = (e) => {
        e.target.classList.add(styles.mouseEnter)
        setTimeout(() => e.target.classList.remove(styles.mouseEnter), 1500)
    }

    useEffect(() => {
        const letterSpans = [...document.getElementsByClassName(effectClass)]
        let counter = 0;
        letterSpans.forEach(letterSpan => {
            const temp = counter
            counter += 100
            setTimeout(() => {
                letterSpan.classList.add(styles.mouseEnter)
            }, 100 + temp)
            setTimeout(() => {
                letterSpan.classList.remove(styles.mouseEnter)
            }, 1100 + temp)
            
            setTimeout(() => {
                letterSpan.classList.add(styles.reveal)
            }, temp)
        })
    }, [])

    return (
        <div className={styles.stringContainer}>
            {
                stringArray.map((letter, index) => {
                    return (
                        <span key={index} className={styles.letter + " " + effectClass} style={{fontSize: size, color: color}} onMouseEnter={onMouseEnterHandler}>{letter}</span>
                    )
                })
            }
        </div>
    )
}