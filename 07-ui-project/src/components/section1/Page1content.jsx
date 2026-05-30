import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'


function Page1content(props) {
  return (
    <div className='pb-16  pt-6  h-[90vh] flex items-center gap-10 '>

        <Leftcontent />
        <Rightcontent users={props.users} />
      
    </div>
  )
}

export default Page1content
