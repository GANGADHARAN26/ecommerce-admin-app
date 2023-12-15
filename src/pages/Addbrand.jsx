import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import { createBrands, getABrand, updateABrand } from "../features/brand/brandSlice";
import { useEffect } from "react";
import { resetState } from "../features/blogs/blogSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Brand Name is Required"),
});

const Addbrand = () => {
  const dispatch = useDispatch();
  const location=useLocation();
  const navigate=useNavigate();
  const getBrandId=location.pathname.split('/')[3];
  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  const newBrand = useSelector((state) => state.brand);
  const { isSuccess, isError, isLoading, isBrandCreated ,brandName,updatedBrand} = newBrand;
  useEffect(() => {
    if (isSuccess && isBrandCreated) {
      toast.success("Product Added Successfully!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate('/admin/list-brand');
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
        if (getBrandId !== undefined) {
          const data = { id: getBrandId, brandData: values };
          dispatch(updateABrand(data));
          // setTimeout(() => {
            dispatch(resetState());
          // }, 2000);
        } else {
          dispatch(createBrands(values));
          formik.resetForm();
          setTimeout(() => {
            dispatch(resetState());
          }, 300);
        }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title"> {getBrandId !== undefined ? "Edit" : "Add"} Brand</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onCh={formik.handleChange("title")}
            val={formik.values.title}
            label="Enter Brand"
            id='brand'
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-0 my-5"
            type="submit"
          >
           {getBrandId !== undefined ? "Update" : "Add"}  Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
