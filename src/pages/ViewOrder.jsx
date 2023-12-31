import { Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect } from "react";
import { getOrder } from "../features/auth/authSlice";
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
      
];

const ViewOrder = () => {
    const location = useLocation();
    const orderId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);
   const orderState = useSelector((state) => state?.auth?.singleOrder?.orders || [])
  const data1 = [];
  for (let i = 0; i < orderState?.orderItems?.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState?.orderItems[i].product?.title,
      brand: orderState?.orderItems[i]?.product?.brand,
      count: orderState?.orderItems[i]?.quantity,
      amount: orderState?.orderItems[i]?.price,
      color: orderState?.orderItems[i]?.color?.title,
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
