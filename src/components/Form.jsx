import { CiLock, CiUser } from "react-icons/ci";
import Input from "./Input";

export default function Form() {
  return (
    <div>
      <form className="flex flex-col gap-8">
        <Input
          label="Username"
          placeholder="Type your useless name..."
          type="text"
        >
          <CiUser fontSize="20px" />
        </Input>
        <Input
          label="Password"
          placeholder="Enter your easy password"
          type="password"
        >
          <CiLock fontSize="20px" />
        </Input>
      </form>
      <p className="text-right text-[14px] mt-4 text-[#7f7f7f] cursor-pointer hover:text-pink-600 transition-all">
        Forgot password?
      </p>
      <button className="bg-btn font-[16px] py-[20px] text-center text-[aliceblue] w-full my-6 rounded-full">
        DON'T LOGIN
      </button>
    </div>
  );
}
