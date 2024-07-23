import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-bg">
          {showLeftNavbar && (
            <div className="left-navbar box">
              <h2>Left Navbar Menu</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-box box">
              <h2>Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar box">
              <h2>Right Navbar</h2>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
