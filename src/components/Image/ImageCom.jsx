'use client'; 

import BannerImage from "../../assets/imgs/bannerImage.svg?react";
import { useColor } from "../../context/colorContext";

const ImageCom = ({ svgUrl, pathDark, pathLightl }) => {
  const { selectedColor } = useColor();
  // console.log(pathDark);
  return (
    <>
      <BannerImage className="custom-svg" />
      {
        pathDark?.map((item, index) => {
          return (
            <style key={index}>
            {`
              .custom-svg path:nth-child(${item}) { fill: ${selectedColor.darkColor}; },
            `}
          </style>
          )
        })
      }
    </>
  );
};


export default ImageCom;
