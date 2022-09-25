import ProjectCard from "./projectCard";

export default function ProjectList() {

    const projectData = [
        {
            title: "Ecommerce-Warranty",
            description: "This is a DApp built on Ethereum for handling warranty in form of NFTs. It allows the admin to mint Warranty NFTs for the customers. Customers are provided with a dashboard to track all their NFTs.",
            projectLink: "https://github.com/Hitansh-Shah/ecommerce-warranty",
        },
        {
            title: "Technobar",
            description: "Technobar is a MERN stack web-app. It helps developers to connect and view the skills of other developers who have registered on this platform. It is deployed on heroku. Go and register now!",
            projectLink: "https://github.com/Hitansh-Shah/Technobar",
        },
        {
            title: "YoutubeResizer",
            description: "This is a chrome extension which allows you to watch youtube videos in full screen mode while keeping the browser in window-mode. Additionally it provides ability to zoom in and zoom out.",
            projectLink: "https://github.com/Hitansh-Shah/YoutubeResizer"
        },
        {
            title: "task-manager-api",
            description: "REST APIs made with NodeJS, ExpressJs and MongoDB. It provides basic CRUD features for 'user' and 'task' creations. I have used JWT tokens to implement authentication.",
            projectLink: "https://github.com/Hitansh-Shah/task-manager-api"
        },
        {
            title: "Spomtify",
            description: "This is a desktop application which allows user to get the details of a song by entering its name and the name of its artist. It gives various details like the lyrics of the song, it's album, etc.",
            projectLink: "https://github.com/Hitansh-Shah/Spomtify"
        },
    ]

    return( 
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
                projectData.map((data, index) => {
                    return(
                        <div style={{ padding: "50px", marginBottom: "10px"}} key={index} >
                            <ProjectCard title={data.title} description={data.description} projectLink={data.projectLink} timeOut={index*1000} cardName={`card${index}`} delayTime={index*300} />
                        </div>
                    )
                })
            }
        </div>
    )
}