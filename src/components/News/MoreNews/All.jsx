import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/News/All.css'


class All extends Component {
    state={
        index:0
    }

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
    
    pagination=[...Array(Math.ceil(this.props.data.length)).keys()].map((val,ind)=>{
        return <div className="pageindex" key={ind} onClick={this.selectedPage}>{ind+1}</div>
    })
  
    render() {
        console.log(this.props.data);
        var displayAll=this.props.data.map((value,index)=>{
            console.log(this.state.index);
            return(
            <>
            <div key={index} className="singleItem1">
                <img src={Placeholder} alt=""/>
                <div>
                    <span>{value.heading}</span>
                    <span><i className="fa fa-calendar" aria-hidden="true"></i> {value.date}</span>
                </div>
            </div>
             
            </>)
        });
    return (
      <div className="alldisplay">
        <div>{displayAll}</div> 
        <div className="pagination">{this.pagination}</div> 
      </div>
    )
  }
}

export default All;