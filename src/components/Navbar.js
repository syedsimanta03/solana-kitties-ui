import '../css/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='top-bar' id='navBar'>
        <div className='main-layout'>
          <div className='main-container display-flex-center'>
            <div className='logo-main'>
              <img
                className='logo'
                src='https://www.solkitties.net/static/media/logo.f407d22a451cccd9b193.png'
                alt='logo'
              />
              <span className='logo-title'>Sol Kitties</span>
            </div>
            <div className='menus'>
              <span className='top-menu top-mr'>Verify</span>
              <span className='top-menu top-mr'>Staking</span>
              <span className='top-menu top-mr'>Sweepers</span>
              <span className='top-menu top-mr'>Roadmap</span>
              <span className='top-menu top-mr'>FAQ</span>
              <span className='top-menu top-mr'>Whitepaper</span>
            </div>
            <div className='top-social'>
              <a
                href='http://discord.gg/solkitties'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='https://www.solkitties.net/static/media/1y_v2.816525cdbb9c19405a83.png'
                  alt='joinDiscord'
                  className='white-paper-img'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className='mobile-nav' id='mobileNav'>
        <div className='mobile-left-logo'>
          <div className='menu-list'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='#FFD029'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
          <div className='logo-main'>
            <img
              className='logo'
              src='https://www.solkitties.net/static/media/logo.f407d22a451cccd9b193.png'
              alt='logo'
            />
            <span className='logo-title'>Sol kittes</span>
          </div>
        </div>
        <div className='top-social'>
          <a
            href='http://discord.gg/solkitties'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://www.solkitties.net/static/media/1y_v2.816525cdbb9c19405a83.png'
              alt='joinDiscord'
              className='white-paper-img'
            />
          </a>
        </div>
        {/*make 70% width onClick hamburger icon */}
        <div className='sub-menu' style={{ width: 0 }}>
          <div>
            <div className='logo-main'>
              <img
                className='logo'
                src='https://www.solkitties.net/static/media/logo.f407d22a451cccd9b193.png'
                alt='logo'
              />
              <span className='logo-title'>Sol Kittes</span>
            </div>
            <div className='mobile-item'>Verify</div>
            <div className='mobile-item'>
              <span>Staking</span>
            </div>
            <div className='mobile-item'>Sweepers</div>
            <div className='mobile-item'>
              <span>Roadmap</span>
            </div>
            <div className='mobile-item'>
              <span>Faq</span>
            </div>
            <div className='mobile-item'>
              <span>Whitepaper</span>
            </div>
          </div>
          {/* make visible/render onClick hamburger icon*/}
          {/* <div className='overlay'></div> */}
        </div>
      </div>
    </>
  )
}

export default Navbar