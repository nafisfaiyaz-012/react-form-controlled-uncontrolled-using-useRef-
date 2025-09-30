import React from 'react';

const FormAction = () => {
    const handleSubmit = (formData) => {
        const nameFieldValue = formData.get('name');
        const emailFieldValue = formData.get('email');
        console.log('Name: ',nameFieldValue);
        console.log('Email: ',emailFieldValue);
    }
    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name'/>
                <br />
                <input type="email" name='email' placeholder='Your Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;