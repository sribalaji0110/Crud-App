import React, { Fragment } from 'react'

const ViewModel = ({ viewList, close }) => {
    return (
        <div className="model_overall" >
            <div className="models_body">
                <div className="model_head delete">
                    <h4> Profile View</h4>
                    <span onClick={close}>X</span>
                </div>
                <div className="model_content delete">
                    {viewList.map(viewer => {
                        return <Fragment key={viewer.id}>
                            <ul className="view_listed">
                                <li>
                                    <span>Company Name</span>
                                    <a>{viewer.companyname}</a>
                                </li>
                                <li>
                                    <span>email </span>
                                    <a>{viewer.email}</a>
                                </li>
                                <li>
                                    <span>id </span>
                                    <a>{viewer.id}</a>
                                </li>
                                <li>
                                    <span>location </span>
                                    <a>{viewer.location}</a>
                                </li>
                                <li>
                                    <span>mobileno </span>
                                    <a>{viewer.mobileno}</a>
                                </li>
                            </ul>
                        </Fragment>
                    })}
                </div>

                <div className="model-foot">
                    <div className="content_btn centers">
                        <button className="centers" onClick={close}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewModel