import "../src/App.css"
// import Accueil from "./components/pages/Paccueil"
// import ServiceOnLine from "./components/pages/service"
// import ContactsFood from "./components/pages/Contacts"
// import HistoireGenesis from "./components/pages/History"
// import { BrowserRouter,Route,Routes } from "react-router-dom"
import Navbarsearch from "./components/Bardenavigation/Navbar";
// import image3 from "../src/images/imgLogo/chef-hat.jpg"
import Caroussels from "./components/Multicarroussel/MultCarroussel";
import TitleAnimation from "./containers/animationgsap/Animation1";
import Slidercoullissant from "./containers/Description/Descriptionsection2";
import Formulaireconnexion from "./containers/FormulairePage/Form2";
import { Form, Link } from "react-router-dom";
import Footercomponent from "./components/Footer/footer";
// import image2 from "../src/images/imgnourriture/poulet.jpg"
import '../src/App.css'
// import Formulaireinscription from "../src/containers/FormulairePage/Form.JSX";

function App() {
  return (
    <div >
          <Navbarsearch/>
          <header className="py-10 px-6"/*className="bg-center bg-cover h-96 w-full bg-no-repeat absolute" style={{background: `url(${image2})`}} */ >
            <TitleAnimation/>
          </header>
          <section>
            <div className="text-center">
                <h1 className=" text-6xl mt-4">Lorem ipsum dolor </h1>
                <p class="mx-14 mt-4 text-lg" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis commodi est blanditiis sequi beatae cumque odit mollitia quam qui eaque. Nostrum vel nobis.</p>
            </div>
            <div>
              <Caroussels/>
            </div>
          </section>
          <section className="mt-6 bg-black text-white">
            <div className="text-center px-6 py-8">
                <h1 className=" text-6xl">Lorem ipsum dolor</h1>
                <div className="flex mx-16 mt-20">
                  <span className="mr-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, fugiat molestiae </span>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, fugiat molestiae </span>
                </div>
            </div>
          </section>
         {/* <div>
          <Formulaireinscription/>
         </div> */}
         <Slidercoullissant/>

         <div className="mt-24 mx-20 px-20 text-center">
              <div>
                <h3 className="font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid possimus iusto, nesciunt autem, similique tempore suscipit nobis harum a recusandae, voluptatem esse eaque saepe alias minima laborum ut sunt dolore?</h3>
                <div className='my-10'>
                  <button className="border-black border-[1px] bg-black text-neutral-50 py-2 px-4 text-lg rounded-s-lg rounded-e-lg "> <Link to="/inscription">inscription</Link> </button>
                </div>
              </div>
         </div>
         <section className="bg-black p-10 mb-72">
              <div  className="text-center mx-14 my-14">
                <h1 className="text-white text-5xl capitalize">food genesis</h1>
                <div className="text-white my-16 ">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis nemo eveniet, laboriosam cum vitae facere nulla fugiat, repudiandae doloribus corrupti quasi quia est modi tempora ad aliquam labore at.</span>
                </div>
              </div>
              <div className="my-10">
                <Formulaireconnexion/>
              </div>
         </section>
         <Footercomponent/>
    </div>
  
  )
}

export default App;
