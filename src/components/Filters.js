import React from "react";
import{connect} from "react-redux"
import{filteredDataByDate, filteredDataByLaunchAndLandSuccess, filteredDataByLaunchSuccess} from "../Actions/actionCreaters"
// static Array of years
let arr=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2016,2017,2018,2019,2020]
class LeftAside extends React.Component{
    constructor(){
        super()
        this.state={
            year:2006,
            launch:false,
            land:false,
            
        }
    }
    
    
    handleClick=(yearSelected)=>{

       const{year,land,launch}=this.state;
       
       this.setState({
           year:yearSelected,
       },()=>{
          this.props.dispatch(filteredDataByDate(year,land,launch));
       })
       
        
    }
    handleLaunch=(bool)=>{
        const{year,land,launch}=this.state;
       
        this.setState({
            launch:bool,
        },()=>{
           this.props.dispatch(filteredDataByLaunchSuccess(launch));
        })

    }
    handleLand=(bool)=>{
        const{land,launch}=this.state;
       
        this.setState({
            land:bool,
        },()=>{
           this.props.dispatch(filteredDataByLaunchAndLandSuccess(land,launch));
        })
        
    }
    render(){
        const{year,launch,land}=this.state;
        console.log(year,launch,land);
        
        return(
            <>
            <div className="left-aside-div">
            <h2 className="heading">Filters <i class="fas fa-filter filter-icon"></i></h2>
            <h3 className="heading" style={{borderBottom:"2px solid gray"}}>Launch Year</h3>
            <div className="launch-year-div">
            {arr.map((item)=>{
                
                return(
                    <>
                    <div className="launch-year-btn">
                    {this.state.year===item?<button className="clicked" onClick={()=>this.handleClick(item)}>{item}</button>
                    :
                   <button className="button" onClick={()=>this.handleClick(item)}>{item}</button>
            }
                   </div>
                    </>
                )
            })}
          </div>
          
            <h3 className="heading" style={{borderBottom:"2px solid gray"}}>Successful Launch <i class="fas fa-paper-plane icon"></i></h3>
            <div className="successful-launch-div">
                   <div className="launch-year-btn">
                     <button className={ this.state.launch?"clicked  exception":"button exception"}onClick={()=>this.handleLaunch(true)}>True</button>
                   </div>
                   <div className="launch-year-btn">
                     <button className={ this.state.launch?"button exception":"clicked exception"} onClick={()=>this.handleLaunch(false)}>False</button>
                   </div>
                   
            </div>
            <h3 className="heading" style={{borderBottom:"2px solid gray"}}>Successful Landing <i class="fas fa-check icon"></i></h3>
            <div className="successful-launch-div">
            <div className="launch-year-btn">
                   <button className={ this.state.land?"clicked  exception":"button exception"} onClick={()=>this.handleLand(true)}>True</button>
                   </div>
                   <div className="launch-year-btn">
                   <button className={ this.state.land?"button  exception":"clicked exception"} onClick={()=>this.handleLand(false)}>False</button>
                   </div>
            </div>
            </div>
            </>
        )
    }
}

function mapStateToPtops(state){
    return{
      data:state.data,
    }
    
  }
  export default connect(mapStateToPtops)(LeftAside);