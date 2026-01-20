import { useState } from "react";
import loginImage from "../../assets/images/login.png";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { authinfo } from "../../Redux/Slice/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const validate = () => {
    let newError = {};
    if (!formData.email) {
      newError.email = "Enter Your Email";
    }
    // else if(formData.email ){
    //     email.
    // }
    if (!formData.password) {
      newError.password = "Enter Your Password";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Successfully", formData);
      //! firebase
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(authinfo({
            uid:user.uid,
            email: user.email,
            displayName: user.displayName,
          }));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
      //! firebase
      toast.success("Successfully Logged in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <section>
        <div className="container ">
          <div className="login-details flex gap-[130px] items-center pt-[100px] pb-[220px]">
            <div className="w-[662px]">
              <img src={loginImage} alt="login image" />
            </div>
            <div className="w-[371px]">
              <h2 className="text-[36px] leading-[30px] tracking-[4%] font-inter font-medium  text-[#000000]">
                Login in to Exclusive
              </h2>
              <p className="leading-6 text-[16px] font-poppins text-[#000000] font-normal pt-6 pb-12">
                Enter Your Details Below
              </p>
              <form onSubmit={handleSubmit}>
                {/* email field  */}
                <div>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins"
                    type="text"
                    placeholder="Email or Phone Number "
                  />
                  {error.email && (
                    <span className="text-red-600 font-poppins text-[14px] ">
                      {error.email}
                    </span>
                  )}
                </div>
                {/* password field  */}
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-12 font-poppins"
                    type={`${showpass ? "text" : "password"}`}
                    placeholder="Password"
                  />
                  {error.password && (
                    <span className="text-red-600 font-poppins text-[14px] ">
                      {error.password}
                    </span>
                  )}
                  <div
                    onClick={() => setShowPass(!showpass)}
                    className="absolute top-[50px] right-0"
                  >
                    {showpass ? (
                      <FaEye className="cursor-pointer text-[20px]" />
                    ) : (
                      <FaEyeSlash className="cursor-pointer text-[20px]" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-[16px] text-white px-12 py-4 rounded-sm mt-10 cursor-pointer"
                  >
                    Login
                  </button>
                  <a
                    href="#"
                    className="text-[#db4444] leading-6 text-[16px] font-poppins font-normal "
                  >
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
