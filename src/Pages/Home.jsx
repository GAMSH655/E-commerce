import Flash from "../Components/Flash"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import Categ from "../Components/Categories"
import Jbl from "../Components/Jbl"

function Home(){
    return(
         <>
           <Header  />
           <Hero />
           <Flash />
           <Categ />
           <Jbl />
         </>
    )
}export default Home