const DataLeft = () => {
  return (
    <div
      className="
        bg-paleBlue text-black flex items-center justify-center p-3 rounded-xl
        absolute -top-12 right-12
        "
    >
      <div className="text-4xl z-4 font-bold mr-2">185</div>
      <div className="text-xs z-4 uppercase">gb left</div>
      <div
        class="
      w-0 h-0 absolute -bottom-[25%] right-0
      border-t-[0px] border-t-transparent
      border-r-[50px] border-l-paleBlue
      border-b-[40px] border-b-transparent
    "
      ></div>
    </div>
  );
};

export default DataLeft;
