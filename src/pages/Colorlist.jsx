import { Table } from "antd";
import { useEffect } from "react";
import { getColors } from "../features/color/colorSlice";
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

const Colorlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getColors());
  },[])
  const colorState=useSelector((state)=>state.color.colors)
  const data1 = [];
for (let i = 0; i < colorState.length; i++) {
  data1.push({
    key: i+1,
    name: colorState[i].title,
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
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Colorlist;
