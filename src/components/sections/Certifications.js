import React from 'react';

const Certifications = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="awards"
    >
      <div className="w-100">
        <h2 className="mb-5">Certificados</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Full Stack PHP Developer - Upinside
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            JavaScript - B7Web
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            HTML5/CSS3 - B7Web
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Inglês - Básico e intermediário - HB Intercâmbios
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Relações Humanas e Inteligência Emocional - Inovare
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certifications