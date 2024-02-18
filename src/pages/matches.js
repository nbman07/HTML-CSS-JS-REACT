import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Matches = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Matches"
    }, []);
    return (
        <>
            <center>

                <div id="matches-matches">
                    <div className="matches-matches-layout">
                        <div>
                            <img src='logo192.png' />
                            <p>Team A</p>
                        </div>
                        <div className="date-time-of-match">
                            <p className="date-of-match">19/10/2023</p>
                            <p className="time-of-match">15:00</p>
                        </div>
                        <div>
                            <img src='logo192.png' />
                            <p>Team B</p>
                        </div>
                    </div>
                    <div className="matches-matches-layout">
                        <div>
                            <img src='logo192.png' />
                            <p>Team A</p>
                        </div>
                        <div className="date-time-of-match">
                            <p className="date-of-match">19/10/2023</p>
                            <p className="time-of-match">15:00</p>
                        </div>
                        <div>
                            <img src='logo192.png' />
                            <p>Team B</p>
                        </div>
                    </div>
                    <div className="matches-matches-layout">
                        <div>
                            <img src='logo192.png' />
                            <p>Team A</p>
                        </div>
                        <div className="date-time-of-match">
                            <p className="date-of-match">19/10/2023</p>
                            <p className="time-of-match">15:00</p>
                        </div>
                        <div>
                            <img src='logo192.png' />
                            <p>Team B</p>
                        </div>
                    </div>
                    <div className="matches-matches-layout">
                        <div>
                            <img src='logo192.png' />
                            <p>Team A</p>
                        </div>
                        <div className="date-time-of-match">
                            <p className="date-of-match">19/10/2023</p>
                            <p className="time-of-match">15:00</p>
                        </div>
                        <div>
                            <img src='logo192.png' />
                            <p>Team B</p>
                        </div>
                    </div>
                    <div className="matches-matches-layout">
                        <div>
                            <img src='logo192.png' />
                            <p>Team A</p>
                        </div>
                        <div className="date-time-of-match">
                            <p className="date-of-match">19/10/2023</p>
                            <p className="time-of-match">15:00</p>
                        </div>
                        <div>
                            <img src='logo192.png' />
                            <p>Team B</p>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}

function HomeMatches() {
    return (
        <>
            <Link to="/matches" className="sub-heading-labels">Matches</Link>
            <div id="matches">
                <div className="matches-layout">
                    <div>
                        <img src='logo192.png' />
                        <p>Team A</p>
                    </div>
                    <div className="date-time-of-match">
                        <p className="date-of-match">19/10/2023</p>
                        <p className="time-of-match">15:00</p>
                    </div>
                    <div>
                        <img src='logo192.png' />
                        <p>Team B</p>
                    </div>
                </div>
                <div className="matches-layout">
                    <div>
                        <img src='logo192.png' />
                        <p>Team A</p>
                    </div>
                    <div className="date-time-of-match">
                        <p className="date-of-match">19/10/2023</p>
                        <p className="time-of-match">15:00</p>
                    </div>
                    <div>
                        <img src='logo192.png' />
                        <p>Team B</p>
                    </div>
                </div>
                <div className="matches-layout">
                    <div>
                        <img src='logo192.png' />
                        <p>Team A</p>
                    </div>
                    <div className="date-time-of-match">
                        <p className="date-of-match">19/10/2023</p>
                        <p className="time-of-match">15:00</p>
                    </div>
                    <div>
                        <img src='logo192.png' />
                        <p>Team B</p>
                    </div>
                </div>
                <div className="matches-layout">
                    <div>
                        <img src='logo192.png' />
                        <p>Team A</p>
                    </div>
                    <div className="date-time-of-match">
                        <p className="date-of-match">19/10/2023</p>
                        <p className="time-of-match">15:00</p>
                    </div>
                    <div>
                        <img src='logo192.png' />
                        <p>Team B</p>
                    </div>
                </div>
                <div className="matches-layout">
                    <div>
                        <img src='logo192.png' />
                        <p>Team A</p>
                    </div>
                    <div className="date-time-of-match">
                        <p className="date-of-match">19/10/2023</p>
                        <p className="time-of-match">15:00</p>
                    </div>
                    <div>
                        <img src='logo192.png' />
                        <p>Team B</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Matches;