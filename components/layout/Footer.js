import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";


export default function Footer() {
    

    return (
        <>
             <div className="footer">
                 <ul className="footericons">
                     <li>
                        <a href="example.com">
                            <FaFacebook  /> 
                        </a>
                     </li>
                     <li>
                        <a href="example.com">
                            <FaInstagram /> 
                        </a>
                     </li>
                     <li>
                        <a href="example.com">
                            <FaGithub  /> 
                        </a>
                     </li>
                     <li>
                        <a href="example.com">
                            <AiOutlineMail  /> 
                        </a>
                     </li>
              
                </ul>
             </div>
        </>
    )
}
