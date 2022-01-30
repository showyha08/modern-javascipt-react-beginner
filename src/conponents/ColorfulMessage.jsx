import React from "react";

const ColorfulMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;

  // Reactの場合はキャメルケース
  // 本来はfont-sizeだけど、fontSizeとしている
  const contentStyle = {
    // 省略できる
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
