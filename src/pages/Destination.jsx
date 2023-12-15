import { useState } from "react"
import Nav from "./Nav"

export default function Destination() {

    let dests = [
        {
            name: 'MOON',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 KM',
            travelTime: '3 DAYS',
            img: '/img/moon.png'
        },

        {
            name: 'MARS',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: '225 MIL. KM',
            travelTime: '9 MONTHS',
            img: '/img/mars.png'
        },

        {
            name: 'EUROPA',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MIL. KM',
            travelTime: '3 YEARS',
            img: '/img/europa.png'
        },

        {
            name: 'TITAN',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BIL. KM',
            travelTime: '7 YEARS',
            img: '/img/titan.png'
        },
        
    ]

    const [number, setNumber] = useState(0);



    return (
        <div className="destination-container">

            <div className="header">
                    
                <img src="/img/logo.svg" alt="" />

                <Nav />

            </div>

            <main className="destination-main">

                <header>
                    <span>01</span> PICK YOUR DESTINATION
                </header>

                <div className="destination-content">

                    <img src={dests[number].img} alt="" />

                    <div className="contents">

                        <ul>
                            <li><a href="#" className={number === 0 ? 'contents-active' : ''} onClick={function(e) {
                                e.preventDefault();
                                setNumber(0);
                                e.target.classList.add('contents-active');
                            }}>MOON</a></li>
                            
                            <li><a href="#" className={number === 1 ? 'contents-active' : ''} onClick={function(e) {
                                e.preventDefault();
                                setNumber(1);
                                e.target.classList.add('contents-active');
                            }}>MARS</a></li>

                            <li><a href="#" className={number === 2 ? 'contents-active' : ''} onClick={function(e) {
                                e.preventDefault();
                                setNumber(2)
                                e.target.classList.add('contents-active');
                            }}>EUROPA</a></li>

                            <li><a href="#" className={number === 3 ? 'contents-active' : ''} onClick={function(e) {
                                e.preventDefault();
                                setNumber(3)
                                e.target.classList.add('contents-active');
                            }}>TITAN</a></li>

                        </ul>

                        <h2>{dests[number].name}</h2>

                        <p>{dests[number].description}</p>

                        <div className="contents-block">

                            <p>AVG. DISTANCE <span>{dests[number].distance}</span></p>

                            <p>EST. TRAVEL TIME <span>{dests[number].travelTime}</span></p>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}