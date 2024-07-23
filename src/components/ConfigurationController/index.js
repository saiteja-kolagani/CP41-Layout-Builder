import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const handleToggleContent = () => {
        onToggleShowContent()
      }

      const handleToggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const handleToggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-bg">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              onChange={handleToggleContent}
              checked={showContent}
            />
            <label htmlFor="content" className="checkbox-label">
              Content
            </label>
            <br />
            <input
              type="checkbox"
              id="left-navbar"
              onChange={handleToggleLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="left-navbar" className="checkbox-label">
              Left Navbar
            </label>
            <br />
            <input
              type="checkbox"
              id="right-navbar"
              onChange={handleToggleRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="right-navbar" className="checkbox-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
