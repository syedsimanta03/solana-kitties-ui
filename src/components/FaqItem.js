import useToggle from '../hooks/toogle'

const FaqItem = ({q, a}) => {
  const [show, setShow] = useToggle()

  return (
    <div
      onClick={() => setShow((show) => !show)}
      className='MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded'
    >
      <div
        className='MuiButtonBase-root MuiAccordionSummary-root'
        tabIndex={0}
        role='button'
        aria-disabled='false'
        aria-expanded='false'
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <div className='MuiAccordionSummary-content'>
          <p className='MuiTypography-root jss12 MuiTypography-body1'>{q}</p>
        </div>
        <div
          className='MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd'
          aria-disabled='false'
          aria-hidden='true'
        >
          <span className='MuiIconButton-label'>
            <img
              src='https://www.solkitties.net/assets/images/down-arrow.png'
              className={`jss11 ${show ? 't' : 'b'}`}
            />
          </span>
          <span className='MuiTouchRipple-root' />
        </div>
      </div>
      <div
        className={`MuiCollapse-root ${
          show ? 'minHeight: 0' : 'MuiCollapse-hidden minHeight: 40'
        }`}
      >
        <div className='MuiCollapse-wrapper'>
          <div className='MuiCollapse-wrapperInner'>
            <div
              aria-labelledby='panel1bh-header'
              id='panel1bh-content'
              role='region'
            >
              <div className='MuiAccordionDetails-root'>
                <p
                  className='MuiTypography-root jss12 MuiTypography-body1'
                  style={{ marginRight: 5 }}
                >
                  A:
                </p>
                <p className='MuiTypography-root jss13 MuiTypography-body1'>
                  {a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqItem