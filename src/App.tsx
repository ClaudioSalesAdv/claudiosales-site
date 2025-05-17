import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Scale, Briefcase, Heart, Building2, ScrollText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Fixo */}
<nav className="sticky top-0 z-50 bg-white shadow-md">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    <span className="text-lg font-bold text-red-700">Dr. Claudio Sales</span>
    <ul className="flex space-x-6 font-medium">
      <li>
        <a href="#hero" className="text-gray-700 hover:text-red-700 transition">Início</a>
      </li>
      <li>
        <a href="#areas" className="text-gray-700 hover:text-red-700 transition">Áreas</a>
      </li>
      <li>
        <a href="#contato" className="text-gray-700 hover:text-red-700 transition">Contato</a>
      </li>
    </ul>
  </div>
</nav>
      {/* Hero Section */}
      <header id="hero" className="relative h-[60vh] bg-gray-900 text-white scroll-mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")',
            opacity: '0.4'
          }}
          role="img"
          aria-label="Escritório de advocacia"
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Dr. Claudio Sales</h1>
          <p className="text-2xl mb-6">Advocacia especializada</p>
          <div className="flex gap-4">
            <a href="#contato" className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold transition">
              Fale Conosco
            </a>
            <a href="#areas" className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Áreas de Atuação
            </a>
          </div>
        </div>
      </header>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Áreas de Atuação</h2>

    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-red-700 mb-6">Pessoa Física</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="p-6 bg-gray-50 rounded-lg">
          <Briefcase className="w-12 h-12 text-red-700 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Direito Cível</h4>
          <p className="text-gray-600">Contratos, pensão alimentícia, divórcio, danos morais, imóveis e aluguéis.</p>
        </article>
        <article className="p-6 bg-gray-50 rounded-lg">
          <Building2 className="w-12 h-12 text-red-700 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Direito Trabalhista</h4>
          <p className="text-gray-600">Reclamatórias, demissões, verbas rescisórias e acordos extrajudiciais.</p>
        </article>
        <article className="p-6 bg-gray-50 rounded-lg">
          <Shield className="w-12 h-12 text-red-700 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Direito do Consumidor</h4>
          <p className="text-gray-600">Indenizações, cobranças indevidas, contratos abusivos e vícios de produto.</p>
        </article>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-red-700 mb-6">Pessoa Jurídica (B2B)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="p-6 bg-gray-50 rounded-lg">
          <Scale className="w-12 h-12 text-red-700 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Gestão de Ofícios Criminais (Law Enforcement)</h4>
          <p className="text-gray-600">Atendimento jurídico completo e contínuo para empresas, com controle, resposta e rastreio de ofícios judiciais e administrativos, com integração aos times de compliance e jurídico interno.</p>
        </article>
      </div>
    </div>
  </div>
</section>

      {/* Diferencial */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-red-500" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Comprometimento com o cliente</h3>
              <p>Atendimento eficiente e comunicação transparente em todas as etapas</p>
            </article>
            <article className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-red-500" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p>Equipe altamente qualificada e especializada</p>
            </article>
            <article className="text-center">
              <Scale className="w-12 h-12 mx-auto mb-4 text-red-500" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Ética e Transparência</h3>
              <p>Compromisso com a conduta ética e transparente em todas as etapas do seu processo</p>
            </article>
          </div>
        </div>
      </section>
{/* Depoimentos de Clientes */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <article className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 italic">"Profissional excelente, atencioso e muito competente. Resolveu meu caso com rapidez e clareza."</p>
        <p className="mt-4 font-semibold text-red-700">Maria Oliveira</p>
      </article>

      <article className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 italic">"Atendimento impecável, recomendo de olhos fechados! Explicações claras e objetivas."</p>
        <p className="mt-4 font-semibold text-red-700">João Mendes</p>
      </article>

      <article className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 italic">"Honesto, rápido e extremamente profissional. Sem dúvidas o melhor advogado que já contratei."</p>
        <p className="mt-4 font-semibold text-red-700">Fernanda Costa</p>
      </article>

    </div>
  </div>
</section>
      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-700 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <address className="text-gray-600 not-italic">
                    Rua Correia Dias, 161<br />
                    Paraíso, São Paulo - SP<br />
                    <span className="text-sm">Ao lado do metrô Paraíso</span>
                  </address>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-700 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <a href="tel:+5511912278026" className="text-red-700 hover:text-red-800">
                    (11) 91227-8026
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-700 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a href="mailto:claudiosales.adv@gmail.com" className="text-red-700 hover:text-red-800">
                    claudiosales.adv@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-red-700 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© Dr. Claudio Sales</p>
          <p className="text-sm text-gray-400">Todos os direitos reservados</p>
        </div>
      </footer>
      {/* Botão WhatsApp Flutuante */}
<a
  href="https://wa.me/5511912278026"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale conosco pelo WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.78 11.78 0 0012.13 1a11.7 11.7 0 00-10.3 6.14A11.5 11.5 0 001 12.14c0 1.78.44 3.52 1.27 5.07L1 23l5.9-1.55a11.7 11.7 0 005.63 1.44h.06a11.5 11.5 0 008.1-3.37A11.7 11.7 0 0023 12.12a11.8 11.8 0 00-2.48-8.64zM12.13 21a9.46 9.46 0 01-4.82-1.3l-.34-.2-3.5.93.94-3.42-.22-.35a9.53 9.53 0 01-1.43-5A9.7 9.7 0 0112.13 3a9.67 9.67 0 017.15 3.13A9.75 9.75 0 0121 12.14a9.48 9.48 0 01-8.87 8.86zm5-6.89c-.27-.14-1.6-.8-1.85-.9s-.43-.13-.62.13-.7.9-.86 1.08-.32.2-.59.07a7.82 7.82 0 01-2.3-1.43 8.49 8.49 0 01-1.6-2c-.17-.28 0-.43.13-.57.13-.13.3-.34.45-.52s.2-.3.3-.5a.52.52 0 000-.51c-.07-.14-.62-1.5-.85-2.06s-.45-.47-.63-.48H8c-.2 0-.51.07-.78.34s-1 1-1 2.43a8.55 8.55 0 001.82 4.74 9.93 9.93 0 004.13 3.25c.57.24 1.01.38 1.36.48a3.27 3.27 0 001.49.09 2.47 2.47 0 001.62-1.16 2 2 0 00.14-1.16c-.06-.12-.23-.19-.5-.33z" />
  </svg>
</a>

    </div>
  );
}

export default App;