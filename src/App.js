import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import NewColorBox from "./components/NewColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      {/*Provider는 context의 밸류변경가능 Provider사용시 value값을 명시해야함 */}
      <div>
        <SelectColors />
        <ColorBox />
        <NewColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
