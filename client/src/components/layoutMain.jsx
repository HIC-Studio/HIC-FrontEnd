import { Children } from 'react'

function LayoutMain({children}) {
  return (
    <div className='relative h-[calc(100vh-64px)] w-full'>
      {children}
    </div>
  )
}

export default LayoutMain
