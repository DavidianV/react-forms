import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
            <div>
                <label>
                Name
                </label>
                <input></input>
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
            <textarea></textarea>
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
