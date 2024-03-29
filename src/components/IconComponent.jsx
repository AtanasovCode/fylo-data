const IconComponent = ({ icon, alt }) => {
  return (
    <div className="w-14 h-14 bg-veryDarkBlue flex items-center justify-center rounded-md cursor-pointer mr-2 md:mr-6 hover:bg-cyan-200">
      <img src={icon} alt={alt} className="h-6 hover:invert" />
    </div>
  );
};

export default IconComponent;
