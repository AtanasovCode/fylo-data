

const Progress = () => {
    return (
        <div className="bg-darkBlue flex flex-col items-start ml-10 p-12 rounded-xl">
            <div className="text-gray-300 text-sm">
                You've used <span className="text-white font-bold mx-1">815 GB</span> of your storage
            </div>
        </div>
    );
}

export default Progress;