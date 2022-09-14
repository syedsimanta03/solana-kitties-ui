import '../css/solavatar.css'

const Solavatar = () => {
  return (
    <div className='solanaAvatarArea  '>
      <div className='main-layout'>
        <div className='main-container'>
          <div className='MuiGrid-root MuiGrid-container'>
            <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-5'>
              <div className='kitty-footer'>
                <img src='https://www.solkitties.net/static/media/kitty-footer.294cd54adf976fdc69eb.png' />
              </div>
            </div>
          </div>
          <div className='MuiBox-root jss16 solana'>
            <p style={{ fontFamily: 'Orbitron', fontSize: '10.65px' }}>
              POWERED BY
            </p>
            <img src='./images/IvfNi.jpg' style={{ width: 158, height: 30 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solavatar
