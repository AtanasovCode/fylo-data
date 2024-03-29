const IconComponent = ({ icon, alt }) => {
  return (
    <div className="p-4 bg-veryDarkBlue flex items-center justify-center rounded-md cursor-pointer mr-6 hover:bg-cyan-200">
      <img src={icon} alt={alt} className="h-5 hover:invert" />
    </div>
  );
};

export default IconComponent;
