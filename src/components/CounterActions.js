import { useDispatch, useSelector } from "react-redux";
import { incrementCounter,decrementCounter,resetCounter, counterSelector } from "../redux/reducers/counterReducer";

export const CounterActions = () => {
  // const { count } = useSelector(state=>state.counterReducer);
  const { count } = useSelector(counterSelector);
  const disptach=useDispatch();

  return (
    <div className="actions">
      <button disabled={count <= 0}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
          onClick={() => disptach(decrementCounter())}
        />
      </button>
      <button disabled={count >= 10}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
          onClick={() => disptach(incrementCounter())}
        />
      </button>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
          onClick={() => disptach(resetCounter())}
        />
      </button>
    </div>
  );
};
