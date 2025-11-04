import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Homepage() {
  return (
    <div className='bg-yellow-400 min-h-screen flex items-center justify-center flex-col gap-2'>
      <h1 className='text-3xl font-bold'>Explore Our Blogs</h1>
       <Button >
         <Link href={"/blog"}>Explore</Link>
       </Button>
    </div>
  )
}

export default Homepage