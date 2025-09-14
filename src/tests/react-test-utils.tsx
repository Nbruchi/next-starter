import { render, type RenderOptions } from "@testing-library/react";
import { type ReactElement } from "react";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => {
  return render(ui, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });
};

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
export { default as userEvent } from "@testing-library/user-event";
