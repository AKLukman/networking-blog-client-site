import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>
        <button className="btn btn-outline">
          <FaGithub className="text-xl" />
          Login with Github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4">Find us on</h2>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaFacebook className="mr-2 text-blue-800" />
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border-x ">
          <FaInstagram className="mr-2 text-red-600" />

          <span>Instagram</span>
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-b-lg"
        >
          <FaTwitter className="mr-2 text-blue-700" />

          <span>Twitter</span>
        </a>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
