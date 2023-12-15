import Nav from "./pages/Nav"

export default function App() {


    return (

            <div className="home-container">

                <div className="header">
                    
                    <img src="/img/logo.svg" alt="" />

                    <Nav />

                </div>

                <main className="home-main">

                    <div className="leftSide">

                        <h5>SO, YOU WANT TO TRAVEL TO</h5>

                        <h1>SPACE</h1>

                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

                    </div>

                    <img src="/img/oval-group.png" alt="" />

                </main>

            </div>

    )
}
