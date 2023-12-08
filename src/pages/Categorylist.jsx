import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect } from "react";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length ,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Categorylist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
  },[])
  const pCatStat=useSelector((state)=>state.pCategory.pCategories)
  const data1 = [];
for (let i = 0; i < pCatStat.length; i++) {
  data1.push({
    key: i+1,
    name: pCatStat[i].title,
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
      <h3 className="mb-4 title">Product category</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Categorylist;
