import "./Flash.css"
function Flash(){
     return (
              <div>
                 <p className="day">today's</p>
                 <div className="flashcontainer">
                 <p className="flash">flash sales</p>
                 <div className="timeContainer">
                 <p className="time">days <span className="span">03 :</span></p>
                 <p className="time">hours <span className="span">23 :</span></p>
                 <p className="time">minutes<span className="span">19 :</span></p>
                 <p className="time">seconds <span className="span">56 </span></p>
                 </div>
                 </div>
              </div>
     )
}export default Flash