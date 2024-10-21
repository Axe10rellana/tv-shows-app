//assets
import error404 from "../assets/icons/error404.svg";

const Error404 = () => {
  //variables
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
      <img className="img404" src={error404} alt="Error404" />
      <div className="wrapper">
        <h1>Página No Encontrada</h1>
        <p className="message404">
          Esta página está perdida en el limbo. Lo sentimos no hemos podido
          encontrar la página que buscas.
        </p>
        <p className="copyRights">&copy; {currentYear} Axe10rellana</p>
      </div>
    </div>
  );
};

export default Error404;
