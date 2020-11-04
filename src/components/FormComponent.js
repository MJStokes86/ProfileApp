import React from 'react'

const FormComponent = (props) => {
    return (
        <main>

            <form>
                <input type="text" value = {props.data.firstName}  name = "firstName" placeholder = "First Name" onChange = {props.handleChange} /> <br/>
                <input type="text" value = {props.data.lastName}  name = "lastName" placeholder = "Last Name" onChange = {props.handleChange} /> <br/>
                <input type="text" value = {props.data.age}  name = "age" placeholder = "Age" onChange = {props.handleChange} /> <br/>
                <input type="text" value = {props.data.location}  name = "location" placeholder = "Location" onChange = {props.handleChange} /> <br/>
                <br/>
                <label>
                    <input 
                        type = "radio"
                        value = "Male"
                        name = "gender"
                        checked = {props.data.gender === "Male"}
                        onChange = {props.handleChange}
                        />Male
                        <br/>
                </label>
                <label>
                    <input 
                        type = "radio"
                        value = "Female"
                        name = "gender"
                        checked = {props.data.gender === "Female"}
                        onChange = {props.handleChange}
                        />Female
                        <br/>
                </label>

                <br />
                <br />
                
                <button>Submit</button>
                <br />
                <br />
                <h1>Entered information: </h1>
                <h3>Your name: {props.data.firstName} {props.data.lastName} </h3>
                <h3>Your age: {props.data.age} </h3>
                <h3>Gender: {props.data.gender} </h3>
                <h3>Location: {props.data.location} </h3>
                       
            </form>
        </main>
    )
}


export default FormComponent