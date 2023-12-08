import { Table } from "antd";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect } from "react";
import { getBlogs } from "../features/blogs/blogSlice";
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
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Bloglist = () => {
 const dispatch=useDispatch();
 useEffect(()=>{
  dispatch(getBlogs());
 },[])
 const getBlogState=useSelector((state)=>state.blogs.blogs)
 const data1 = [];
for (let i = 0; i < getBlogState.length; i++) {
  data1.push({
    key: i+1,
    name: getBlogState[i].title,
    category:getBlogState[i].category,
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
      <h3 className="mb-4 title">Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Bloglist;
