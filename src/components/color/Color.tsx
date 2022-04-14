import React, { FC, useEffect, useState } from "react";
interface Propss {
  rgb: [number, number, number];
  weight: number;
  index: number;
  hexColor: string;
}

const Color: FC<Propss> = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    let setTime = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(setTime);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default Color;
