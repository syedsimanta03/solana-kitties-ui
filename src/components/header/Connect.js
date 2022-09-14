import { useContext } from 'react'
import {ButtonContext} from '../../hooks/globalToggle'
import '../../css/connect.css'


const Connect = () => {
 const { toggle, toggleFunction } = useContext(ButtonContext)
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
                      <div className='wallet-wrap' onClick={toggleFunction}>
                        <div className='connect-info'>
                          <img src='./images/Bl3zk.jpg' alt='login' />
                          {!toggle? (
                            <span>
                              Connect
                              <br /> Wallet
                            </span>
                          ) : (
                            <span className='disconnect'>
                              &nbsp;Emxx0txD6...
                              <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABcCAYAAAD0zUKRAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7Z3fUdtAEId/d7gAOoiBvEMqADogzwkkVBBSQaACSAUQSJ5DKoAOYgpI7FQQvwfrsnsWHrB9Glm+xZJvvxnjMdIw8HG6P7vak8GMnHfdTivDHgw26WM7fz0HHWQ42X9prtEATJmTSOZqC/gAhyP6uIpFYrC7v2ZuUXNaRQdrJTTHAe/o7RY1JyiWpLZbDjd4vku9FMbV6/cJYad9k6RukdSfqJlUxjn8QAOY6GNzqdxSa3Hpj3G7v2520QCeiM0vf26pZaT2jMHtIMMfCEO/ZN9YdJowaD3wpI8t01JJ5gUNIF+a9EcugpHYb133KSsYGNywhR6+VaGl8F1B3gV0QyfRgHE3sNg7XDM9KKXws4LWAMehE7ilqtTZsfnX7dAJA1rpqNTZsVe09kdgvsoDlUqths04oBLgH/AZSiXsivVRqgm4b6XW2oFSCevCU6w7KJXhwas97QAJ19Y6BxaKCCpWCBUrhIoVQsUKoWKFULFCtJAgPkyaUebZYJPiIT1aup/EjokkJ3aUfTbDhREthFjCHgX6d99EXMIn1xXYzN8j0R779iplT25I7hYikV4fa4I5vahy02uxDr2Cw9HkJif23uKMQ6IFp0SRm5xYGv37nG6SlpvkPJanVtJyk10gSMtNeuUlKTf5Ja2UXI0VQEauis2JLVfFPiKmXBU7Riy5KnYKMeSq2ADzylWxBcwjVyTQzfVh9BYttrlwHE4o3HhecMaD3FGwPLrYy647NcOCu+WhVP3mU7lRu4LLX+5o6aTOhpfLV2xUsdb4cszUWV3JsKeDlwB01fajim1KOaYkPIO4X0HcPnZ/wxzTT0759nrOTrzmaVr0WQHJPaLO+6xVwwLnqrgMbWNwiuKqzf79sMJIZrrF5HeV9LAE+Bs8hnPY0lIZHbwKKLlnw4RURsUGmEcqo2KnMK9URsWOEUMqo2IfEUsqo2JzYkplVCziS2WSFyshlUlarJRUJlmxklKZJMVKS2WSFCstlUlOLKWP3kNYKpOcWPcMUpnkxPJ2foFD0aQyyYkdWFwAE7uHRJXKJFncwRIpP3fIm15yKok+v4q9sVCStbQsl94u8pcIGisQQsUKoWKFULFCqFghVKwQKlYIFtubdsBYvIBSGcubzUw7YBx2oFTGDrLgdqbtfDdkpQLWWlyHDhroHdpV8WULV7/dX4TupmvIY57qxnBWUHSzsMM554igzIQXyxvQIBwA5sTbd5U7G16sD6MV3+Lun5ikcsszWiCU2DbJPzbla9dx17A8VYdCzPXYKXp1Mie/+zznqSilct2kh1006kFplE75eLBhztAAplaJ1lgu56vW8tRKrZkahOHEGifYXP0qX3w5JRpAMLrF/dnBulnzJeU1goJDPTSAsg/85UHtmFrwtllgYRxfQf6f3QDKVeI/wgdm6HKklrOZP6emDXm4T+Xu6bApM4P/3447yPEnqBYAAAAASUVORK5CYII='
                                alt='Disconnect'
                              ></img>
                            </span>
                          )}
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
