import { Link } from 'react-router-dom';
import './ProductEdit.css';
import Charts from '../../charts/Charts';
import { productData } from '../../dummy';
import { Publish } from '@material-ui/icons';

export default function ProductEdit() {
  return (
    <div className='productedit'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={"/newProduct"}>
          <button className="prodctAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts title={"Product"} data={productData} dataKey={"sales"} />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="productInfoImg" />
            <span className="productName">Apple iPad</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">121</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">2121</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Macbook' />
            <label>In stock</label>
            <select name="inStock" id='idStock'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="isActive" id='idActive'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="productImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" name="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
