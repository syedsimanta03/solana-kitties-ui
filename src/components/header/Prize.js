import '../../css/prize.css'
import { useContext } from 'react'
import { ButtonContext } from '../../hooks/globalToggle'

const Prize = () => {
 const { toggle, toggleFunction } = useContext(ButtonContext)
  return (
    <div className='prize-border-line'>
      <div className='MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between'>
        <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'>
          <div className='lucky-winner-left'>
            <img
              src='https://www.solkitties.net/static/media/money_dude.556fe00f74871bdb1b1e.png'
              alt='moneydude'
            />
            <div className='left-btn-div'>
              <label className='label'>Sweeping In</label>
              <p />
              <p className='counter'>00d : 00h : 00m : 00s</p>
            </div>
          </div>
        </div>
        <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'>
          <div className='lucky-winner-prize'>
            <div className='with-login-prize-data'>
              <div className='lottery-right-rays'>
                <p className='tsold'>
                  Tickets Sold: <span>22</span>
                </p>
                <img
                  src='https://www.solkitties.net/static/media/ticket.88d24dd1dbe6a57cf9d3.gif'
                  className='ticket-gif'
                  alt='ticket'
                />
                <img
                  src='https://www.solkitties.net/static/media/price_label.9e1f3693bd8e0f1bf6ca.png'
                  className='price-label'
                  alt='price label'
                />
              </div>
              <div className='price-time-div'>
                <div>
                  <span>Price</span>
                  <button className='price-btn-inner'>
                    <img
                      src='./images/eBjF8.jpg'
                      className='price-icon'
                      alt='price icon'
                    />{' '}
                    0.15
                  </button>
                </div>
                <div>
                  <button
                    className='wallet-adapter-button wallet-btn-connect timer-btn buy-tickets'
                    tabIndex={0}
                    type='button'
                    onClick={toggleFunction}
                  >
                    {!toggle ? (
                      <span style={{ color: '#222'}}>Connect</span>
                    ) : (
                      <span style={{ color: '#222'}}>Buy Tickets</span>
                    )}
                  </button>
                </div>
                <div>
                  <span>Amount</span>
                  <div className='kitty-number-main'>
                    <a href='#!' className='left-number-btn'>
                      +
                    </a>
                    <input
                      type='number'
                      className='kitty-number'
                      min={1}
                      max={10}
                      readOnly=''
                      defaultValue={1}
                    />
                    <a href='#!' className='right-number-btn'>
                      -
                    </a>
                  </div>
                </div>
              </div>
              <p className='max-ticket'>Kitties Family Sweeps Together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prize
