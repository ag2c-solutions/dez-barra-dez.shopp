export const FooterLayout = () => {
    return(
        <footer className="bg-white w-full border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Contato
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Termos de Serviço
            </a>
          </div>
          <div className="text-center text-sm text-gray-400">Developed by AG2C - Todos os direitos reservados.</div>
        </div>
      </footer>
    )
}