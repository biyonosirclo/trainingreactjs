import React from 'react'
import ContactLeft from '../components/konten/ContactLeft'
import ContactRight from '../components/konten/ContactRight'

const Contact = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <ContactLeft />
            </div>
            <div className='col-md-6'>
                <ContactRight />
            </div>
        </div>
    </div>
  )
}

export default Contact