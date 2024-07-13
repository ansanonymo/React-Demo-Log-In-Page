import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function SocialLink() {
  return (
    <div className="mt-3">
      <p className="text-[#7f7f7f] text-center">Or Sign Up Using</p>
      <div className=" flex justify-center items-center gap-4 my-3">
        <FaFacebook className="text-[40px] text-[#4267B2] cursor-pointer" />
        <AiFillTwitterCircle className="text-[45px] text-[#1DA1F2] cursor-pointer" />
        <AiFillGoogleCircle className="text-[45px] text-[#EA4335] cursor-pointer" />
      </div>
    </div>
  );
}
