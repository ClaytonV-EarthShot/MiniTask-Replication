

export default function InfoBox(bgName) {
  return (
    <>
      <div className='infoBoxContainer' style={{backgroundImage: `url(${bgName}`, width:'auto', height: 'auto'}}>
          <p className='infoTopLeft'>#1</p>
          <p className='infoTopRight'>#1</p>

      </div>
    </>
  )
}