import React from 'react';
import Wallpaper from './Wallpaper';
import { BackgroundPhotoContainerProps } from '../Constants/Interfaces';

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
