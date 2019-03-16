import React from 'react'
import PageFormat from './utils/PageFormat'
import Star from './utils/Star'

const ellipseHalfPurple = {
  left: 54.67 + '%',
  right: 10.06 + '%',
  top: -6.03 + '%',
  bottom: 89.74 + '%',
  width: 100 + 'px',
  height: 100 + 'px'
}

const ellipseFullOrange = {
  width: 35 + 'px',
  height: 35 + 'px',
  left: 9.87 + '%',
  right: 80 + '%',
  top: 11.95 + '%',
  bottom: 83.37 + '%'
}

const headingPrim = {
  left: 0 + '%',
  right: 0 + '%',
  top: 55 + '%',
  bottom: 0 + '%'
}

const ellipseHalfBot = {
  position: 'absolute',

  width: 272 + 'px',
  height: 272 + 'px',
  position: 'absolute',
  left: -6 + '%',
  right: 40 + '%',
  top: 86 + '%',
  bottom: -24.69 + '%',
  borderRadius: 50 + '%',

  background:
    'linear-gradient(228.76deg, rgba(45, 238, 249, 0.15) -34.42%, rgba(224, 132, 241, 0.15) 127.18%)',

  transform: 'rotate(-15.82deg)'
}
const ellipseSmall = {
  position: 'absolute',
  width: 48 + 'px',
  height: 48 + 'px',
  left: 27 + 'rem',
  top: 64.6 + 'rem',
  borderRadius: 50 + '%',

  background: 'linear-gradient(125.58deg, #BAFB67 -5.37%, #00D23A 196.64%)'
}

const Review = () => {
  return (
    <PageFormat
      ellipsePurpleStyle={ellipseHalfPurple}
      ellipseOrangeStyle={ellipseFullOrange}
      ellipseHalfBotStyle={ellipseHalfBot}
      ellipseSmallStyle={ellipseSmall}
      text='Review Them'
      headingPrimStyle={headingPrim}
      ellipseFullBck='linear-gradient(141.64deg, #FFF17C -3.59%, #FF8B8E 118.04%)'
      skip='/Signup'
      next='Signup'
      mainText='Skip Intro'
      insideFullEllipse={<Star />}
    />
  )
}

export default Review
