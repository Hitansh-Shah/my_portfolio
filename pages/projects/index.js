import styles from "../../styles/pages/Projects.module.css"
import JellyName from "../../components/jellyName"
import ProjectList from "../../components/project/projectList"

export default function ProjectsPage() {
    return(
        <div>
            <div style={{ marginTop: "10px" }} id="projectsPage" >
                <div style={{display: "flex", marginLeft: "20px"}} className={styles.projects}>
                    <JellyName string="Projects" size="60px" color="rgb(0, 238, 255)" effectClass="projects"/>
                </div>

                <div>
                    <ProjectList/>
                </div>
            </div>
        </div>
    )
}