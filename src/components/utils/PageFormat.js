import React from 'react'

import '../../styles/base.scss'
import '../../styles/ReadBook.scss'

const PageFormat = props => {
  return (
    <div>
      <div className='center'>
        <div className='page'>
          <div className='ellipse-half' style={props.ellipseOrangeStyle} />
          <div
            className='ellipse-full-purple'
            style={props.ellipsePurpleStyle}
          />
          <div
            className='ellipse-full'
            style={{
              background: props.ellipseFullBck
            }}
          />
          <div className='heading-primary' style={props.headingPrimStyle}>
            {props.text}
          </div>
          <div className='heading-sub' style={props.headingSubStyle}>
            create an account to get started. After that you can share book and
            make friends
          </div>
          <div>{props.form}</div>
          <div style={props.ellipsePurpleStyleBig} />
          <div>{props.insideFullEllipse}</div>
          <div className='rectangle' />
          <div className='ellipse-tiny ellipse-tiny--2' />
          <div className='ellipse-tiny ellipse-tiny--1' />
          <a href={props.skip} style={props.ellipseSmallStyle}>
            <span className='arrow'>&rarr;</span>
          </a>
          <div style={props.ellipseHalfBotStyle} />
          <a href={props.next} className='text-primary'>
            <span
              style={{
                textDecorationLine: 'none !important'
              }}
            >
              {props.extraText}
            </span>
            {props.mainText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageFormat
