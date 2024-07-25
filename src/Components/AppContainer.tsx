import React from 'react';
import Wallpaper from './Wallpaper';

interface BackgroundPhotoContainerProps {
  children: React.ReactNode;
  weatherData: any;
}

const BackgroundPhotoContainer: React.FC<BackgroundPhotoContainerProps> = ({ children, weatherData }) => {
  return (
    <div className="AppContainer">
      <Wallpaper weatherData={weatherData} />
      <div className="ContentContainer">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPhotoContainer;
