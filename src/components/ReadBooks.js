import React, { Component } from 'react'

import PageFormat from './utils/PageFormat'
import Book from './utils/Book'

const ellipseFullPurple = {
  left: 71.2 + '%',
  right: 9.41 + '%',
  top: 20.42 + '%',
  bottom: 70.62 + '%',
  width: 72.73 + 'px',
  height: 72.73 + 'px'
}

const ellipseHalfOrange = {
  width: 75 + 'px',
  height: 75 + 'px',
  left: -5.6 + '%',
  right: 85.6 + '%',
  top: 4.93 + '%',
  bottom: 85.84 + '%'
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

const bookLeaf1 = {
  position: 'absolute',
  width: 31.17 + 'px',
  height: 64.82 + 'px',
  left: 12.5 + '%',
  right: 52.08 + '%',
  top: 6.27 + '%',
  bottom: 20.07 + '%',
  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)'
}

const bookLeaf2 = {
  position: 'absolute',
  width: 31.17 + 'px',
  height: 64.82 + 'px',
  left: 52.08 + '%',
  right: 12.5 + '%',
  top: 6.27 + '%',
  bottom: 20.07 + '%',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)'
}

const bookBase = {
  position: 'absolute',
  //   width: 48 + 'px',
  height: 48 + 'px',
  left: 2.08 + 'rem',
  top: 14.58 + 'rem',
  right: 2.08 + '%',
  bottom: 6.25 + '%',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)'
}
class ReadBooks extends Component {
  render () {
    return (
      <PageFormat
        ellipsePurpleStyle={ellipseFullPurple}
        ellipseOrangeStyle={ellipseHalfOrange}
        ellipseSmallStyle={ellipseSmall}
        ellipseHalfBotStyle={ellipseHalfBot}
        headingPrimStyle={headingPrim}
        text='Read Book'
        ellipseFullBck='linear-gradient(73.12deg, #25CED1 -19.51%, #34E6E9 58.02%, #6AFCFF 138%)'
        skip='/Review'
        next='/Signup'
        mainText='Skip Intro'
        insideFullEllipse={<Book />}
      />
    )
  }
}

export default ReadBooks
