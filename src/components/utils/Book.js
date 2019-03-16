import React from 'react'
import bookLeaf1 from '../../styles/svg/bookLeaf1.svg'
import bookLeaf2 from '../../styles/svg/bookLeaf1.svg'
import bookBase from '../../styles/svg/bookBase.svg'

const Book = () => {
  return (
    <div>
      <img src={bookLeaf1} alt='' className='book-leaf-one' />
      <img src={bookLeaf2} alt='' className='book-leaf-two' />
      <img src={bookBase} alt='' className='book-base' />
    </div>
  )
}

export default Book
