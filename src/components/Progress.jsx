import ProgressBar from "./ProgressBar";

const Progress = ({
    data,
    used,
}) => {
    return (
        <div className="bg-darkBlue flex flex-col items-start ml-10 p-6 rounded-xl text-white w-1/3">
            <div className="text-gray-300 text-sm">
                You've used <span className="text-white font-bold mx-1">815 GB</span> of your storage
            </div>
            <ProgressBar data={data} used={used} />
        </div>
    );
}

export default Progress;