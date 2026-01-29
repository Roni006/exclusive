import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import google from "../../assets/images/goggle.png";
import { Link, Navigate, useNavigate } from "react-router";
const Contact = () => {
  const [showconpass, setShowConPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [showpass, setShowPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: formdata.name,
          });
          nagivate("/login");
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
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left">
              Contact Us
            </h2>

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
              </div>
              {/* message field  */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-[18px] text-white px-12 py-4 rounded-sm mt-10 cursor-pointer w-full font-poppins font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-600 text-base md:text-lg">
              <p>
                <strong>Address:</strong> 34 West Nakhal Para Tejgaon
                Dhaka-1215, Bangladesh
              </p>
              <p>
                <strong>Phone:</strong> +880 1774952114
              </p>
              <p>
                <strong>Email:</strong> anik54908@gmail.com
              </p>
              <p>
                <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
