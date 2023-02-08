import React from 'react'

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}

export const withNewOrPopular = (OriginalComponent) => (props) => {
  const {views} = props

  return views >= 1000 ? (
    <Popular>
      <OriginalComponent {...props} />
    </Popular>
  ) : views < 100 ? (
    <New>
      <OriginalComponent {...props} />
    </New>
  ) : (
    <OriginalComponent {...props} />
  )
}
