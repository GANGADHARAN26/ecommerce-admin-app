import { Table } from "antd";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect } from "react";
import { getCategories } from "../features/bcategory/bcategorySlice";

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


const Blogcatlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
  },[])
  const bCatStat=useSelector((state)=>state.bCategory.bCategories)
  const data1 = [];
for (let i = 0; i < bCatStat.length; i++) {
  data1.push({
    key: i+1,
    name: bCatStat[i].title,
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
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Blogcatlist;
