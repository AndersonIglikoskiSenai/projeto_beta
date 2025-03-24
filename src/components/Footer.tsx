
function Footer() {


const AnoAtual = new Date().getFullYear();


  return (
    <footer className="bg-gray-800 text-white p-4 text-center w-screen">
      <p>
        &copy; {AnoAtual} - SENAI - Todos os direitos reservados
      </p>
    </footer>
  )
}




export default Footer;