import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/News/All.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class All extends Component {
    state={
        index:0,
        data:[]
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
        return <div className="pageindex2" key={ind} onClick={this.selectedPage}>{ind+1}</div>
    })

    componentWillMount(){
        axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/articles?kind=news&page=1")
        .then(({data})=>{
            //console.log(data.data);
            this.setState(prevState=>({
                ...this.state,
                data:[...data.data]
            }),()=>{
                console.log(this.state.imageContent);
            })
        })

    }
  
    render() {
        //console.log(this.state.data);
        var displayAll=this.state.data.map((value,index)=>{
            console.log(this.state.index);
            return(
            <div key={index} className="singleItem2">
                <img src="http://142.93.38.157:5000/static/img/default.jpg" alt=""/>
                <div>
                    <span>{value.title}</span>
                    <span><i className="fa fa-calendar" aria-hidden="true"></i> {value.created_on}</span>
                </div>
            </div>
            )
        });

        if(this.state.data.length==0){
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
      <div className="alldisplay2">
        <div>{displayAll}</div> 
        <div className="pagination2">{this.pagination}</div> 
      </div>
    )
  }
}

export default All;