import '../css/faq.css'
import FaqItem from './FaqItem'

const Faq = () => {
  return (
    <section className='faq-wrapper faq-lottery' id='faq'>
      <div className='wrapper-container'>
        <div className='main-container aos-init aos-animate' data-aos='fade-up'>
          <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2'>
            <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12'>
              <div id='faq' className='sc-caiLqq iCRuFu'>
                <div className='main-layout'>
                  <div className='main-container'>
                    <h1 className='roadmap-title mt-0'>FAQ</h1>
                    <div className='jss10'>
                      {/* faq item */}
                      <FaqItem
                        q='Q: What is Kitties Sweepers?'
                        a='A: Kitties Sweepers is a special community sweep event for 3D Sol Kitties on Magic Eden.'
                      />
                      <FaqItem
                        q='Q: How do I create and fund my Solana wallet?'
                        a='A:

Using Chrome, go to Phantom, download and install the Phantom wallet extension. Once the extension is installed, run the program and create a wallet. Then, to fund it, go to Coinbase or Binance (any exchange that sells and supports Solana token transfer) and purchase SOL. Once you have SOL, send it to your SOL address in your Phantom wallet.'
                      />
                      <FaqItem
                        q='Q: Why would I want to buy a sweeper ticket?'
                        a='A: Post event, we will be airdropping 50% of the swept kitties to sweeper ticket owners (the other 50% will be burnt).'
                      />
                      <FaqItem
                        q='Q: What was the thought behind Kitties Sweeper?'
                        a='A: Our aim is to develop a community centric approach for market stabilization that is sustainable long-term, unlike individual sweeps.'
                      />
                      <FaqItem
                        q='Q: What would the project gain from this event?'
                        a='A: Kitties Sweepers would reduce the supply for the 3D Collection and develop higher demand, likely resulting an increase of the Floor Price.'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
