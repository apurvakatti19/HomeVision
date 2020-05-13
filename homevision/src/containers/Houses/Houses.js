import React, { Component } from 'react';
import './Houses.css';
import Aux from '../hoc/Aux';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import Card from "react-bootstrap/Card";

class Houses extends Component{
    constructor (props)
    {
        super(props);
      
        this.state = {
            hasMore:true,
            houses: [],
            per:10,
            pageNumber:1
          };

          this.loadHouses = this.loadHouses.bind(this);
        }
    
    loadHouses() 
    {
        console.log(this.state)

        axios.get
        (`http://app-homevision-staging.herokuapp.com/api_project/houses?page=${this.state.pageNumber}&per_page=${this.state.per}`)
        .then((response) =>
        {
            console.log(response.data.houses);
        
          this.setState(prevState => ({
              houses:[...prevState.houses, ...response.data.houses],
                pageNumber:prevState.pageNumber + 1}))

        
        }
        )
       .catch((error)=>
       {
        if (error.response) 
        {
            //console.log(error)
            if(error.response.status === 503)
            {
                setTimeout(() => {
                    this.loadHouses()}, 1500);

            }
    
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } 
        else if (error.request) 
        {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        }
         else 
         {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}

    componentDidMount() 
    {
        this.loadHouses();
    }

    render() 
    {
        console.log(this.state.houses.length)
        return (

            
            <div>
                <InfiniteScroll
                dataLength={this.state.houses.length-2} 
                next={this.loadHouses}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>Yay! You have seen it all</b>
                    </p>}
                    >

            {this.state.houses.map((ctrl,key) => (

            <Card style={{width: "20rem",margin: "16px auto",border:"2px solid red"}}  key={ctrl.id}>
                <Card.Img style={{width: "100%"}} variant="top" top src={ctrl.photoURL} alt="Card image" />
                <Card.Body>
                    <Card.Title style={{color:'blue'}}>Address:{ctrl.address}</Card.Title>
                    <Card.Text style={{color:'blue'}}>Price:{ctrl.price}</Card.Text>
                    <Card.Text style={{color:'blue'}}>Owner:{ctrl.homeowner}</Card.Text>
                    </Card.Body>
                    </Card>
            ))}
            
    </InfiniteScroll>
        </div>
                
            
        );
    }
}


export default Houses;