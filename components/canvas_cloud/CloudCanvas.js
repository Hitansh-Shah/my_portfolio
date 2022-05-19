import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../../styles/components/CloudCanvas.module.css'

export default function CloudCanvas() {
    const [canvasDimension, setCanvasDimension] = useState(600)
    
    useEffect(() => {
        const TagCanvasScript = document.createElement('script')
        TagCanvasScript.type = 'text/javascript'
        TagCanvasScript.src = import('./tagcanvas.min.js')

        const LoadCanvasScript = document.createElement('script')
        LoadCanvasScript.type = 'text/javascript'
        LoadCanvasScript.src = import('./loadCanvas.js')
        
        document.body.appendChild(TagCanvasScript)
        document.body.appendChild(LoadCanvasScript)
        
        setCanvasDimension(window.matchMedia('(max-width: 620px)').matches? (300) : 600)
    }, [])



    return (
        <div>
            <div id="myCanvasContainer" className={styles.myCanvasContainer}>
                <canvas id="myCanvas" className={styles.myCanvas} 
                    width={canvasDimension} 
                    height={canvasDimension} 
                >
                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                    <ul>
                        <li><a>HTML</a></li>
                        <li><a>CSS</a></li>
                        <li><a>Javascript</a></li>
                        <li><a>ReactJS</a></li>
                        <li><a>NodeJs</a></li>
                        <li><a>ExpressJS</a></li>
                        <li><a>MongoDB</a></li>
                        <li><a>SQL</a></li>
                        <li><a>Python</a></li>
                        <li><a>Django</a></li>
                        <li><a>Java</a></li>
                        <li><a>C/C++</a>/C++</li>
                        <li><a>NextJS</a></li>
                        <li><a>Webpack</a></li>
                        <li><a>Linux</a></li>
                        <li><a>Git</a></li>
                        <li><a>Bash</a></li>
                        <li><a>Typescript</a></li>
                        <li><a>Heroku</a></li>
                        <li><a>Vercel</a></li>
                        <li><a>Netlify</a></li>
                        <li><a>Solidity</a></li>

                    </ul>
                </canvas>
            </div>
        </div>

    )
}