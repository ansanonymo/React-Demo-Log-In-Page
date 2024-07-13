import Form from "./components/Form";
import SignUp from "./components/SignUp";
import SocialLink from "./components/SocialLink";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[url('src/asset/images/bg-01.jpg')] bg-no-repeat bg-cover flex justify-center items-center ">
      <div className="min-w-[225px] max-w-[500px] w-full rounded-md bg-[aliceblue] p-[50px]">
        <h1 className="font-[Poppins] font-bold text-[#333333] text-[39px] mb-[49px] text-center">
          Useless Login
        </h1>

        <Form />
        <SocialLink />
        <SignUp />
      </div>
    </div>
  );
}
