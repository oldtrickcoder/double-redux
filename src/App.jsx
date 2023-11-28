import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  incres,
  decres,
  multiply,
  bagi,
} from "./features/SecondSlices/SecondSlices";
function App() {
  const count = useSelector((something) => something.counter.value);
  const NumberKedua = useSelector((data) => data.secondCounter.value);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("React App Loaded...");
    window.addEventListener("resize", () => {
      console.log("meresize layar");
    });
    //if(NumberKedua % 2)
  }, []);

  useEffect(() => {
    console.log(NumberKedua % 2 == 0);
    if (NumberKedua % 2 !== 0) {
      alert("angka ganjil");
    }
  }, [NumberKedua]);

  return (
    <div className="App">
      <img src={reactLogo} alt="" />
      <h2>Halo From React + Vite + Redux</h2>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          columnGap: "1.5rem",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "grey",
            color: "white",
          }}
          onClick={() => dispatch(decrement())}
        >
          <h3>-</h3>
        </button>
        <button
          style={{
            background: "grey",
            color: "white",
          }}
          onClick={() => dispatch(increment())}
        >
          <h3>+</h3>
        </button>
      </div>

      <p>
        its a stateless component that all Controled by Redux , dispatch, when
        you press a button this component will send action to the redux
        dispatcher and will update this DOM
      </p>
      <h1>{NumberKedua}</h1>
      <div
        style={{
          display: "flex",
          columnGap: "1.5rem",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "green",
            color: "white",
          }}
          onClick={() => dispatch(decres())}
        >
          <h3>-</h3>
        </button>
        <button
          style={{
            background: "green",
            color: "white",
          }}
          onClick={() => dispatch(incres())}
        >
          <h3>+</h3>
        </button>
        <button
          style={{
            background: "green",
            color: "white",
          }}
          onClick={() => dispatch(multiply())}
        >
          <h3>*</h3>
        </button>
        <button
          style={{
            background: "green",
            color: "white",
          }}
          onClick={() => dispatch(bagi())}
        >
          <h3>/</h3>
        </button>
      </div>
      <p>
        The Sample above showing us about redux can be have multiple counter
      </p>
    </div>
  );
}

export default App;
