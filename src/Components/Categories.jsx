import "./Categ.css"
function Categ(){
    const  catItem = [
         {

         }
    ]
    return(
         <div>
            <h3 className="catText">Categories</h3>
            <div className="browseCont">
            <h3 className="browse">
                 browsse by Categories
                 </h3>
                 <div className="arrowContainer">
                    <button className="arrow"><i className="fa-solid fa-arrow-left "></i></button>
                    <button className="arrow"><i className="fa-solid fa-arrow-right "></i></button>
                 </div>
            </div>
         </div>
    )
}export default Categ