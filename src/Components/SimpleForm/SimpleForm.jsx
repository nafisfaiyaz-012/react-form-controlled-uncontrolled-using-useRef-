import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('triggered');
        const nameFieldValue = event.target.name.value;
        const emailFieldValue = event.target.email.value;
        console.log("Name:",nameFieldValue);
        console.log("Email:",emailFieldValue);
        
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' name='name' required/>
                <br />
                <input type="email" placeholder='Your Email' name='email' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;