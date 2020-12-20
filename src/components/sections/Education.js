import React from 'react';

const Education = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Formação</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Bacharel em Sistemas de Infomação</h3>
            <div className="subheading mb-3">FIED - Faculdade IEducare</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Fevereiro 2013 - Dezembro 2016</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0"> Engenharia da Computação </h3>
            <div className="subheading mb-3">Universidad Nacional Del Sul - Argentina</div>
            <p>Trancado 3º período</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Fevereiro 2010 - Julho 2011</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education