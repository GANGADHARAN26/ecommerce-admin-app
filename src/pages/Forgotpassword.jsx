import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{background:"#ffd333",minHeight:'100vh'}}>
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 title>Forgot Password</h3>
        <p>Please Enter your new Password</p>
         <form action="">
         <CustomInput type='text' label='Email Address' id='email'/>
          <CustomInput type='password' label='Password' id='pass'/>
          <button 
           className="border-0 px-3 py-2 text-white fw-bold w-100"
           style={{background:'#ffd333'}}
           type="submit"
           >
           Send Link
          </button>
         </form>
      </div>
    </div>
  );
};

export default Forgotpassword;