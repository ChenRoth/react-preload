import React, { PropTypes } from 'react'

const MyComponent = () =>
  <div>
    <span className="heading">Title</span>
  </div>

MyComponent.propTypes = {
  foo: PropTypes.string,
}

export default MyComponent
