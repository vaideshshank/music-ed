import React, { Component } from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Home/Magazine.css';
import Slider from 'react-slick';

export default class Magazine extends Component {
  constructor(props){
      super(props);
      this.props.settings.slidesToShow=3;
      this.props.settings.slidesToScroll=3;
  }

  render() {
      
    var headline=['Guest interview: Luke, London Music Fund Scholar of the Month',
                  'Will the Greater Bay Area initiative boost Hong Kong’s opera sector?',
                  'Prepare for fireworks – the Asian music scene is exploding'];
    var content=[
        'London Music Fund (LMF) is an independent charity with the Mayor of London as Patron. The unit’s vision is that every child who demonstrat…read more',
        'The following article was originally published on CHINA NOW, the British Council’s new platform for UK arts professionals, events, research…read more',
        'The Asian music scene is one to watch with digital revenue leaping over 20% in 2018 and British institutions and artists finding new wa…read more'
    ]
    
    var placement=[...Array(6).keys()].map((val)=>(
            <div key={val}>
                <img src={Placeholder} alt="Placeholder"/>
                <div>
                    <span>{headline[val%3]}</span>
                    <span>{content[val%3]}</span>
                </div>
            </div>
        )
    )

    return (
        <div className="magazineParent">
        <div>
            <span>music:ed magazine</span>
            <span>read more</span>
            <hr/>
        </div>
        <Slider {...this.props.settings} className="slider2">
                    {placement}
            
        </Slider>
        </div>
    )
  }
}
