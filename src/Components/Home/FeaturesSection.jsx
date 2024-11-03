import React from "react";
import { faTags, faExchangeAlt, faBriefcase, faGift, faCalendarAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";
const FeaturesSection = ()=>{
    const features = [
        {
            id: 1,
            title: 'Offers',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faTags
        },
        {
            id: 2,
            title: 'Buy & Sell',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faExchangeAlt
        },
        {
            id: 3,
            title: 'Jobs',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faBriefcase
        },
        {
            id: 4,
            title: 'Rewards',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faGift
        },
        {
            id: 5,
            title: 'Events',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faCalendarAlt
        },
        {
            id: 6,
            title: 'News',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error perferendis deleniti, pariatur nobis labore, quas voluptates aperiam eligendi quasi eum ipsa animi obcaecati neque at dolorem distinctio in harum?',
            icon: faNewspaper
        }
    ];
    
    return(
        <section className="AllSection FeaturesSection" id="features">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos='fade-up'>
                        <h3 className="Center SectionTitle">Features</h3>
                    </div>
                    {features.map((feature)=>(
                        <div className="col-lg-4 col-md-6">
                            <FeatureCard
                                key={feature.id}
                                id={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FeaturesSection;