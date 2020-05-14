import React, { Component } from 'react'

import Typical from 'react-typical'

export class TypicalText extends Component {
  render () {
    return (
      <Typical
        steps={['“forexample”', 1000, '“meeting with client @2:20pm”', 1000,'“Watch movies at netflix @10:30pm”',1000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}
