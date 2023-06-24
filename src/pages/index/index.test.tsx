
import {render} from '@testing-library/react'
import Index from "./index";

describe("Index", () => {
  it("should render", () => {
    const {container} = render(<Index />)
    
    expect(container).toMatchSnapshot();
    const title = container.querySelector(".title")
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent("Hello world!")
  });
})