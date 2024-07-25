import React from 'react';

interface BackgroundPhotoContainerProps {
  children: React.ReactNode;
}

const BackgroundPhotoContainer: React.FC<BackgroundPhotoContainerProps> = ({ children }) => {
  return (
    <div className="AppContainer">
      {children}
    </div>
  );
};

export default BackgroundPhotoContainer;
