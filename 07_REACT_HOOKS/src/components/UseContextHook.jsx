import { useContext } from "react";
import { FirstContext } from "../App";
function UseContext() {
  const data = useContext(FirstContext);

  return (
    <div>
      {data.map((item) => (
        <h3 key={item.id}>
          name:{item.name},city:{item.city}
        </h3>
      ))}
    </div>
  );
}

export default UseContext;
