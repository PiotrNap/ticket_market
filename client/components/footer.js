export default () => {
  return (
    <div className='footer'>
      <div>© {new Date().getFullYear()} Ticket Market. by Piotr N.</div>
      <style jsx>{`
        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 5rem;
        }
      `}</style>
    </div>
  );
};
