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
        Tenho experiência em aproveitar estruturas ágeis para fornecer uma
        sinopse para visões gerais de alto nível. Abordagens iterativas para empresas
        com estratégia, promover o pensamento colaborativo para promover o valor geral
        proposição.
      </Resume>

      <hr className="m-0" />

      <Experience />

      <hr className="m-0" />

      <Education />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Insterests />

      <hr className="m-0" />

      <Certifications />

    </div>
  </Layout>
);

export default IndexPage;
