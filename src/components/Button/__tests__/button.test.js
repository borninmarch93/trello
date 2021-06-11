import { render } from '@testing-library/react';
import Button from "../index";

describe("button", () => {
    test("that text is correct", () => {
        const result = render(<Button>show</Button>);
        expect(result.getByText(/show/i)).toBeInTheDocument();
    })

    test("that classes are correct", () => {
        const result = render(<Button variant="primary">show</Button>);
        const className = result.getAllByRole("button")[0].className;
        expect(className).toBe("btn btn--primary");
    })

    test("that type is correct", () => {
        const result = render(<Button type="submit">show</Button>);
        const buttonType = result.getAllByRole("button")[0].type;
        expect(buttonType).toBe("submit");
    })
})