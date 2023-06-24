
import {render} from '@testing-library/react'
import Index from "./index";
//jest --updateSnapshot 更新快照
//最好用watch模式，w u交互更新
describe("Index", () => {
  it("should render", () => {
    const {container} = render(<Index />)
    
    expect(container).toMatchSnapshot();
    const title = container.querySelector(".title")
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent("Hello world!")
  });
})