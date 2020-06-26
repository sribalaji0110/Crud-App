import React, { Component } from 'react';
import '../../styles.css'
import Model from '../Model/Model';
import { Link } from 'react-router-dom';
import Table from '../Table/Table';
import uuid from 'react-uuid'
import ClearModel from '../Model/ClearModel';
import ViewModel from '../Model/ViewModel';


class StoreList extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            email: '',
            mobileno: '',
            companyname: '',
            location: '',
            editView: false,
            openModel: false,
            clearModel: false,
            viewModel:false,
            listArr: [],
            searchfield:'',
            viewList:[],
            errors: {
                fullName: '',
                email: '',
                mobileno: '',
                companyname: '',
                location: '',
            }
        }
    }
    modelHandler = () => {
        this.setState({
            openModel: !this.state.openModel,
            fullName: "",
            email: '',
            mobileno: '',
            companyname: '',
            location: '',
            errors: {
                fullName: '',
                email: '',
                mobileno: '',
                companyname: '',
                location: '',
            }
        })
    }
    handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let errors = this.state.errors;
        switch (name) {
            case 'fullName':
                errors.fullName =
                    (value.length < 5)
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case ('email'):
                errors.email =
                    value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                        ? ''
                        : 'invalid email format';
                break;
            case ('mobileno'):
                errors.mobileno =
                    (value.length < 10 || value.length >= 11)
                        ? 'invalid mobile number'
                        : '';
                break;
            case ('companyname'):
                errors.companyname =
                    (value.length <= 3)
                        ? 'company name not match'
                        : '';
                break;
            case ('location'):
                errors.location =
                    (value.length <= 2)
                        ? 'location not match'
                        : '';
                break;
            default:
                break;
        }

        this.setState({
            [e.target.name]: e.target.value,
            errors,
        });
    }
    handlesubmit = (e) => {
        e.preventDefault();
        const newvalue = {
            id: uuid(),
            fullName: this.state.fullName,
            email: this.state.email,
            mobileno: this.state.mobileno,
            companyname: this.state.companyname,
            location: this.state.location,
        }
        const updatedItems = [...this.state.listArr, newvalue]

        this.setState({
            listArr: updatedItems
        }, () => {
            let errors = this.state.errors;
            if(this.state.fullName === '' && this.state.email === '' && this.state.mobileno === '' 
                && this.state.companyname === '' && this.state.location === '') {
                errors.fullName = 'Full Name must be 5 characters long!';
             errors.email = 'invalid email format';
             errors.mobileno = 'invalid mobile number';
             errors.companyname ='company name not match'
             errors.location ='location not match'
                this.setState({
                    errors
                })
            }else{
              this.setState({
                  openModel:false
              })
            }
        })
    }
    componentDidMount=()=>{
        const newvalue = {
            id: uuid(),
            fullName: this.state.fullName,
            email: this.state.email,
            mobileno: this.state.mobileno,
            companyname: this.state.companyname,
            location: this.state.location,
        }
        const updatedItems = [...this.state.listArr]
        this.setState({
            listArr: updatedItems,
        })
    }
    handleDelete = (id) => {
        const filterItems = this.state.listArr.filter(item => {
            return item.id !== id
        })
        this.setState({
            listArr: filterItems
        })
    }
    handleEdit = (id) => {
        this.handleDelete(id);
        const selectitem = this.state.listArr.find(finder => {
            return finder.id === id
        })
        this.setState({
            fullName: selectitem.fullName,
            email: selectitem.email,
            mobileno: selectitem.mobileno,
            openModel: true,
            editView: true
        })
        console.log(selectitem)
    }
    handleView = (id) => {
        const viewItems = this.state.listArr.find(finder => {
            return finder.id === id
        })
        const storedArr = [...this.state.viewList,viewItems]
        this.setState({
            viewModel:!this.state.viewModel,
            viewList:storedArr
        })
    }
    clearModelsfn = () => {
        this.setState({
            clearModel: !this.state.clearModel,

        })
    }
    clearalllist = () => {
        this.setState({
            listArr: [],
            clearModel: false
        })
    }
    render() {
        const {listArr,searchfield}=this.state;

        const filterArr=listArr.filter(fill=>
            fill.fullName.toLowerCase().includes(searchfield.toLowerCase())
        )
     
        return (
            <div className="list">
                <div className="container">
                    <div className="list_overall">
                        <div className="list_head">
                            <h4>Manage Employees</h4>
                            <div className="list_btn">
                               <span className="searched">
                                <input type="search" placeholder="search"
                                 onChange={(e)=>{this.setState({searchfield:e.target.value})}}></input>
                                 </span>
                                <span className="btn_views">
                                <button onClick={this.clearModelsfn} className="clear">
                                Clear </button>
                                 <button onClick={this.modelHandler}>Add New Employee </button>
                                </span>
                                {this.state.clearModel ?
                                     <ClearModel clearalllist={this.clearalllist} 
                                     close={this.clearModelsfn}></ClearModel>
                                     :
                                     null
                                }
                             
                                {this.state.openModel ?
                                    <Model closeModel={this.modelHandler}
                                        fullName={this.state.fullName}
                                        email={this.state.email}
                                        mobileno={this.state.mobileno}
                                        companyname={this.state.mobileno}
                                        location={this.state.location}
                                        editView={this.state.editView}
                                        errors={this.state.errors}
                                        handlechange={this.handlechange}
                                        handlesubmit={this.handlesubmit}
                                    ></Model>
                                    : null}
                                    {this.state.viewModel?
                                    <ViewModel viewList={this.state.viewList}
                                    close={this.handleView}
                                    ></ViewModel>
                                :
                                null}
                            </div>
                        </div>
                        <div className="list_table">
                            <Table list={filterArr}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}
                                handleView={this.handleView}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StoreList