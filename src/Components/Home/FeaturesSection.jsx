import React from "react";
import { faTags, faExchangeAlt, faBriefcase, faGift, faCalendarAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";
const FeaturesSection = ()=>{
    const features = [
        {
            id: 1,
            title: 'Offers',
            description: 'All Classes offers continuous discounts and special deals from the brands it partners with. By subscribing, you gain access to a variety of exclusive offers and ongoing promotions.',
            icon: faTags
        },
        {
            id: 2,
            title: 'Buy & Sell',
            description: 'All Classes enables users to buy and sell items directly with each other, expanding your marketplace beyond just brand offerings.',
            icon: faExchangeAlt
        },
        {
            id: 3,
            title: 'Jobs',
            description: 'All Classes provides a platform where users can post job opportunities for fellow members, helping to connect talent within the community.',
            icon: faBriefcase
        },
        {
            id: 4,
            title: 'Rewards',
            description: 'Earn points by using All Classes features such as buying, selling, job postings, inviting friends, and receiving offers. These points can be redeemed for valuable rewards within your community.',
            icon: faGift
        },
        {
            id: 5,
            title: 'Events',
            description: 'Communities can create and share events, notifying members about upcoming activities and important gatherings.',
            icon: faCalendarAlt
        },
        {
            id: 6,
            title: 'News',
            description: 'Communities can post and share important news updates, ensuring members stay informed and connected with the latest developments.',
            icon: faNewspaper
        }
    ];
    
    return(
        <section className="AllSection FeaturesSection">
            
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