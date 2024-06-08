// src/StatsSection.js

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css';

const StatsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="stats-section" ref={ref}>
            <h2 className="stats-title">Best Solutions for your <span>Website</span></h2>
            <p className="stats-subtitle">Here are some numbers for you.</p>
            <div className="stats-container">
                <div className="stat-item">
                    <i className="fas fa-rocket"></i>
                    <h3>
                        {inView && <CountUp start={0} end={1210} duration={2.75} />}
                    </h3>
                    <p>Website Projects</p>
                </div>
                <div className="stat-item">
                    <i className="fas fa-users"></i>
                    <h3>
                        {inView && <CountUp start={0} end={450} duration={2.75} />}
                    </h3>
                    <p>No. of Clients</p>
                </div>
                <div className="stat-item">
                    <i className="fas fa-clock"></i>
                    <h3>
                        {inView && <CountUp start={0} end={11420} duration={2.75} />}
                    </h3>
                    <p>Working Hours</p>
                </div>
                <div className="stat-item">
                    <i className="fas fa-award"></i>
                    <h3>
                        {inView && <CountUp start={0} end={25} duration={2.75} />}
                    </h3>
                    <p>Awards</p>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
