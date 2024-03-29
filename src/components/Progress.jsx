import ProgressBar from "./ProgressBar";
import DataLeft from "./DataLeft";

const Progress = ({
    data,
    used,
}) => {
    return (
        <div className="bg-darkBlue flex-2 w-full flex flex-col items-start md:ml-10 p-12 rounded-xl text-white md:w-1/3 relative">
            <div className="text-gray-300 text-sm w-full text-center md:text-left">
                You've used <span className="text-white font-bold mx-1">815 GB</span> of your storage
            </div>
            <ProgressBar data={data} used={used} />
            <DataLeft />
        </div>
    );
}

export default Progress;