import React from 'react';

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experiência</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Suporte/Desenvolvimento</h3>
            <div className="subheading mb-3"></div>
            <p>
              Auxilio equipe de Desenvolvimento na manutenção e implementação
              de novas funcionalidades no Sistema, realizações de testes e
              elaboração de consultas e atualizações no Banco de Dados.
              Realizo treinamento de módulos do sistema, orientar aos
              usuários através de ligações ou chamados sobre manuseio do mesmo,
              assim como apresentar soluções a erros reportados.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Dezembro 2018 - Atualmente</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Instrutor de Informática</h3>
            <div className="subheading mb-3"></div>
            <p>
              Ministrando aulas de diversos módulos como, Ambientes Web,
              Desenvolvimento de Sites, Sistemas Operacionais, Criação de Jogos,
              Manutenção e Configuração de Computadores, Design Gráfico,
              Photoshop, Administração Financeira, Marketing Pessoal e Profissional,
              dentre outros.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Julho 2017 - Julho 2018</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Assistente de TI</h3>
            <div className="subheading mb-3"></div>
            <p>
              Dar suporte local e remoto aos usuários, verificar erros e problemas de
              software e hardware, instalar e configurar hardware e software na
              plataforma windows, dar suporte a impressoras, instalar pontos de rede,
              cadastrar acesso de usuários no AD, dar suporte básico no ERP TOTVS, SIGMA PDCA,
              entre outros, solicitar e acompanhar suporte junto aos fornecedores e
              apresentar relatórios sobre requisição de chamados.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Abril 2016 - Dezembro 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience