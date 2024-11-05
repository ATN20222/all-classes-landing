import React, { useState } from "react";
import MissionImage from '../../Assets/Images/Mission.svg';
import PlayImage from '../../Assets/Images/Video.svg'
const TutorialsSection = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    const tutorials = [
        {
            id: 1,
            src: 'blob:https://www.youtube.com/81f88e19-9bbd-43d5-8b2c-6cd7eba72b51',
            title: 'How To Login',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iusto deserunt sed, ipsum harum consequuntur natus, error nesciunt dicta eveniet totam cumque architecto sint maxime! Impedit voluptatum incidunt aspernatur officiis!'
        },
        {
            id: 2,
            src: 'https://www.youtube.com/81f88e19-9bbd-43d5-8b2c-6cd7eba72b51',
            title: 'How To Register',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iusto deserunt sed, ipsum harum consequuntur natus, error nesciunt dicta eveniet totam cumque architecto sint maxime! Impedit voluptatum incidunt aspernatur officiis!'
        }
    ];

    const openOverlay = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedVideo('');
    };

    return (
        <section className="AllSection MissionSection mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos='fade-up'>
                        <h3 className="Center SectionTitle">Tutorials</h3>
                    </div>
                    {tutorials.map((tot) => (
                        <div key={tot.id} className="TutorialCard col-lg-3">
                            <div className="TotCard  ">
                                <div className="video" onClick={() => openOverlay(tot.src)}>
                                    <img src={PlayImage} alt="video thumbnail" />
                                </div>
                                <div className="title text-start ">
                                    <h3 className="">{tot.title}</h3>
                                </div>
                                
                                <div className="description text-start">
                                    <span>{tot.description.substring(150)+'...'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay with Video Player */}
            {isOverlayVisible && (
                <div className="video-overlay">
                    <div className="overlay-content">
                        <button onClick={closeOverlay} className="close-button">X</button>
                        {/* <video controls src={selectedVideo} autoPlay className="video-player"> */}
                        <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${'Ka482f3sw5E'}`}
                title="video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
                            {/* Your browser does not support the video tag. */}
                        {/* </video> */}
                    </div>
                </div>
            )}

        </section>
    );
};

export default TutorialsSection;
