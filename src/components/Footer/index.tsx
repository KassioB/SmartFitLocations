import Logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <footer className="bg-neutral-700 p-7 shadow-md w-full fixed bottom-0 left-0 z-50">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-20 h-auto" />
      </div>
      <p className='text-white text-xs flex justify-center items-center'>Todos os direitos reservados - 2020 </p>
    </footer>
  );
}
