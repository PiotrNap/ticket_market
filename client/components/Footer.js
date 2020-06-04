export default () => {
  return (
    <div className='footer'>
      <div className='copyright'>
        © {new Date().getFullYear()} Ticket Market. by Piotr N.
      </div>
      <style jsx>{`
        div.footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 5rem;
        }
      `}</style>
    </div>
  );
};
