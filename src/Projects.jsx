export function Projects(){
    return(
        <>
            <div id="projects-box" className="projects-box">
                <h1>Projects:</h1>
                <div className="projects-row">
                    <div className="card" id="card1">
                        <div className="overlay">
                            <p>Embedded Systems: <br></br> Multithreaded C Project</p>
                            <a href='https://github.com/Camceb/ece231Lab2'>
                            <h1>click here for <br></br>more info &raquo;</h1>
                            </a>
                        </div>
                    </div> 
                    <div className="card" id="card2">
                        <div className="overlay">
                            <p>Stock Tracker [React.JS <br></br> with Finnhub API]</p>
                            <a href='https://camceb.github.io/stockPractice'>
                            <h1>click here for <br></br>more info &raquo;</h1>
                            </a>
                        </div>
                    </div>

                    <div className="card" id="card3">
                        <div className="overlay">
                            <p>AI Pong [Python <br></br>Pygame/NEAT] </p>
                            <a href='https://github.com/CamCeb/PongAI'>
                            <h1>click here for <br></br>more info &raquo;</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}