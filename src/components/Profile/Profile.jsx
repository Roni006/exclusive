import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = getAuth;
  const loggedUser = useSelector((state) => state.auth.value);
  console.log(loggedUser);
  return (
    <>
      <section className="pt-20 pb-[140px] ">
        <div className="container">
          <div className="flex justify-end mb-20">
            <h4 className="text-[14px] leading-[21px] font-poppins font-medium cursor-pointer">
              Welcome!
              <span className="text-[#DB4444] ms-1 font-semibold">
                {" "}
                {loggedUser?.displayName}
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
            </div>
            <div className="py-10 px-20 shadow-md w-[870px] rounded-md">
              <h2 className="title text-[20px] leading-7 text-[#db4444] font-medium font-poppins mb-4 w-full ">
                Edit Your Profile
              </h2>
              <form>
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
                      value={loggedUser?.displayName}
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
                      value={loggedUser?.email}
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
                    htmlFor="pass"
                    className="text-[#00000] font-poppins leading-6 text[16px] font-medium "
                  >
                    Password Change
                  </label>
                  <br />
                  <input
                    className="mt-2 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                    type="password"
                    placeholder="Current Password"
                  />

                  <input
                    className="mt-4 mb-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full  "
                    type="password"
                    placeholder="New Password"
                  />

                  <input
                    className="py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full "
                    type="password"
                    placeholder="Confirm New Password"
                  />
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
