export const DivFollower = ({position, enabled}) => {
  
  if(!enabled)return

  const {x,y} = position

  return(
    <div style={{
      position: 'absolute',
      inset: -15,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '50%',
      border: '1px solid #fff',
      width: '40px',
      height: '40px',
      transform: `translate(${x}px, ${y}px)`,
      pointerEvents: 'none'
    }}/>
  )
}