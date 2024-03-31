import Footer from '@/components/home/Footer'
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'

export default function page() {
  return (
      <>
          <CustomContainer>
          <div className='flex flex-col h-72 items-center justify-center'>
            <h3 className='font-bold text-3xl text-primary'>Thank You For your Request</h3>
            <p className='font-semibold text-lg'>We will contact you soon</p>
          </div>
      </CustomContainer>
          <Footer />
      </>
  )
}
