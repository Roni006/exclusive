import { getAuth, signOut, updatePassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slice/authSlice.jsx";
import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const loggedUser = useSelector((state) => state.auth.value);
  console.log(loggedUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (loggedUser) {
      setName(loggedUser.displayName || "");
      setEmail(loggedUser.email || "");
    }
  }, [loggedUser]);
  // const handlesubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const [passerr, setPassErr] = useState("");
  const updateInfo = (e) => {
    e.preventDefault();

    if (password != "") {
      if (password != conpassword) {
        setPassErr("Password does not match");
      } else {
        updatePassword(auth.currentUser, password);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        .then(() => {
          setPassword("");
          setConPassword("");
          setSuccess(true);
        });
      }
    } 
    else {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      swal({
        title: "Congratulations!",
        text: "Field Updated Successfully",
        icon: "success",
        button: "Ok",
      }).then(() => {
        setPassErr(false);
      });
    }
  }, [success]);

  return (
    <> 
      <section className="pt-20 pb-[140px] ">
        <div className="container">
          <div className="flex justify-end mb-20">
            <h4 className="text-[14px] leading-[21px] font-poppins font-medium cursor-pointer">
              Welcome!
              <span className="text-[#DB4444] ms-1 font-semibold">
                {name}
                {/* {loggedUser?.displayName} */}
              </span>
            </h4>
          </div>
          <div className="flex justify-between gap-[205px]">
            <div className="user flex flex-col gap-3 w-[95px]">
              <a href="#" className="">
                My Account
              </a>
              <a href="#" className="">
                My Order
              </a>
              <a href="#" className="">
                My Wishlist
              </a>
              <a onClick={handleLogout} className="cursor-pointer">
                Log Out
              </a>
            </div>
            <div className="py-10 px-20 shadow-md w-[870px] rounded-md">
              <h2 className="title text-[20px] leading-7 text-[#db4444] font-medium font-poppins mb-4 w-full ">
                Edit Your Profile
              </h2>
              <form onSubmit={updateInfo}>
                <div className="flex items-center gap-[50px] mb-6">
                  {/*first name input field  */}
                  <div className="w-[330px]">
                    <label
                      className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer "
                      htmlFor="name"
                    >
                      First Name
                    </label>
                    <br />
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                      type="text"
                      id="name"
                      placeholder="Md"
                    />
                  </div>
                  {/* last name input field  */}
                  <div className="w-[330px]">
                    <label
                      className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer  "
                      htmlFor="lname"
                    >
                      Last Name
                    </label>
                    <br />
                    <input
                      className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                      type="text"
                      id="lname"
                      placeholder="Rimel"
                    />
                  </div>
                </div>
                {/* email input field  */}
                <div className="flex items-center gap-[50px]">
                  <div className="w-[330px]">
                    <label
                      className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer "
                      htmlFor="email"
                    >
                      Email{" "}
                    </label>
                    <br />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                      type="email"
                      id="email"
                      placeholder="info@gmail.com"
                    />
                  </div>

                  <div className="w-[330px]">
                    <label
                      className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer "
                      htmlFor="address"
                    >
                      Address{" "}
                    </label>
                    <br />
                    <input
                      className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                      type="text"
                      id="address"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </div>
                {/* password input field  */}
                <div className="reset-pass mt-6">
                  <label
                    // htmlFor="pass"
                    className="text-[#00000] font-poppins leading-6 text[16px] font-medium "
                  >
                    Password Change
                  </label>
                  {/* <br />
                  <input
                    className="mt-2 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                    type="password"
                    placeholder="Current Password"
                  /> */}

                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-4 mb-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full  "
                    type="text"
                    placeholder="New Password"
                  />

                  <input
                    onChange={(e) => setConPassword(e.target.value)}
                    className="py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full mb-[5px]"
                    type="text"
                    placeholder="Confirm New Password"
                  />
                  {passerr && (
                    <span className="text-red-600 text-[14px]">{passerr}</span>
                  )}
                </div>
                <div className="btn flex items-center gap-8 justify-stat mt-6">
                  <button className="text-[16px] leading-6 text-[#000000] font-poppins font-normal gblbdtn">
                    Cancel
                  </button>
                  <button className="gblbdtn">Save Changes </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
