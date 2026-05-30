import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

function App() {

 const users=[
    {
      img:"https://images.unsplash.com/photo-1773332598451-8a0a59941912?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      color:"royalblue",
      intro:"I build practical, scalable solutions with a focus on performance and real-world usability. I prefer execution over noise and results over assumptions. ",
      tag:"satisfied"
    },
    {
       img:" https://images.unsplash.com/photo-1631456172053-cc01d5dd7f2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color:"lightgreen",
      intro:"I am a creative problem-solver with a passion for building innovative products. I thrive in collaborative environments and enjoy tackling complex challenges.",
      tag:"underbanked"
    },

    {
       img:" https://images.unsplash.com/photo-1608768495409-ee54a1a9d875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color:"lightseagreen",
      intro:"I am a results-driven product manager with a proven track record of delivering successful products. I am passionate about creating user-centric solutions that solve real problems.",
      tag:"underserverd"
    },
    {
        img:" https://plus.unsplash.com/premium_photo-1661585588037-9a3e75a85933?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color:"lightcoral",
      intro:"I am a strategic thinker with a strong business acumen. I excel at identifying market opportunities and developing strategies to capitalize on them.",
      tag:"unbanked"

    }
 ]

  
  return (
    <div >
    <Section1  users={users} />
    <Section2 />
    </div>
  )
}

export default App
