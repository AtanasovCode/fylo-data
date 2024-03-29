const IconComponent = ({ icon, alt }) => {
  return (
    <div className="p-4 bg-veryDarkBlue flex items-center justify-center rounded-md mr-6">
      <img src={icon} alt={alt} className="h-5" />
    </div>
  );
};

export default IconComponent;
