import { Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect } from "react";
import { getOrderByUser, getOrders } from "../features/auth/authSlice";
const columns = [
    {
        title: "SNo",
        dataIndex: "key",
      },
      {
        title: "Product Name",
        dataIndex: "name",
      },
      {
        title: "Brand",
        dataIndex: "brand",
      },
      {
        title: "Count",
        dataIndex: "count",
      },
      {
        title: "Color",
        dataIndex: "color",
      },
      {
        title: "Amount",
        dataIndex: "amount",
      },
      {
        title: "Date",
        dataIndex: "date",
      },
    
      {
        title: "Action",
        dataIndex: "action",
      },
];

const ViewOrder = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, []);
   const orderState = useSelector((state) => state.auth.orderbyuser.products)
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count: orderState[i].count,
      amount: orderState[i].product.price,
      color: orderState[i].product.color,
      date: orderState[i].product.createdAt,

      action: (
        <>
          <Link to="/" className="fs-5 text-danger">
            <FiEdit />
          </Link>
          <Link to="/" className="ms-3 fs-5 text-danger">
            <RiDeleteBinLine />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">View  Order</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewOrder;
