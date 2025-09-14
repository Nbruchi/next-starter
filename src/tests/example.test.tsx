import { describe, expect, test } from "vitest";

import { render, screen } from "@/tests/react-test-utils";

const MyReactComponent = () => <div>My React Component</div>;

describe("MyReactComponent", () => {
  test("given no props: renders a text", () => {
    render(<MyReactComponent />);

    expect(screen.getByText("My React Component")).toBeInTheDocument();
  });
});
