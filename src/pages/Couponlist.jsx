import { Table } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteACoupon, getAllCoupons } from './../features/coupon/couponSlice';
import CustomModal from "../components/CustomModel";
import { resetState } from "../features/blogs/blogSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter:(a,b)=>a.name.length - b.name.length,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    sorter:(a,b)=>a.discount - b.discount,

  },
  {
    title: "Expiry",
    dataIndex: "expiry",
    sorter:(a,b)=>a.expiry.length - b.expiry.length,

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
const Couponlist = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setcouponId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setcouponId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(resetState())
    dispatch(getAllCoupons())
  },[])
  const couponState=useSelector((state)=>state.coupon.coupons)
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i+1,
      name: couponState[i].name,
     discount:couponState[i].discount,
     expiry:new Date(couponState[i].expiry).toLocaleString(),
      action: (
        <>
         <Link to={`/admin/coupon/${couponState[i]._id}`} className="fs-5 text-danger">
           <FiEdit />
         </Link>
         <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(couponState[i]._id)}
          >
         <RiDeleteBinLine />
         </button>
        </>
       ),
    });
  }
  const deleteCoupon = (e) => {
    dispatch(resetState())
    dispatch(deleteACoupon(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getAllCoupons());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCoupon(couponId);
        }}
        title="Are you sure you want to delete this Coupon?"
      />
    </div>
  );
};

export default Couponlist;
