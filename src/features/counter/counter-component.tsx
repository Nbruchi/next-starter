"use client";

import { useState } from "react";

import { getDictionary } from "../internationalization/get-dictionaries";

interface CounterProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}

const CounterComponent = ({ dictionary }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <p>
      This is a client component:
      <button onClick={() => setCount(n => n - 1)}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => setCount(n => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
};

export default CounterComponent;
