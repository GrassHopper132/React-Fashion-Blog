
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <h1>Sartorialist's Journal</h1>
      <h2>Better Dressed People</h2>
      <Nav 
        ariaLabel="Main Navigation" 
        navClass="nav-main" 
        anchorClass="nav-link-main" 
      />
    </header>
  );
}
