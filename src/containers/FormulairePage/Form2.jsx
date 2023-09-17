import React, { Component} from "react";
// import { json } from "react-router-dom";



class Formulaireconnexion extends Component{
    
    constructor(props){
        super(props)
        this.state={
            email:""
        }
        this.emailHandlerchange=this.emailHandlerchange.bind(this)
        this.handlersubmit=this.handlersubmit.bind(this)
    }

    emailHandlerchange=(e)=>{
        this.setState({
            email : e.target.value
        }
        )
    }

    handlersubmit=(e)=>{
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handlersubmit} class="text-center">
                <label htmlFor="email"></label>
                <input type="email" id="email" value={this.state.email}  onChange={this.emailHandlerchange}  name="email" className="rounded-s-full rounded-e-full w-80 py-1 px-4 " />
                <button className="text-white rounded-full bg-gray-600 absolute right-[498px] py-1 px-5 text-base">subscribe</button>

                    {/* <div className="w-52 text-white">
                         {JSON.stringify(this.state)}
                    </div> */}
                    
            </form>
        )
    }
    
} 

export default Formulaireconnexion;