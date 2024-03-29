const ProgressBar = ({ data, used }) => {
  // Calculate the percentage of data used
  const percent = (used / data) * 100;

  // Set the width of the progress bar as a percentage
  const progressStyle = {
    width: `${percent}%`,
  };

  return (
    <div className="flex flex-col w-full mt-6">
      <div className="rounded-xl bg-veryDarkBlue w-full h-2 relative overflow-hidden">
        {/* Apply the width dynamically using inline style */}
        <div
          className="
                    absolute h-full rounded-xl
                    bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd
                    animate-progress -webkit-animate-progress -moz-animate-progress
                    "
          style={progressStyle}
        >
            <div className="absolute w-2 h-full rounded-full bg-white top-0 right-0"></div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs mt-2">
        <div>0 GB</div>
        <div>{data} GB</div>
      </div>
    </div>
  );
};

export default ProgressBar;
