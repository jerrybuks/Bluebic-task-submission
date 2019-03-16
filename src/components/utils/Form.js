import React from 'react'

import '../../styles/base.scss'
const Form = () => {
  return (
    <div
      style={{
        margin: '5%',
        width: 80 + '%'
      }}
    >
      <form
        style={{
          position: 'absolute',
          top: 45 + '%'
        }}
      >
        <div>
          <div className='input-collection'>
            <div>
              <label for='email'>
                <b>Email</b>
              </label>
            </div>

            <input
              type='email'
              placeholder='ducawizard@gmail.com'
              name='email'
              required
            />
          </div>

          <div className='input-collection'>
            <div>
              <div>
                <label for='psw'>
                  <b>Password</b>
                </label>
              </div>

              <input
                type='password'
                placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                name='psw'
                required
              />
            </div>
          </div>

          <div className='input-collection'>
            <div>
              <div>
                <label for='psw'>
                  <b>Try password Again</b>
                </label>
              </div>

              <input
                type='password'
                placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                name='psw'
                required
              />
            </div>
          </div>

          <div>
            <button type='submit' className='btn'>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
