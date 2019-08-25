import React,{Component} from 'react';
import MapboxGL from 'mapbox-gl';

export default class Map extends Component{
    constructor(props){
        super(props);
        
        this.state={
            api_url:"https://data.edmonton.ca/resource/87ck-293k.json",
            map:false,
            viewport:{              
                zoom:12,                
                center:[78.4867,17.3850]
            },
            data:null           
        };    
    }
    initilizeMap(){
        MapboxGL.accessToken=process.env.REACT_APP_MAPBOX_TOKEN;
        let map=new MapboxGL.Map({
            container:"map",
            style:'mapbox://styles/mapbox/light-v9',
            ...this.state.viewport
        });
        this.setState({map});
        
    }
    componentDidMount(){        
        const {data,api_url}=this.state;        
        if(!data){
           
            fetch(api_url,{method:'GET'})
            .then(response=>response.json())
            .then(response=>this.setState({data:response}));            
        }
    }
    render(){
        
        const{map,data}=this.state;
        if(data && !map) this.initilizeMap();
        
        return(
           <div style={{width:1100,height:600}} id="map" />
        );
    }
}