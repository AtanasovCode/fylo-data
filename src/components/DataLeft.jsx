const DataLeft = () => {
  return (
    <div
      className="
        bg-paleBlue text-black flex items-center justify-center p-3 rounded-xl
        absolute -bottom-8 md:bottom-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0
        md:-top-12 md:right-12
        "
    >
      <div className="text-4xl font-bold mr-2">185</div>
      <div className="text-xs uppercase">gb left</div>
      <div
        class="
      w-0 h-0 absolute -bottom-[25%] right-0
      border-t-[0px] border-t-transparent
      border-r-[50px] border-l-paleBlue
      border-b-[40px] border-b-transparent
      hidden md:block
    "
      ></div>
    </div>
  );
};

export default DataLeft;
