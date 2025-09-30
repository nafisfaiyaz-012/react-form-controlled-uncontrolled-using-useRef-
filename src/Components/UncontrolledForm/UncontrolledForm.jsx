import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log(nameValue,'----',emailValue,'----',passwordValue);
    // console.log(nameRef);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="name" />
        <br />
        <input ref={emailRef} type="email" placeholder="email" />
        <br />
        <input ref={passwordRef} type="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
