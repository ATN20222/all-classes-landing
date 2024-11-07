import React from "react";
import FAQItem from "./FAQItem";
const FAQ = ()=>{
    const faq = [
        {
            id:1,
            title:'How to Join your community ?',
            describtion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nihil velit odit exercitationem voluptas labore recusandae quo veritatis hic in praesentium, vitae at porro rerum corporis, inventore molestiae molestias eos.',
        },
        {
            id:2,
            title:'How get offer ?',
            describtion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nihil velit odit exercitationem voluptas labore recusandae quo veritatis hic in praesentium, vitae at porro rerum corporis, inventore molestiae molestias eos.',
        }
    ]
    return(
        
        <section className="AllSection MissionSection mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos='fade-up'>
                        <h3 className="Center SectionTitle">FAQ</h3>
                    </div>
                    {faq.map((fq)=>(
                        <FAQItem
                            key={fq.id}
                            id={fq.id}
                            title={fq.title}
                            describtion={fq.describtion}
                        />
                    ))}




                </div>
            </div>
        </section>
    )
}
export default FAQ;