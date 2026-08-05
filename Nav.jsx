
export default function Nav({ ariaLabel, navClass, anchorClass }) {
  const links = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];

  return (
    <nav aria-label={ariaLabel} role="navigation">
      <ul className={navClass}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className={anchorClass}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
