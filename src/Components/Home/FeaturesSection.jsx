import React from "react";
import { faTags, faExchangeAlt, faBriefcase, faGift, faCalendarAlt, faNewspaper, faUsers, faHandHoldingHeart, faShoppingCart, faComments } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
const FeaturesSection = ()=>{
    const features = [
        {
            id: 1,
            title: 'Offers',
            description: 'The community app offers continuous discounts and special deals from the brands it partners with. By subscribing, you gain access to a variety of exclusive offers and ongoing promotions.',
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
        },
        {
            id:7,
            title:'Members directory',
            description:'The member directory feature provides a database of all community members, allowing you to easily search and connect with others based on location, interests, and more. It’s a great way to network and engage with your community.',
            icon:faUsers
        },
        {
            id:8,
            title:'Charity',
            description:'The charity feature provides information about local charity organizations, making it easy for members to discover, participate in, and contact causes they care about. It’s a great way to give back and get involved with your community.',
            icon:faHandHoldingHeart
        },
        {
            id:9,
            title:'Facebook group',
            description:'You can connect your facebook groups to the app, allowing seamless integration and easy access to your community’s discussions, updates, and events all in one place, stay connected and engaged without switching between platforms!',
            icon:faSquareFacebook
        },
        {
            id:10,
            title:'Shopping',
            description:'The shopping section lets members browse and shop from local online stores, creating a convenient and trusted marketplace within the community.',
            icon:faShoppingCart
        },
        {
            id:11,
            title:'Chat rooms',
            description:'The chat rooms section lets members share their thoughts, hobbies, and connect with others in real-time, fostering a fun and engaging community space.',
            icon:faComments
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