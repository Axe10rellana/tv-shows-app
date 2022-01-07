import error404 from "../assets/error404.svg";

const Error404 = () => {
  return (
    <div>
      <img className="img404" src={error404} alt="Error404" />
      <div className="wrapper">
        <h1>Página No Encontrada</h1>
        <p className="message404">
          Esta página está perdida en el limbo. Lo sentimos no hemos podido
          encontrar la página que buscas.
        </p>
        <p className="copyRights">&copy; 2021 Axe10rellana</p>
      </div>
    </div>
  );
};

export default Error404;
