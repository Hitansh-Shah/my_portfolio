import styles from "../../styles/pages/About.module.css"
import JellyName from "../../components/jellyName"
import CloudCanvas from "../../components/canvas_cloud/CloudCanvas"

export default function AboutPage() {


    return (
        <div>
            <div id="aboutPage" style={{paddingTop: "50px"}}>
                <div style={{display: "flex"}} className={styles.aboutme}>
                    <JellyName string="About" size="60px" color="rgb(0, 238, 255)" effectClass="aboutme"/>
                    <JellyName string="Me" size="60px" color="rgb(0, 238, 255)" effectClass="aboutme"/>
                </div>

                <div className={styles.skillsAndIntro}>
                    <div className={styles.introDiv}>
                        <p style={{color: "white", fontSize: "17px", marginTop: "10px", marginRight: "10px"}}>
                            <span style={{display: "flex", alignItems: "center"}}>
                                Hello there!<span className={styles.hello} ><span style={{fontSize: "30px"}}>👋</span></span>
                            </span>
                            <br/>
                            I am Hitansh Shah. I am an undergradudate at IIT Varanasi (BHU) pursuing Mathematics and Computing
                            and I am expected to graduate in the year 2025.
                            <br/>
                            I was introduced to the world of programming in my freshman year of college.
                            I began to pursue various topics and areas of programming. I always try to learn new things and
                            keep experimenting around various fields/subfields to see what best fits my interest.
                            Apart from that, I <span style={{display: "inline-block", width: "20px", height: "25px"}}><span className={styles.heart}>❤️</span></span> contributing to open-source.
                            <br/>
                            <br/>
                            I started off with web-development and I still love to create creative web-apps.
                            I learnt MERN stack as my first tech-stack for full stack development and then went
                            on to learn and work with various other tech-stacks like Django, python, NextJS etc.
                            <br/>
                            I am also very much interested in <span style={{fontWeight: "bold"}}>Web3</span> and would
                            love to collaborate on any blockchain related projects.
                            
                        </p>
                    </div>
                    <div className={styles.cloudCanvasDiv}>
                        <CloudCanvas/>
                    </div>
                </div>



            </div>
        </div>
    )
}