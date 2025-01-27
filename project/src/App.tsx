import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Scale, Briefcase, Heart, Building2, ScrollText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-gray-900 text-white">
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
              Atendimento Criminal 24h
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-6 bg-gray-50 rounded-lg">
              <Scale className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito Criminal</h3>
              <p className="text-gray-600">Atendimento 24h para flagrantes e audiência de custódia</p>
            </article>
            <article className="p-6 bg-gray-50 rounded-lg">
              <Briefcase className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito Civil</h3>
              <p className="text-gray-600">Resolução de conflitos, contratos, responsabilidade civil, pensão alimentícia, divórcio, imóveis e aluguéis</p>
            </article>
            <article className="p-6 bg-gray-50 rounded-lg">
              <Building2 className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito Trabalhista</h3>
              <p className="text-gray-600">Proteção dos seus direitos trabalhistas, ações e acordos laborais</p>
            </article>
            <article className="p-6 bg-gray-50 rounded-lg">
              <Heart className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito Previdenciário</h3>
              <p className="text-gray-600">Aposentadorias, benefícios e recursos junto ao INSS</p>
            </article>
            <article className="p-6 bg-gray-50 rounded-lg">
              <ScrollText className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito Tributário</h3>
              <p className="text-gray-600">Planejamento tributário, defesas administrativas e execuções fiscais</p>
            </article>
            <article className="p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-red-700 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Direito do Consumidor</h3>
              <p className="text-gray-600">Defesa dos seus direitos nas relações de consumo, indenizações e reparação de danos</p>
            </article>
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
              <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
              <p>Disponibilidade total para casos criminais urgentes</p>
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
                  <p className="text-gray-600">Atendimento 24h (Criminal)</p>
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
                  <p className="text-gray-600">Plantão 24h para casos criminais</p>
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
    </div>
  );
}

export default App;