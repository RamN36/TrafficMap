import React,{Component} from 'react';
import ReactMapGl from 'react-map-gl';
export default class Map extends Component{
    constructor(props){
        super(props);

        this.state={
            viewport:{
                width:1100,
                height:600,
                zoom:12,
                latitude:17.3850,
                longitude: 78.4867
            },
            token:''
        }
    
    }
    render(){
        return(
            <ReactMapGl
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport)=> this.setState({viewport})}
            />
        );
    }
}