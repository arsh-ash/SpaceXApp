import { UPDATE_DATA } from "./actionTypes";

export function fetchData(){
    return(dispatch)=>{
        const url="https://api.spacexdata.com/v3/launches?limit=100"
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
            console.log("hiiiii",data);
            console.log("bye",data[0].launch_success);
            console.log("land",data[0].launch_landing);
            dispatch(updateData(data))
        })
    }


}
export function updateData(data){
    return{
        type:UPDATE_DATA,
        data,
    }
}
export function filteredDataByDate(year,land,launch){
    return(dispatch)=>{
        const url=`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch}&amp;land_success=${land}&amp;launch_year=${year}`
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
            console.log("hiiiii",data);
            console.log("bye",data[0].launch_success);
            console.log("land",data[0].launch_landing);
            dispatch(updateData(data))
        })
    }


}
export function filteredDataByLaunchSuccess(launch){
    return(dispatch)=>{
        const url=`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch}`
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
            console.log("hiiiii",data);
            console.log("bye",data[0].launch_success);
            console.log("land",data[0].launch_landing);
            dispatch(updateData(data))
        })
    }


}
export function filteredDataByLaunchAndLandSuccess(land,launch){
    return(dispatch)=>{
        const url=`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch}&amp;land_success=${land}`
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
            console.log("hiiiii",data);
            console.log("bye",data[0].launch_success);
            console.log("land",data[0].launch_landing);
            dispatch(updateData(data))
        })
    }


}
