import { Square } from "./Square"

export function Turn ({turn}){

  return(
    <section className='turn'>
      <Square isSelected={true}>
        {turn} 
      </Square>
    </section>
  )
}