import React, { Component,PureComponent } from 'react'
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/News/LatestNews.css'


export default class LatestNews extends PureComponent {

    constructor(){
        super();
        this.state={
            imageContent:[{
                heading:'Sing Up and The School Musicals Company announce new partnership which lasted 3 days.',
                date:'5th October 2018',
                content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim consequuntur aut blanditiis, animi tempora esse obcaecati. Dolor, esse. Voluptate velit est minima veritatis nisi. Aliquid ipsam repellendus optio voluptas.'
            },{
            heading:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis eius id animi iste eveniet et.',
            date:'5th October 2018',
            content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim consequuntur aut blanditiis, animi tempora esse obcaecati. Dolor, esse. Voluptate velit est minima veritatis nisi. Aliquid ipsam repellendus optio voluptas.'
        }]
        }
    }

  render() {
    var loadImage=this.state.imageContent.map((val,ind)=>{
        return(
            <div key={ind} className="content1">
                <span>
                    <span>{val.heading}</span>
                    <span>{val.date}</span>
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

