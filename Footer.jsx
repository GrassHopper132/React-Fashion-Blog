import Nav from './Nav';

export default function Footer() {
  return (
    <footer>
      <Nav 
        ariaLabel="Footer Navigation" 
        navClass="nav-footer" 
        anchorClass="nav-link-footer" 
      />
      <p className="copyright">&copy; 2020 Valet Industries, Inc</p>
    </footer>
  );
}
