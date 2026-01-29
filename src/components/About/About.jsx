import AboutBg from "../../assets/images/about-bg.jpg";
const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Image */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={AboutBg}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left">
              About Us
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              We are a modern eCommerce platform focused on quality, simplicity, and trust.
              Our mission is to make online shopping easy, secure, and enjoyable for everyone.
              Each product is carefully selected to ensure the best value and maximum satisfaction.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              At the heart of our platform is a commitment to transparency, reliability, and excellent customer support.
              We strive to provide an experience where shopping online is convenient, stress-free, and enjoyable.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Our vision is to grow as a platform that connects people with the products they love,
              while maintaining ethical practices and high standards.
              We continuously improve our services to meet the evolving needs of our customers.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Thank you for trusting us. We are excited to have you on this journey and hope
              you enjoy shopping with us as much as we enjoy serving you.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
