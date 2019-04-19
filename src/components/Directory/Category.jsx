import React,{Component} from 'react';
import '../../stylesheets/Directory/Category.css'

class Location extends Component{
    render(){
        var categories=this.props.data.map((val,ind)=>{
            return(
                <div class="singleCategory">
                    <div>{val.title}</div>
                    <div>
                        {
                            val.section.map((value,index)=>{
                                return(<div>
                                    <span>{value.part}</span>
                                    <span>{value.page}</span></div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
        return(
            <div class="category">
                <span>Browse by Category</span>
                <div>
                    {categories}
                </div>
            </div>
        )
    }
}

export default Location;