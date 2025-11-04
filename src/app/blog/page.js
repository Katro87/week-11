
import MyCard from '@/components/custom/Mycard'
import { Mydialog } from '@/components/custom/Mydialog'
import React from 'react'

function Blog() {
  return (
    <div className='bg-yellow-400'>
      <Mydialog 
       name="Add Blog"
       edit="Add Blog"
      />
      <div className='grid grid-cols-4 p-2 gap-4 m-5'>
        <MyCard
          blog="Blog 1"
        />
        <MyCard
          blog="Blog 2"
        />
        <MyCard
          blog="Blog 3"
        />
        <MyCard
          blog="Blog 4"
        />
        <MyCard
          blog="Blog 5"
        />
      </div>
    </div>
  )
}

export default Blog