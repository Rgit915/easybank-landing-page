import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg"

const Header = () => {
  return (
    <>
    <header className="relative z-50 flex justify-between items-center w-full bg-white p-8">
      <nav className="flex justify-between items-center w-full">
      <img src={logo} alt='Easybank logo'/>
        <ul className="hidden md:flex md:justify-around md:items-center w-1/3 gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>careers</li>
        </ul>
      <button className="request-button hidden md:flex">Request Invite</button>
      <button className="menu md:hidden ">
      <img src={hamburgerMenu} alt='Hamburger Menu'/>
      </button>
      </nav>
    </header>
    </>
  )
}

export default Header