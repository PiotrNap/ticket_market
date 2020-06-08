import IconFanprotect from '../icons/fanprotect';

export default () => {
  return (
    <div className='footer'>
      <div className='footer__main'>
        <div className='footer__main-icons'>
          <IconFanprotect />
          <div className='icon-1'>
            <p>Buy and sell with confidence</p>
          </div>
          <div className='icon-2'>
            <p>Customer service from beginning to your seat</p>
          </div>
          <div className='icon-3'>
            <p>Each order with 100% guaranty</p>
          </div>
        </div>
        <div className='footer__menu-clm1'>
          <p>Get more info</p>
          <ul>
            <li>Why choose us</li>
            <li>How does it work</li>
            <li>Quick steps</li>
            <li>FAQ</li>
            <li>Visit our blog</li>
            <li>See all Plans</li>
          </ul>
        </div>
        <div className='footer__menu-clm2'>
          <p>Quick Links</p>
          <ul>
            <li>All Categories</li>
            <li>Privacy Policy</li>
            <li>Carrers</li>
            <li>Terms of Use</li>
            <li>Support Desk</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <div className='copyright__text'>
          © {new Date().getFullYear()} Ticket Market. by Piotr N.
        </div>
      </div>
      {/* <style jsx>{`
        div.footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 5rem;
        }
      `}</style> */}
    </div>
  );
};
