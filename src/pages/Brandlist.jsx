import { Table } from "antd";
import { useEffect } from "react";
import { getBrands } from "../features/brand/brandSlice";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Brandlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getBrands())
  },[])
  const brandState=useSelector((state)=>state.brand.brands)
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i+1,
      name: brandState[i].title,
     
      action: (
        <>
         <Link to='/' className="fs-5 text-danger">
           <FiEdit />
         </Link>
         <Link to='/' className="ms-3 fs-5 text-danger">
         <RiDeleteBinLine />
         </Link>
        </>
       ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
