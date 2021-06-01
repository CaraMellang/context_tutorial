// import React, { createContext } from "react";

// const ColorContext = createContext({ color: "black" });
// //새 Context를 만들 때는 createContext함수 사용. 파라미터는 해당context의 기본상태
// //Provider를 사용하지않았을 떄만 여기 기본값이 사용됨.

// export default ColorContext;
//위 코드는 정적 Context

import React, { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
//const ColorConsumer = ColorContext.Consumer와 같은의미
const { Consumer: ColorConsumer } = ColorContext;
//내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
