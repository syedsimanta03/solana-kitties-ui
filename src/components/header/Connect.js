import '../../css/connect.css'

const Connect = () => {
  return (
    <>
      <div className='MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between'>
        <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-5 MuiGrid-grid-lg-5'>
          <div className='title-img'>
            <img
              src='https://www.solkitties.net/static/media/sweepers_title.e2a3a2d4bfb8d9a1dcba.png'
              alt='sweepers title'
            />
          </div>
        </div>
        <div className='MuiGrid-root wallet-wrapper not-login MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-7 MuiGrid-grid-lg-7'>
          <div className='MuiGrid-root main-inner-container MuiGrid-container MuiGrid-spacing-xs-2'>
            <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6' />
            <div className='MuiGrid-root wallet-inner-wrapper main-inner-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'>
              <div className='wallet-button'>
                <div className='sol-kitties-right-coin'>
                  <div className='balance-info-outer'>
                    <button
                      className='wallet-adapter-button wallet-btn-connect'
                      tabIndex={0}
                      type='button'
                    >
                      <div className='wallet-wrap'>
                        <div className='connect-info'>
                          <img src='./images/Bl3zk.jpg' alt='login' />
                          <span>
                            Connect
                            <br /> Wallet
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
