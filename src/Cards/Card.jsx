
import Date from "./Components/Date";
import Logo from "./Components/Logo";
import Heading from "./Components/Heading";
import SubHeading from "./Components/SubHeading";
import Device from "./Components/Devices";

const Card = ({date,url,title1,title2,title3,title4})=>{
    return (
       <div>
           <div className="logo-box">
             <Date date={date}/>
             <Logo url={url}/>
           </div>
          <Heading title={title1}/>
          <SubHeading title={title2}/>
          <SubHeading title={title3}/>
          <div className="logo-box">
              <Device title={title4}/>
              <div className="logo1"><i class="fas fa-arrow-right"></i></div>
          </div>
       </div>
    );
}

export default Card;