import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='animate-spin transition-all duration-500 w-full h-[calc(100vh-500px)] flex justify-center items-center'>
      <Loader2 size={40}/>
    </div>
  )
}

export default Loading