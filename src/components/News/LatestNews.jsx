import React, { Component,PureComponent } from 'react'
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/News/LatestNews.css';


export default class LatestNews extends PureComponent {

    constructor(){
        super();
        this.state={
            imageContent:[{
                heading:'Sing Up and The School Musicals Company announce new partnership which lasted 3 days.',
                date:'5th October 2018',
                content:'Musicians typically invest around £80,000 in their training including tuition fees \
                    and student loans. Those in full-time employment earn around £21,000 after qualifying, but \
                    cuts have led to a lack of availability of full-time roles. 43% of musicians with five years \
                    or less in the industry have taken on unpaid work in the last 12 months to gain experience, \
                    compared to almost one in five (17%) of those with 11-20 years. Funding cuts mean orchestras \
                    present less of a viable career option for many professional musicians than they once did. In \
                    real terms, musicians’ earnings have not kept pace with inflation or the general standard of \
                    living. Would leave a huge cultural void in the UK….read more'
            },{
            heading:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis eius id animi iste eveniet et.',
            date:'5th October 2018',
            content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim consequuntur \
                aut blanditiis, animi tempora esse obcaecati. Dolor, esse. Voluptate velit est minima veritatis \
                nisi. Aliquid ipsam repellendus optio voluptas.'
        }]
        }
    }

  render() {
    var loadImage=this.state.imageContent.map((val,ind)=>{
        return(
            <div key={ind} className="content1">
                <span>
                    <span>
                        <span>{val.heading}</span>
                        <span>{val.date}</span>
                    </span>
                </span>
                <span>
                    <span>{val.heading}</span>
                    <span>{val.date}</span>
                    <p>{val.content}</p>
                </span>
            </div>
        )
    })

    return (
      <div class="latNews">
        <span>latest news</span>
        <Slider className="slider4">
            {loadImage}   
        </Slider>
      </div>
    )
  }
}

