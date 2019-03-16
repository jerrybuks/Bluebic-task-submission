import React from 'react'
import PageFormat from './utils/PageFormat'
import Form from './utils/Form'
import '../styles/base.scss'

const ellipseHalfPurple = {
  position: 'absolute',
  left: -57 + 'px',
  top: -139 + 'px',
  width: 299 + 'px',
  height: 299 + 'px',
  background:
    'linear-gradient(315deg, rgba(255, 255, 255, 0.61) 3.5%, rgba(121, 171, 252, 0.61) 93.61%, rgba(96, 108, 255, 0.61) 147.83%)',

  borderRadius: 50 + '%'
}

const ellipseFullPurple = {
  left: 78.13 + '%',
  right: 7.03 + '%',
  top: 43.62 + '%',
  bottom: 49.53 + '%',
  width: 55.55 + 'px',
  height: 55.55 + 'px'
}

const ellipseFullOrange = {
  width: 136 + 'px',
  height: 136 + 'px',
  left: 33.33 + '%',
  right: 30.4 + '%',
  top: 8.25 + '%',
  bottom: 75 + '%',
  zIndex: 1,
  background: 'linear-gradient(147.47deg, #FEB665 24.48%, #F66EB4 118.65%)'
}

const headingPrimSign = {
  left: 0 + '%',
  right: 0 + '%',
  top: 30 + '%',
  bottom: 0 + '%'
}

const headingSubSign = {
  left: 0 + '%',
  right: 0 + '%',
  top: 35 + '%',
  bottom: 60.1 + '%'
}

const Signup = () => {
  return (
    <div>
      <PageFormat
        ellipsePurpleStyleBig={ellipseHalfPurple}
        ellipseOrangeStyle={ellipseFullOrange}
        ellipsePurpleStyle={ellipseFullPurple}
        headingPrimStyle={headingPrimSign}
        headingSubStyle={headingSubSign}
        text='Welcome!'
        skip='/Signup'
        next='Signup'
        form={<Form />}
        extraText='Already have an account?'
        mainText='Login'
      />
    </div>
  )
}

export default Signup
