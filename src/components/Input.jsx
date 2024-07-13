export default function Input({ label, placeholder, type, children }) {
  return (
    <div className="flex flex-col gap-[9px] text-[#333333]">
      <span className="text-[14px]">{label}</span>
      <div className="flex flex-col relative">
        <div className="flex flex-row gap-3 items-center">
          {children}
          <input
            className="bg-transparent w-full input-class"
            type={type}
            name="username"
            placeholder={placeholder}
          />
        </div>

        <span className="w-full absolute bottom-[-10px] left-0 h-[1.7px] bg-[#b9b9b9]"></span>
      </div>
      <span className="" data-symbol="&#xf206;"></span>
    </div>
  );
}
