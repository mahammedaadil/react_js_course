import { useState } from "react";
import Button from "../ui/Button";

function BasicProp() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Basic Props</h1>
      <p className="text-gray-600 mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed
        nostrum ab enim fugit explicabo in neque mollitia, asperiores eum,
        suscipit aliquam laudantium, facilis autem reiciendis dolorem distinctio
        nam esse.
      </p>
      <p>Current Count Value:{clickCount}</p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Different Colors
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="Primary Button"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Secondary Button"
              color="secondary"
              onClick={() => setClickCount(clickCount - 1)}
            />

            <Button
              text="Danger Button"
              color="danger"
              onClick={() => setClickCount(0)}
            />

            <Button
              text="Success Button"
              color="success"
              onClick={() => setClickCount(10000)}
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              text="Small Button"
              color="primary"
              size="small"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Disabled"
              disabled={true}
              color="secondary"
              size="small"
              onClick={() => setClickCount(clickCount - 1)}
            />

            <Button
              text="Danger Button"
              color="danger"
              disabled={true}
              size="small"
              onClick={() => setClickCount(0)}
            />

            <Button
              text="Success Button"
              color="success"
              disabled={true}
              size="small"
              onClick={() => setClickCount(10000)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicProp;
