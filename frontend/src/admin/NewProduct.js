import React,{Fragment,useEffect,useState} from 'react'
import {useAlert} from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import { newProduct,clearErrors } from '../actions/productActions'
import { NEW_PRODUCT_RESET } from '../constants/productConstants'
const NewProduct = ({history}) => {

    const [name,setName] = useState('');
    const [category,setCategory] = useState('')
    const [description,setDescription] = useState('')
    const [contactno,setContactno] = useState('')
    const [images,setImages] =useState([]);
    const [imagesPreview,setImagesPreview] =useState([]);


    const categories= [
        'select category',
        'HTML,CSS,Javascript',
        'C sharp',
        'Java',
        'React js',
        'Angular js',
        'Node js',
        'Python'
    ]



    const alert = useAlert();
    const dispatch = useDispatch();


    const {loading,error,success} = useSelector(state => state.newProduct);

 

    useEffect(()=>{
       
        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if(success){
            history.push('/admin/product')
            alert.success('product created successfuly')
            dispatch({type:NEW_PRODUCT_RESET})
        }

      
        
    },[dispatch,alert,error,success,history])


    const submitHandler =(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name',name);
        formData.set('category',category);
        formData.set('description',description);
        formData.set('contactno',contactno);
     
        images.forEach(image => {
            formData.append('images',image)
        })
       

        dispatch(newProduct(formData))

        
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
            <label htmlFor="psw-repeat"><b>Contactno</b></label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  value={contactno}
                  onChange={(e) => setContactno(e.target.value)}
                />
              </div>

              <div className="form-group">
              <label htmlFor="psw-repeat"><b>Description</b></label>
                <textarea  className="form-control" id="description_field" rows="8" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}>
                </textarea>
              </div>

              <div className="form-group">
              <label htmlFor="psw-repeat"><b>Category</b></label>
                <select className="form-control" id="category_field"
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map(category =>(

                     <option key={category} value={category}>{category}</option>
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

export default NewProduct
