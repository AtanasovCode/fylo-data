import IconComponent from "./IconComponent";

import logo from "../assets/logo.svg";
import iconDocument from "../assets/icons/icon-document.svg";
import iconFolder from "../assets/icons/icon-folder.svg";
import iconUpload from "../assets/icons/icon-upload.svg";

const Fylo = () => {
  return (
    <div className="bg-darkBlue flex flex-1 flex-col items-start mb-8 justify-center p-12 w-full md:w-max rounded-xl rounded-tr-[40%]">
      <div className="mb-8">
        <img src={logo} alt="Fylo logo" />
      </div>
      <div className="flex items-center justify-between">
        <IconComponent icon={iconDocument} alt="icon of a document" />
        <IconComponent icon={iconFolder} alt="icon of a folder" />
        <IconComponent icon={iconUpload} alt="upload icon" />
      </div>
    </div>
  );
};

export default Fylo;
