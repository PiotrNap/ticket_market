import Logo from './Logo';
import Menu from './Menu';

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
