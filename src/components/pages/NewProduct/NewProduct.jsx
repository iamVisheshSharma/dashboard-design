import { Publish } from '@material-ui/icons'
import './NewProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder='Macbook Pro' />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder='1298' />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="isActive" id='idActive'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>
            Upload Image
          </label>
          <input type="file" name="file" id="file" style={{border: "none"}} />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  )
}
