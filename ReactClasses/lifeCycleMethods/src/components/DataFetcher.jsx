import React, {Component} from 'react';

class DataFetcher extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : null,
            loading : true
        }

        componentDidMount(){
            console.log("component mounted")
            this.fetchData()
        }

        componentDidUpdate(prevProps){
            if(prevProps.apiUrl !== this.props.apiUrl){
                console.log("component updated")
                this.fetchData()
            }
        }

        componentWillUnmount(){
            console.log("componenet will unmounted")
        }

        fetchData(){
            fetch(this.props.apiUrl)
            .then(response => response.json)
            .then(response => console.log(response))
            .catch(err => console.log("Error : ", err))
        }

    }
    render(){
        const {data, loading} = this.state
        return(
            <>
                {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
            </>
        )
    }
}

export default DataFetcher