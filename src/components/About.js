import AboutImg from '../images/about.jpg'

function Main(){
    return(
        <>
            <div className="about-background">
                <div className="about">
                    <section>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <a>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocntails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</a>
                    </section>
                    <img src={AboutImg} alt="about" />
                </div>
            </div>
        </>
    )
}

export default Main;