import { useEffect, useRef } from "react"
import styles from "../../styles/components/ProjectCard.module.css"

export default function ProjectCard({ title, description, projectLink, timeOut, cardName, delayTime }) {

    const myRandomNumber = Math.floor((Math.random() * (timeOut + 1)) + 1)

    useEffect(() => {
        const card = document.getElementsByClassName(cardName)[0]
        card.classList.add(styles.projectCardAnimation)
        card.style.animationDelay = `-${myRandomNumber}s`
    })

    // const triggerRef = useRef();
    // const dataRef = useIntersectionObserver(triggerRef, {
    //   freezeOnceVisible: true
    // });

    // const animatedCardStyle = useSpring({
    //     from: {
    //         // opacity: 0,
    //         // y: -100,
    //         // transform: "scale(0.5, 0.5)",
    //     }, 
    //     to: {
    //         // opacity: dataRef?.isIntersecting ? 1: 0,
    //         // y: dataRef?.isIntersecting ? 0 : -100,
    //         // transform: "scale(1, 1)",
    //     },
    //     config: {
    //         duration: 500,
    //     },
    //     delay: delayTime
    // })

    return(
        <div>
            <div>
                <div className={styles.projectCard + " " + cardName}>
                    <div className={styles.projectThumbnail}>
                        <div className={styles.projectTitle}>
                            {title}
                        </div>
                    </div>
                    <div className={styles.projectAbout}>
                        <div className={styles.projectDescriptionContainer}>
                            <p>
                                {description}
                            </p>
                        </div>

                        <div style={{display: "flex", justifyContent: "center", marginBottom: "30px", textDecoration: "none", border: "none"}}>
                            <a href={projectLink} target="_blank">
                                <button className={styles.viewProjectButton} >View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}