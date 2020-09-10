import React, { Component } from 'react'
import httpClient from '../../../util/httpClient';
import notify from '../../../util/notificiation';
import { Loader } from '../../common/loader/loader.component';
import Util from './../../../util';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 

 

class ViewProduct extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            products: []
        };
    }

    componentDidMount() {
        this.setState({
            isLoading:true
        })
        httpClient.GET('/prouduct')
    }

    /**
     * remove item from products
     * @param {string} id 
     * @param {number} index 
     */
    remove(id, index) {
        //eslint-disable-next-line no-restricted-globals
        let confirmation = confirm('Are you sure to remove?');
        if (confirmation) {
            this.props.remove(id);
        }
    }

    render() {
        console.log('this.props.products .length >>', this.props.products.length);
        let mainContent = this.props.isLoading
            ? <Loader />
            : <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Images</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <Link to={`/product_details/${item._id}`}> {item.name}</Link>
                                </td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{Util.formatDate(item.createdAt)}</td>
                                <td>
                                    <img src={`${IMG_URL}/${item.images[0]}`} alt="productImg.jpg" width="200px" />
                                </td>
                                <td>
                                    <button className="btn btn-info">
                                        <Link to={`edit_product/${item._id}`}>edit</Link>
                                    </button>
                                    <button onClick={() => this.remove(item._id, i)} className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </>
        return (
            <>
                <h2>View Products</h2>
                {
                    this.props.incomingData && (
                        <button onClick={this.props.searchAgain} className="btn btn-success">Search Again</button>
                    )
                }
                {mainContent}
            </>
        )
    }
}


export default ViewProduct;
