import React, { Component } from 'react'
import '../Form/Form.css'

const ClearModel = ({ close ,clearalllist }) => {

    return (
        <div className="model_overall" >
            <div className="models_body delete">
                <div className="model_head delete">
                    <h4> Delete Employee</h4>
                    <span onClick={close}>X</span>
                </div>
                <div className="model_content delete">
                    <h6>Are you sure you want to delete these Records?</h6>
                    <p>This action clear all datas</p>
                </div>
             
                <div className="model-foot">
                    <div className="content_btn">
                    <button onClick={close}  className="cancel">cancel</button>
                    <button onClick={clearalllist} className="delete">Delete</button>
                    </div>  
                        </div>
            </div>
        </div>
    )
}

export default ClearModel