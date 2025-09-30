import React from "react";
import useInputField from "../../Hooks/useInputField";

const HookForm = () => {
    const [name,handleName] = useInputField('');
    const [email,handleEmail] = useInputField('');
    const [password,handlePassword] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,'----' ,email,'---',password);
    }
    
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleName} defaultValue={name} placeholder="Your name" />
        <br />
        <input type="email" onChange={handleEmail} defaultValue={email} placeholder="Your email" />
        <br />
        <input type="password" placeholder="Password" 
        defaultValue={password}
        onChange={handlePassword}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
