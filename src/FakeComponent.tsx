import React from "react"
import LeftComponent from "./modules/ODSimport/components/LeftComponent/LeftComponent"
import RightComponent from "./modules/ODSimport/components/RightComponent/RightComponent"


export default class Ratings extends React.Component {
  override render () {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <LeftComponent />
        </div>
        <div>
          <RightComponent />
        </div>
      </div>
    )
  }
}

