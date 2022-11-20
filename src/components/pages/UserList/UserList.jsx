import './UserList.css'
import { UserRows } from '../../dummy';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

  const [data, setData] = useState(UserRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'userName', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt="" className='userListImg' />
            {params.row.userName}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'transaction', headerName: 'Transaction', width: 130 },
    {
      field: 'action',
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutline className='userDelete' onClick={() => handleDelete(params.row.id)} />
          </>

        )
      }
    }
  ];


  return (
    <div className='userList'>
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
