import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Resume from '../components/sections/Resume';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Insterests from '../components/sections/Interests';
import Certifications from '../components/sections/Certifications';
import Skills from '../components/sections/Skills';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      >
        Profissional graduado em Bacharelado em Sistemas de Informação, 
        atuando há mais 4 (quatro) anos projetos de tecnologia, tanto para fins 
        de aprendizado como para soluções de problemas. Experiência na liderança 
        e coordenação de equipes de pequeno (2 a 5 profissionais) porte para 
        projetos de desenvolvimento de software. Reconhecido pelo comprometimento, 
        concentração e foco, aprendizado rápido, ótima relação com o cliente, grande 
        capacidade para resolução de problemas, e principalmente, por buscar compartilhar 
        conhecimento – tanto ao oferecê-lo, quanto ao aprender com colegas. 
        Possuo espanhol fluente, excelentes capacidades de análise, escrita e raciocínio, 
        inglês intermediário com capacidades de analises, além de um extenso 
        conhecimento em tecnologias da informação.
        
      </Resume>

      <hr className="m-0" />

      <Experience />

      <hr className="m-0" />

      <Education />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Certifications />

    </div>
  </Layout>
);

export default IndexPage;
