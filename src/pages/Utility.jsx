import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {FaUser, FaLock} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';

function Utitlity(){
    return <>
        <h1>Utility</h1>
        <Input iconLeft={<FaUser />} label="Name" placeholder="Enter Your Name"/>
        <Input iconLeft={<FaLock />} label="Password" placeholder="Enter Your Password" type="password"/>
        <Input iconLeft={<MdOutlineAlternateEmail />} label="Email" placeholder="Enter Your Email"/>
        <hr />
        <Button label="Button"/>
        <Button label="Button" variant="primary"/>
        <Button label="Button" variant="danger"/>
        <Button label="Button" variant="success"/>
        <Button label="Button" variant="warning"/>
        <hr />
        <Button label="Button" radius/>
        <Button label="Button" variant="primary" radius/>
        <Button label="Button" variant="danger" radius/>
        <Button label="Button" variant="success" radius/>
        <Button label="Button" variant="warning" radius/>
    </>
}

export default Utitlity