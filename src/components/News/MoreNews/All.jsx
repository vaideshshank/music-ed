import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/News/All.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class All extends Component {
    state={
        index:1,
        data:[]
    }

    paginate=()=>{
        var pageIndex=document.getElementsByClassName("pageindex2");
        for(var i=0;i<pageIndex.length; i++){
            pageIndex[i].style.backgroundColor="#FFFFFF";
            pageIndex[i].style.borderColor="#9b9b9b";
        }
        
        pageIndex[this.state.index-1].style.backgroundColor='#ffc201';
        pageIndex[this.state.index-1].style.borderColor='#ffc201';
    }

    getNews=()=>{
        axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/articles?kind=news&page="+this.state.index)
        .then(({data})=>{
            //console.log(data.data);
            this.setState(prevState=>({
                ...this.state,
                data:[...data.data]
            }),()=>{
                this.paginate();
            })
        })
    }

    selectedPage=(e)=>{
        e.preventDefault();
        var num=Number(e.target.innerHTML);
        this.setState((prevState)=>({
            index:num
        }),async ()=>{
            this.setState({
                ...this.state,
                data:[]
            })
            this.getNews();
        });
    }
    
    pagination=[...Array(2).keys()].map((val,ind)=>{
        return <div className="pageindex2" key={ind} onClick={this.selectedPage}>{ind+1}</div>
    })

    
    componentDidMount(){
        this.getNews();
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
                <>
                <div className="loader">
                <Loader 
                   type="Audio"
                   color="#e2bc15"
                   height="100"	
                   width="100"
                />   
                </div>
                </>
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