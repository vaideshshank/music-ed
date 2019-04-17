import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/Events/Master.css'

class All extends Component {
    state={
        index:0
    }

    // displayAll=this.props.data.slice(this.state.index).map((value,index)=>{
    //     console.log(this.state.index);
    //     return(
    //     <>
    //     <div key={index} className="singleItem1">
    //         <img src={Placeholder} alt=""/>
    //         <div>
    //             <span>{value.heading}</span>
    //             <span><i className="fa fa-map-marker" aria-hidden="true"></i> {value.place}</span>
    //             <span><i className="fa fa-calender" aria-hidden="true"></i> {value.date}</span>
    //             <span>{value.content}</span>
    //             <span><i className="fa fa-heart-o" aria-hidden="true"></i> Add to favourites</span>
    //         </div>
    //       </div>
    //       <hr/>
    //     </>)
    // });


    selectedPage=(e)=>{
        e.preventDefault();
        
        e.target.style.backgroundColor='#ffc201';
        e.target.style.borderColor='#ffc201';
        var num=Number(e.target.innerHTML);
        this.setState((prevState)=>({
            index:(num-1)*4
        }),()=>{
            console.log("State updated to "+this.state.index);
        });

    }
    
    pagination=[...Array(Math.ceil(this.props.data.length/4)).keys()].map((val,ind)=>{
      return <div className="pageindex" key={ind} onClick={this.selectedPage}>{ind+1}</div>
    })
  
    render() {
        var displayAll=this.props.data.slice(this.state.index,this.state.index+4).map((value,index)=>{
            console.log(this.state.index);
            return(
            <>
            <div key={index} className="singleItem1">
                <img src={Placeholder} alt=""/>
                <div>
                    <span>{value.heading}</span>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i> {value.place}</span>
                    <span><i className="fa fa-calender" aria-hidden="true"></i> {value.date}</span>
                    <span>{value.content}</span>
                    <span><i className="fa fa-heart-o" aria-hidden="true"></i> Add to favourites</span>
                </div>
              </div>
              <hr/>
            </>)
        });

      return (
      <div className="alldisplay">
        {displayAll} 
        <div className="pagination">{this.pagination}</div> 
      </div>
    )
  }
}

export default All;