import { NextComponentType } from "next"
import { Mail } from "react-feather";
import { biodata } from "../basicData";

const EmailPopup: NextComponentType = () => {

    return(
        <a className='email-popup' href={`mailto:${biodata.email}`}>
            <Mail size={30}/>
        </a>
    )
}

export default EmailPopup;