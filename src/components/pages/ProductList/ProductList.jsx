import './ProductList.css';
import { productRows } from '../../dummy';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className='productList'>
            <img src={params.row.img} alt="" className='productListImg' />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
      field: 'action',
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productEdit">Edit</button>
            </Link>
            <DeleteOutline className='productDelete' onClick={() => handleDelete(params.row.id)} />
          </>

        )
      }
    }
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
