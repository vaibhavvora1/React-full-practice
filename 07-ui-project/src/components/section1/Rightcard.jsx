
import Rightcardcontent from './Rightcardcontent'


function Rightcard(props) {
  return (
    <div
      data-right-card
      className='right-content-card relative h-full w-80 shrink-0 overflow-hidden rounded-4xl'
    >
            <img className='h-full w-full object-cover' src={props.elem} alt="" />
           
            <Rightcardcontent 
            id={props.id}
            intro={props.intro}
            tag={props.tag}
            color={props.color}
            />   
      
    </div>
  )
}

export default Rightcard
