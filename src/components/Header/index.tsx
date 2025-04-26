import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="bg-black p-7 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-35 h-auto" />
      </div>
    </header>
  );
}
