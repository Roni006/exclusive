import loginImage from "../../assets/images/login.png";
import google from "../../assets/images/goggle.png";
import { Link, Navigate } from "react-router";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const Registration = () => {
  const auth = getAuth();
  const [showpass, setShowPass] = useState(false);
  const [showconpass, setShowConPass] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const validate = () => {
    let newErros = {};
    if (!formdata.name.trim()) {
      newErros.name = "Enter Your name";
    }
    if (!formdata.email.trim()) {
      newErros.email = "Enter Your email";
    } else if (!emailRegex.test(formdata.email)) {
      newErros.email = "Please enter valid email";
    }
    if (!formdata.password.trim()) {
      newErros.password = "Enter Your password";
    } else if (!passRegex.test(formdata.password)) {
      newErros.password =
        "Password Contains Uppercase, Lowercase, numbers and speacila character";
    }
    if (!formdata.confirmPassword) {
      newErros.conPassword = "Enter Confirm Password";
    } else if (formdata.password != formdata.confirmPassword) {
      newErros.conPassword = "Password does not match";
    }

    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: formdata.name,
          });
          console.log(userCredential);
        })
        .then(() => {
          sendEmailVerification(auth.currentUser);
        })
        .catch((error) => console.log(error));

      toast.success("Email Verifcation sent to your Mail!", {
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
        <div className="container">
          <section>
            <div className="container ">
              <div className="login-details flex gap-[130px] items-center pt-[100px] pb-[220px]">
                <div className="w-[662px]">
                  <img src={loginImage} alt="login image" />
                </div>
                <div className="w-[371px]">
                  <h2 className="text-[36px] leading-[30px] tracking-[4%] font-inter font-medium  text-[#000000]">
                    Create an account
                  </h2>
                  <p className="leading-6 text-[16px] font-poppins text-[#000000] font-normal pt-6 pb-12">
                    Enter Your Details Below
                  </p>
                  <form onSubmit={handleSubmit}>
                    {/* name field  */}
                    <div>
                      <input
                        onChange={(e) =>
                          setFormData({ ...formdata, name: e.target.value })
                        }
                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins"
                        type="text"
                        placeholder="Name"
                      />
                      {errors.name && (
                        <p className="text-red-600 font-poppins">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    {/* email field  */}
                    <div>
                      <input
                        onChange={(e) =>
                          setFormData({ ...formdata, email: e.target.value })
                        }
                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins pt-12"
                        type="email"
                        placeholder="Email or Phone Number "
                      />
                      {errors.email && (
                        <p className="text-red-600 font-poppins">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    {/* password field  */}
                    <div className="relative">
                      <input
                        onChange={(e) =>
                          setFormData({ ...formdata, password: e.target.value })
                        }
                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-12 font-poppins"
                        type={`${showpass ? "text" : "password"}`}
                        placeholder="Password"
                      />
                      {errors.password && (
                        <p className="text-red-600 font-poppins">
                          {errors.password}
                        </p>
                      )}
                      <div
                        className="absolute top-[50px] right-0"
                        onClick={() => setShowPass(!showpass)}
                      >
                        {showpass ? (
                          <FaEye className="cursor-pointer text-[20px]" />
                        ) : (
                          <FaEyeSlash className="cursor-pointer text-[20px]" />
                        )}
                      </div>
                    </div>
                    {/* confirm password field  */}
                    <div className="relative">
                      <input
                        onChange={(e) =>
                          setFormData({
                            ...formdata,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-12 font-poppins"
                        type={`${showconpass ? "text" : "password"}`}
                        placeholder="Confirm Password"
                      />
                      {errors.conPassword && (
                        <p className="text-red-600 font-poppins duration-300">
                          {errors.conPassword}
                        </p>
                      )}
                      <div
                        className="absolute top-[50px] right-0"
                        onClick={() => setShowConPass(!showconpass)}
                      >
                        {showconpass ? (
                          <FaEye className="cursor-pointer text-[20px]" />
                        ) : (
                          <FaEyeSlash className="cursor-pointer text-[20px]" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="bg-[#DB4444] text-[16px] text-white px-12 py-4 rounded-sm mt-10 cursor-pointer w-full"
                      >
                        Create Account
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-4 px-[86px] border-2 border-[rgba(0,0,0,0.4)] rounded-md mt-4 ">
                      <img src={google} alt="goggle image" />
                      <a
                        href="#"
                        className="text-[16px] text-[#000000] leading-6 font-poppins font-normal "
                      >
                        Sign Up With Goggle
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8 ">
                      <span className="text-[16px] text-[#000000] leading-6 font-poppins font-normal ">
                        Already have account?
                      </span>
                      <Link
                        to="/login"
                        className="text-[16px] text-[#000000] leading-6 font-poppins font-bold "
                      >
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Registration;
