import MenuItem from "./MenuItem";

const links = [
  { name: "Home", path: "/" },
  { name: "Carrinho", path: "/carrinho" },
];

const Menu = () => {
  return (
    <ul className="navbar-nav me-auto">
      {links.map((link) => (
        <MenuItem key={link.path} link={link} />
      ))}
    </ul>
  );
};

export default Menu;
