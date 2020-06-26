import React, { Fragment } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

const Table = (props) => {
    const { list, handleDelete, handleEdit, handleView } = props;
    console.log(list)
    return (
        <Fragment>
            <table >
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Mobile No</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {list.length <= 0 ?
                        <tr className="empty_list">
                            <td className="no_data">no data</td>
                        </tr> :
                        list.map(listout => {
                            return (
                                <tr key={listout.id}>
                                    <td className="img_view">
                                        <img alt="robo_random" src={`https://robohash.org/${listout.id}?set=set4`}></img></td>
                                    <td>{listout.fullName}</td>
                                    <td>{listout.email}</td>
                                    <td>{listout.mobileno}</td>
                                    <td>{listout.companyname}</td>
                                    <td>{listout.location}</td>
                                    <td className="icons">
                                        <span className="view" onClick={() => { handleView(listout.id) }}>
                                            <Tippy content="view">
                                                <i className="fa fa-eye"></i>
                                            </Tippy>
                                        </span>
                                        <span className="edit" onClick={() => { handleEdit(listout.id) }}>
                                        <Tippy content="Edit">
                                            <i className="fa fa-edit"></i>
                                        </Tippy>
                                        </span>
                                        <span className="delete" onClick={() => { handleDelete(listout.id) }}>
                                        <Tippy content="delete">
                                            <i className="fa">&#xf014;</i>
                                        </Tippy>
                                        </span>
                                    </td>

                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </Fragment>
    )
}
export default Table