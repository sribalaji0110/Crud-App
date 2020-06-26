import React from 'react'
import '../Form/Form.css'

const Model = ({ errors, handlechange, handlesubmit, fullName, email, mobileno, closeModel, editView }) => {

    return (
        <div className="model_overall" >
            <div className="models_body">
                <div className="model_head">
                    <h5>Add Employee</h5>
                    <span onClick={closeModel}>X</span>
                </div>
                <div className="model_content">
                    <form onSubmit={handlesubmit} className="model_form">
                       
                        <label>Name</label>
                        <input type="text" name="fullName" onChange={handlechange}
                            value={fullName} />
                        <p>{errors.fullName}</p>
                        <div className="errorMsg"></div>
                        <label>Email ID:</label>
                        <input type="text" name="email" onChange={handlechange}
                            value={email} />
                        <p>{errors.email}</p>
                        <label>Mobile No:</label>
                        <input type="number" name="mobileno" onChange={handlechange}
                            value={mobileno} />
                        <p>{errors.mobileno}</p>
                        <label>Company Name</label>
                        <input type="text" name="companyname" onChange={handlechange} />
                        <p>{errors.password}</p>
                        <label>location</label>
                        <input type="text" name="location" onChange={handlechange} />
                        <p>{errors.location}</p>
                    </form>
                </div>
                <div className="model-foot">
                    <div className="content_btn">
                    <button onClick={closeModel} className="cancel">cancel</button>
                            {
                                errors.fullName && errors.email && errors.mobileno && errors.location ?
                                    <button type="button" disabled>Adds</button>
                                    :
                                    <button type="submit" className="button_foot"
                                     onClick={handlesubmit}
                                    >{editView ? "save" : "add"}</button>
                            }
                    </div>
              
                          
                        </div>
            </div>
        </div>
    )
}

export default Model