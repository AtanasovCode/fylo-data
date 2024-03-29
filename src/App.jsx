import { useState } from "react";

import background from "./assets/images/bg-desktop.svg";
import Fylo from "./components/Fylo";
import Progress from "./components/Progress";

const App = () => {
  const [dataUsed, setDataUsed] = useState(815);
  const [totalData, setTotalData] = useState(1000);

  return (
    <div className="font-raleway bg-veryDarkBlue w-screen h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center m-10">
        <Fylo />
        <Progress data={totalData} used={dataUsed} />
      </div>
    </div>
  );
};

export default App;
