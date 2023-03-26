import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MDBDataTable } from 'mdbreact'
import { useAlert } from 'react-alert'
import { newTshirt, getAdminProducts, clearErrors, deletetshirt } from '../../actions/tshirtAction'
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import { DELETE_TSHIRT_RESET, NEW_TSHIRT_RESET } from '../../constants/tshirtConstants'

const TShirt = ({ history }) => {
    const [addEditModalVisibilty, setAddEditModalVisibilty] = useState(false);


    const [name, setName] = useState('');
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [fabric, setFabric] = useState('')
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);


    const categories = [
        'select size',
        'S',
        'M',
        'L',
        'XL',
        'XXl',
        'S M',
        'S M L',
        'S M L XL',
        'S M L XL XXL'

    ]



    const alert = useAlert();
    const dispatch = useDispatch();


    const { loading, error, success } = useSelector(state => state.newTshirt);
    const {error:deleteError,isDeleted} = useSelector(state =>state.deletetshirt)
 


    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if (success) {

            alert.success('product created successfuly')
            dispatch({ type: NEW_TSHIRT_RESET })
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
           alert.success("Product Deleted Successfully!!!!!");
           history.push('/jacket');
           dispatch({type: DELETE_TSHIRT_RESET })
           
        }

    }, [dispatch, alert, error, success, history,deleteError,isDeleted])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('size', size);
        formData.set('price', price);
        formData.set('fabric', fabric);

        images.forEach(image => {
            formData.append('images', image)
        })


        dispatch(newTshirt(formData))


    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([]);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }

            }
            reader.readAsDataURL(file)
        })

    }



    const { products } = useSelector(state => state.tshirt);



    useEffect(() => {
        dispatch(getAdminProducts());
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, history])

    const setProducts = () => {
        const data = {
            columns: [

                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions'

                }

            ],
            rows: []

        }
        products.forEach(product => {
            data.rows.push({

                name: product.name,


                actions: <Fragment>
                    <Link to={`/admin/product/${product._id}`} >
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() =>deleteProductHandler(product._id)}>

                        <i className="fa fa-trash" ></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }



    const deleteProductHandler =(id) =>{
        dispatch(deletetshirt(id))
    }
   

    return (
        <div>
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">Admin Panel</span>
                </a>
                <ul class="side-menu top">
                    <Link to={'/main'}>
                        <li >
                            <a href="#">
                                <i class='bx bxs-dashboard' ></i>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/Shirt'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-shopping-bag-alt' ></i>
                                <span class="text">Shirt</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/tshirt'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-doughnut-chart' ></i>
                                <span class="text">T-Shirt</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/jeans'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-message-dots' ></i>
                                <span class="text">Jeans</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/sports'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Sports</span>
                            </a>
                        </li>
                    </Link>

                    <Link to={'/kurtas'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Kurtas</span>
                            </a>
                        </li>
                    </Link>
                    <Link to={'/jacket'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Jackets</span>
                            </a>
                        </li>
                    </Link>

                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#">
                            <i class='bx bxs-cog' ></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section id="content">
                <nav>

                </nav>

                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>T-Shirt</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">

                        <Button type="primary" onClick={() => setAddEditModalVisibilty(true)}>
                            Add Item
                        </Button>

                    </div>
                    <br></br>
                    {loading ? <h1>loading...</h1> :
                        <MDBDataTable
                            data={setProducts()}
                            className="px-3"
                            bordered
                            striped
                            hover

                        />
                    }


                    {addEditModalVisibilty && (
                        <Modal
                            onCancel={() => {
                                setAddEditModalVisibilty(false)
                            }}
                            visible={addEditModalVisibilty}

                            footer={false}
                        >
                            <div className="wrapper my-5">
                                <form className="logincontainer"
                                    onSubmit={submitHandler} encType='multipart/form-data'>
                                    <h1 className="mb-4">New Product</h1>

                                    <div className="form-group">
                                        <label htmlFor="psw-repeat"><b>Name</b></label>
                                        <input
                                            type="text"
                                            id="name_field"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="psw-repeat"><b>Price</b></label>
                                        <input
                                            type="text"
                                            id="name_field"
                                            className="form-control"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="psw-repeat"><b>Fabric</b></label>
                                        <input
                                            type="text"
                                            id="name_field"
                                            className="form-control"
                                            value={fabric}
                                            onChange={(e) => setFabric(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="psw-repeat"><b>Size</b></label>
                                        <select className="form-control" id="category_field"
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                        >
                                            {categories.map(size => (

                                                <option key={size} value={size}>{size}</option>
                                            ))}


                                        </select>
                                    </div>




                                    <div className='form-group'>
                                        <label htmlFor="psw-repeat"><b>Images</b></label>

                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                name='product_images'
                                                className='custom-file-input'
                                                id='customFile'
                                                onChange={onChange}
                                                multiple
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                Choose Images
                                            </label>
                                        </div>
                                        {imagesPreview.map(img => (
                                            <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                        ))}
                                    </div>


                                    <button
                                        id="login_button"
                                        type="submit"
                                        className="btnsect success"
                                        disabled={loading ? true : false}
                                    >
                                        CREATE
                                    </button>

                                </form>
                            </div>
                        </Modal>
                    )}
                </main>

            </section>



        </div>
    )
}

export default TShirt