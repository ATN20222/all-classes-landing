import React, { useEffect, useState } from "react";

const HomeCounters = () => {
    const counters = [
        { title: "Communities", endValue: 3 },
        { title: "Users", endValue: 1050 },
        { title: "Vendors", endValue: 50 },
    ];

    return (
        <section className="HomeCounters"> 
            <div className="container">
                <div className="row Center">
                    {counters.map((counter, index) => (
                        <CounterCircle key={index} title={counter.title} endValue={counter.endValue} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CounterCircle = ({ title, endValue }) => {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const increment = endValue / 100;
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= endValue) {
                    clearInterval(interval);
                    return endValue;
                }
                return Math.ceil(prev + increment);
            });
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
    }, [endValue]);

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-12 CounterCard">
            <div className="progress-circle">
                <svg width="150" height="150" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" className="circle-bg" />
                    <circle
                        cx="60"
                        cy="60"
                        r="54"
                        className="circle-progress"
                        style={{
                            strokeDasharray: 339.29, // Circumference of the circle
                            strokeDashoffset: 339.29 - (339.29 * progress) / 100,
                        }}
                    />
                </svg>
                <div className="counter-text">
                    <div className="CounterNumber">{count}</div>
                    <div className="CounterTitle">{title}</div>
                </div>
            </div>
        </div>
    );
};

export default HomeCounters;
