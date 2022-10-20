import Key from "./Key";
import { render, screen } from "@testing-library/react";

describe("Given a Key component", () => {
  describe("When it is rendered with a text 3", () => {
    test("Then it should show a button with a 3 inside", () => {
      const keyElements = {
        text: "3",
        className: "",
      };

      render(
        <Key
          text={keyElements.text}
          className={keyElements.className}
          action={() => {}}
        />
      );

      const expectedButtonText = screen.queryByRole("button", {});

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
