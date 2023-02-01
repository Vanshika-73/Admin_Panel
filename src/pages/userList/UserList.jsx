import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {dataRows} from '../../dummyData.js';
import { Link } from 'react-router-dom';
function UserList() {
  const [data,setData] = useState(dataRows);
  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id != id))
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  {
    field: 'email',headerName: 'Email',type:'String', width: 200,
  },
  {
    field: 'status',headerName: 'Status',width: 160,
  },
  {
    field: 'transaction',headerName: 'Transaction',width: 160,
  },
  {field:'action',headerName:"Action", width:150,renderCell: (params)=>{
    return(
     <>
     <Link to={'/user/'+params.row.id}>
      <button className="userListEdit">Edit</button>
     </Link>
      <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
     </>
    )
  }}
];


  return (
    <div className="UserList">
        <DataGrid rows={data}
        disableSelectionOnClick
         columns={columns} pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
 
export default UserList;