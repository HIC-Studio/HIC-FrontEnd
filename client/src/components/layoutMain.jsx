import { Children } from 'react'

function LayoutMain({children}) {
  return (
    <div className='relative h-screen w-screen '>
      {children}
    </div>
  )
}

export default LayoutMain
