import React, { Component } from "react";
// import image1 from "../../images/imgnourriture/pizza.jpg"
// import image1 from "../../images/new-picture/tasse-cafe-coeur-dessine-dans-mousse.jpg"
// import image1 from "../../images/new-picture/vue-face-du-verre-cocktail-espace-copie-orange.jpg"
// import image1 from "../../images/new-picture/vue-laterale-doner-plaque-pommes-terre-frites-yaourt-au-concombre-frais-du-pain-table.jpg"
import image1 from "../../images/new-picture/vue-face-jus-orange-tranche-orange.jpg"
import Footercomponent from "../../components/Footer/footer";
import Navbarsearch from "../../components/Bardenavigation/Navbar";
class Formulaireinscription extends Component{
    constructor(props){
        super(props)
        this.state={
            nom:"",
            prenom:"",
            password:"",
            tel:"",
            boxcheck:false,

        }
        this.btnHandlerchange=this.btnHandlerchange.bind(this)
        this.btnsubit=this.btnsubit.bind(this)
    }

    btnHandlerchange=(e)=>{

        const name=e.target.name
        const type=e.target.type
        const value=type==="checkbox"?e.target.checked:e.target.value
        this.setState(
            {
                [name]:value
            }
        )
    }
    btnsubit=(e)=>{
        e.preventDefault()
        this.setState(
            {
             nom:"",
            prenom:"",
            password:"",
            tel:"",
            boxcheck:false,
            }
        )
        console.log(this.state);

    }
    render(){
        return(
            <div>
                <Navbarsearch/>
            <div className="flex">
                <div>
                    <img src={image1} className="h-[800px] w-[750px]" />
                </div>

                <form onSubmit={this.btnsubit} className="ml-8 mt-12 ">
                    <div>
                        <div>
                            <label htmlFor="nom" className="infoxform">nom</label>   
                        </div>
                            <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.btnHandlerchange} required className="border-2 border-blue-500 mb-2"/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="prenom" className="infoxform"> prenom</label>
                        </div>
                        <input type="text" id="prenom" name="prenom" value={this.state.prenom} onChange={this.btnHandlerchange} required className="border-2 border-blue-500 mb-2"/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password" className="infoxform">mot de passe</label>
                        </div>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.btnHandlerchange} required className="border-2 border-blue-500 mb-2"/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="tel" className="infoxform">numéro de téléphone</label>
                        </div>
                        <input type="text" id="tel" name="tel" value={this.state.tel} onChange={this.btnHandlerchange} required className="border-2 border-blue-500 mb-2"/>
                    </div>
                    <div>
                            <label htmlFor="boxcheck" className="mr-1">acceptez vous nos conditions ?</label>
                        <input type="checkbox" checked={this.state.boxcheck} id='boxcheck' name='boxcheck' onChange={this.btnHandlerchange} />
                        <div className="w-96">
                            {
                                this.state.boxcheck==true?<span >Acceptez vous de nous laisser l'accès à vos donées personelles ?.</span>:null
                            }
                        </div>
                    </div>
                    <div className=" flex justify-center w-[500px] mt-10">
                            <button className="bg-blue-600 text-neutral-50 p-2 text-lg rounded-s-lg rounded-e-lg">inscription</button>
                    </div>
                    <div className="w-52">
                        {JSON.stringify(this.state)}
                    </div>
                    
                </form>
            </div>
            <Footercomponent/>
            </div>

        )
    }
}
    
    
 

export default Formulaireinscription;