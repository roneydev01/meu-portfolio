import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Insterests from '../components/sections/Interests';
import Certifications from '../components/sections/Certifications';
import config from '../../config';

const skillsData = [
  { label: 'HTML', value: 90 },
  { label: 'CSS', value: 80 },
  { label: 'JavaScript', value: 75 },
  { label: 'PHP', value: 80 },
  { label: 'Laravel', value: 50 },
  { label: 'React', value: 40 },
  { label: 'React Native', value: 30 },
  { label: 'Node', value: 40 },
  { label: 'Python', value: 10 },
  { label: 'Ruby on Rails', value: 25 },
  { label: 'MySql', value: 75 },
  { label: 'PostgreSQL', value: 70 },
]
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

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Ferramentas &amp; Linguagens de Programação
          </div>

          <BubbleChart
            width={950}
            height={800}
            padding={0} // optional value, number that set the padding between bubbles
            showLegend={true} // optional value, pass false to disable the legend.
            legendPercentage={20} // number that represent the % of with that legend going to use.
            legendFont={{
              family: 'Arial',
              size: 16,
              color: '#000',
              weight: 'bold',
            }}
            valueFont={{
              family: 'Arial',
              size: 16,
              color: '#fff',
              weight: 'bold',
            }}
            labelFont={{
              family: 'Arial',
              size: 16,
              color: '#fff',
              weight: 'bold',
            }}
            data={skillsData}
          />
        </div>
      </section>

      <hr className="m-0" />

      <Insterests />

      <hr className="m-0" />

      <Certifications />

    </div>
  </Layout>
);

export default IndexPage;
