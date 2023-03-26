import React,{Fragment,useEffect,useState} from 'react'
import {useAlert} from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'

import { newShirt,clearErrors } from '../actions/shirtAction'
import { NEW_SHIRT_RESET } from '../constants/shirtConstant'
const NewShirt = ({history}) => {

    const [name,setName] = useState('');
    const [size,setSize] = useState('')
    const [price,setPrice] = useState('')
    const [images,setImages] =useState([]);
    const [imagesPreview,setImagesPreview] =useState([]);


    const categories= [
        'select size',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        
    ]



    const alert = useAlert();
    const dispatch = useDispatch();


    const {loading,error,success} = useSelector(state => state.newShirt);

 

    useEffect(()=>{
       
        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if(success){
            history.push('/admin/product')
            alert.success('product created successfuly')
            dispatch({type:NEW_SHIRT_RESET})
        }

      
        
    },[dispatch,alert,error,success,history])


    const submitHandler =(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name',name);
        formData.set('size',size);
        formData.set('price',price);
      
     
        images.forEach(image => {
            formData.append('images',image)
        })
       

        dispatch(newShirt(formData))

        
    }

    const onChange = e=>{

        const files = Array.from(e.target.files)
       
        setImagesPreview([]);
        setImages([]);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload =() =>{
                if(reader.readyState === 2){
                    setImagesPreview(oldArray => [...oldArray,reader.result])
                    setImages(oldArray => [...oldArray,reader.result])
                }

            }
            reader.readAsDataURL(file)
        })
            
        }
    

    return (

        <Fragment>
      
        <div className="row">
            <div className="col-12 col-md-2">
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
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
              <label htmlFor="psw-repeat"><b>Size</b></label>
                <select className="form-control" id="category_field"
                 value={size}
                 onChange={(e) => setSize(e.target.value)}
                >
                    {categories.map(size =>(

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
                           <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52"/>
                    ))}
            </div>

  
            <button
              id="login_button"
              type="submit"
              className="btnsect success"
              disabled={loading ? true: false}
            >
              CREATE
            </button>

          </form>
    </div>
                </Fragment>
            </div>
        

        </div>
    </Fragment>
        
    )
}

export default NewShirt
