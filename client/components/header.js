import Logo from './logo';
import Menu from './menu';

export default ({ currentUser }) => {
  return (
    <header className='navbar navbar-light'>
      <Logo currentUser={currentUser} />
      <Menu currentUser={currentUser} />
      <style jsx>{`
        header {
          margin: auto;
          max-width: 90%;
          border-bottom: 1px solid #1d1d1d;
        }
      `}</style>
    </header>
  );
};
