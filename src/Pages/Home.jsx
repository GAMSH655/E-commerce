import Flash from "../Components/Flash"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import Categ from "../Components/Categories"
import Jbl from "../Components/Jbl"
import Product from "../Components/Product"
import Newarrival from "../Components/Newarrival"
import Footer from "../Components/Footer"
function Home(){
    return(
         <>
           <Header/>
           <Hero />
           <Flash />
           <Categ />
           <Jbl />
           <Product />
           <Newarrival/>
           <Footer/>
         </>
    )
}export default Home