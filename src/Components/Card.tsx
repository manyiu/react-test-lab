import { CompoundButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../Store/Counter";
import { useAppSelector } from "../Store/hooks";

export default function Card() {
  const counter = useAppSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Test</h1>
      <div>{counter}</div>
      <CompoundButton secondaryText="+1" onClick={() => dispatch(increment())}>
        Add
      </CompoundButton>
      <CompoundButton secondaryText="-1" onClick={() => dispatch(decrement())}>
        Subtrack
      </CompoundButton>
    </div>
  );
}
