import { useState } from "react";

import Fylo from "./components/Fylo";
import Progress from "./components/Progress";

const App = () => {
  const [dataUsed, setDataUsed] = useState(815);
  const [totalData, setTotalData] = useState(1000);

  return (
    <div className="
      font-raleway bg-veryDarkBlue w-screen h-screen s
      flex items-center justify-center relative
      bg-cover bg-no-repeat bg-left-bottom bg-mobile md:bg-desktop
      "
    >
      <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col md:flex-row items-center justify-center m-10 z-3">
        <Fylo />
        <Progress data={totalData} used={dataUsed} />
      </div>
    </div>
  );
};

export default App;
