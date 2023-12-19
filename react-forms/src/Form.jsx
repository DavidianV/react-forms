import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [bio, setBio] = useState('')

    const validateInput = () => {
        //Name Validation
        if (name === '') alert('Name is required');

        //Email Validation
        const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  output.textContent = ok
    ? `Thanks, your phone number is ${ok[0]}`
    : `${phoneInput.value} isn't a phone number with area code!`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);



        //Bio Validation
        if (bio.length > 280) alert('Bio must be 280 characters or less');


    }





    return (
        <div>
            <form onSubmit={validateInput}>
                <div>
                    <label>
                        Name
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}></input>
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input></input>
                </div>
                <div>
                    <label>
                        Phone Number
                    </label>
                    <input></input>
                </div>
                <div>
                    <label>
                        Phone Type
                    </label>
                    <select>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label>
                        Staff
                    </label>
                    <input type='radio' name='staff'></input>
                    <input type='radio' name='staff'></input>

                </div>
                <div>
                    <label>
                        Bio
                    </label>
                    <textarea onChange={(e) => setBio(e.target.value)}
                        value={bio}></textarea>
                </div>

                <label>
                    Sign up for email notifications
                </label>
                <input type='checkbox'></input>
                <div>
                    <button>Submit</button>
                </div>


            </form>

        </div>
    );
}

export default Form;
