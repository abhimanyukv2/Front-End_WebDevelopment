import { Star } from "./star";
import { render } from "@testing-library/react";

test("renders an h1", () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Cool Star/);
    expect(h1).toHaveTextContent("Cool Star");
})