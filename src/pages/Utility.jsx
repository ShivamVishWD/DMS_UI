import Input from "../components/Input/Input";
import {FaUser, FaLock} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';

function Utitlity(){
    return <>
        <h1>Utility</h1>
        <Input iconLeft={<FaUser />} label="Name" placeholder="Enter Your Name"/>
        <Input iconLeft={<FaLock />} label="Password" placeholder="Enter Your Password" type="password"/>
        <Input iconLeft={<MdOutlineAlternateEmail />} label="Email" placeholder="Enter Your Email"/>
    </>
}

export default Utitlity