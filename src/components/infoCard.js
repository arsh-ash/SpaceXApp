import React from "react";
import { fetchData } from "../Actions/actionCreaters";
import{connect} from "react-redux";

class Card extends React.Component{
     
    componentDidMount(){
        this.props.dispatch(fetchData());
        }
    render(){
        const{spaceXData}=this.props.data;
         console.log("render");
         
        return(
            <>
            {spaceXData&&
            <>
            <div className="card-container">
                {spaceXData.map((item,index)=>{
                return(
                    <>
    <div className="boom" key={index}>
                  <div className="card-div">
                       <div className="img-div">
                          <img src={item.links.mission_patch_small} className="image"></img>
                      </div>
                     <div className="info">
                        <h3 className="title">{item.mission_name} #{item.flight_number}</h3>
                         {item.mission_id.length?<p className="font">Mission ids: {item.mission_id}</p>
                         :<p  className="font">Mission ids: Not Available</p>
                          }
                          <p className="font">Launch Year: {item.launch_year}</p>
                          {item.launch_success&&<p  className="font"> Successfull Launch: True</p>}
                       {!item.launch_success&&<p className="font"> successfull Launch:False</p>}
                  </div>
             </div>
       </div>
    </>
    )
   }) 
  }
</div>
</>}
 </> )
}
}
function mapStateToPtops(state){
    return{
      data:state.data,
    }
    
  }
  export default connect(mapStateToPtops)(Card);