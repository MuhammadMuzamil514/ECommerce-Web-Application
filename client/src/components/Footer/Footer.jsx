import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-0">

      <div className="container section mx-auto py-12 px-4">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          <div>

            <h2 className="text-2xl font-bold text-blue-600">
              Brand
            </h2>

            <p className="text-gray-500 mt-3">
              Best marketplace for suppliers.
            </p>

            <div className="flex gap-4 mt-5">

              <FaFacebook />

              <FaTwitter />

              <FaInstagram />

              <FaLinkedin />

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              About
            </h3>

            <ul className="space-y-2 mt-3 text-gray-500">
              <li>About Us</li>
              <li>Find Store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              Partnership
            </h3>

            <ul className="space-y-2 mt-3 text-gray-500">
              <li>Affiliate</li>
              <li>Seller</li>
              <li>Warehouse</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              Information
            </h3>

            <ul className="space-y-2 mt-3 text-gray-500">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              For Users
            </h3>

            <ul className="space-y-2 mt-3 text-gray-500">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              Get App
            </h3>

            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="w-32 mt-3"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="w-32 mt-3"
            />

          </div>

        </div>

      </div>

      <div className="border-t py-5 text-center text-gray-500">
        © 2026 Ecommerce UI Clone. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;