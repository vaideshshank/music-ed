import React, { Component,PureComponent } from 'react'
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import '../../stylesheets/News/LatestNews.css';


export default class LatestNews extends PureComponent {

    state={
        imageContent:[]
    }
    // constructor(){
    //     super();
    //     this.state={
    //         imageContent:[{
    //             heading:'Sing Up and The School Musicals Company announce new partnership which lasted 3 days.',
    //             date:'5th October 2018',
    //             content:'Musicians typically invest around £80,000 in their training including tuition fees \
    //                 and student loans. Those in full-time employment earn around £21,000 after qualifying, but \
    //                 cuts have led to a lack of availability of full-time roles. 43% of musicians with five years \
    //                 or less in the industry have taken on unpaid work in the last 12 months to gain experience, \
    //                 compared to almost one in five (17%) of those with 11-20 years. Funding cuts mean orchestras \
    //                 present less of a viable career option for many professional musicians than they once did. In \
    //                 real terms, musicians’ earnings have not kept pace with inflation or the general standard of \
    //                 living. Would leave a huge cultural void in the UK….read more'
    //         },{
    //         heading:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reiciendis eius id animi iste eveniet et.',
    //         date:'5th October 2018',
    //         content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim consequuntur \
    //             aut blanditiis, animi tempora esse obcaecati. Dolor, esse. Voluptate velit est minima veritatis \
    //             nisi. Aliquid ipsam repellendus optio voluptas.'
    //     }]
    //     }

    //     this.state={
    //         imageContent:[]
    //     }
        
    // }

    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/articles?kind=news")
        .then(({data})=>{
            //console.log(data.data);
            this.setState(prevState=>({
                ...this.state,
                imageContent:[...data.data]
            }),()=>{
                //console.log(this.state.imageContent);
            })
        })

    }

  render() {
    var loadImage=this.state.imageContent.map((val,ind)=>{
        return(

            <div key={ind} className="content1">
                <span>
                    <span>
                        <span>{val.title}</span>
                        <span>{val.created_on}</span>
                    </span>
                </span>
                <span>
                    <span>{val.title}</span>
                    <span>{val.created_on}</span>
                    <p>{val.description}</p>
                </span>
            </div>
        )
    })
//    console.log(loadImage);
    if(this.state.imageContent.length==0){
        return(
            <div className="loader">
            <Loader 
               type="Audio"
               color="#e2bc15"
               height="100"	
               width="100"
            />   
            </div>
           );
    }

    return (
      <div className="latNews">
        <span>latest news</span>
        <Slider className="slider4">
            {loadImage}   
        </Slider>
      </div>
    )
  }
}

