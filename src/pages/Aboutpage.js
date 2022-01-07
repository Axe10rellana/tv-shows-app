const Aboutpage = () => {
  return (
    <div className="about">
      <h3 className="about__title">Pagina de Acerca</h3>
      <div className="about__info">
        <p>Aplicación Buscador de shows de TV (v0.1)</p>
        <div>
          <p>Cosas aprendidas con la creacion de la Aplicación</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>HTML Y CSS basico</li>
            <li>Peticiones con Axios y AJAX</li>
            <li>
              Uso de la API de TVMAZE:{" "}
              <a
                href="https://www.tvmaze.com/api"
                target="_blank"
                rel="noreferrer"
              >
                https://www.tvmaze.com/api
              </a>
            </li>
            <li>React router</li>
            <li>React Context API</li>
            <li>Despliegue de la Aplicación a GitHub Pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
