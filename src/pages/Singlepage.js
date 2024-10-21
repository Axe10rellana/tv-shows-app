//react
import { useEffect, useContext } from "react";

//context
import ShowsContext from "../context/shows/showsContext";

//components
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  //context variables
  const { getSimgleShow, singleShow, loading } = useContext(ShowsContext);

  //useEffect
  useEffect(() => {
    getSimgleShow(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //functions
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="singlepage">
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            <strong>Generos: </strong>{" "}
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Estado: </strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating: </strong>{" "}
              {singleShow.average ? singleShow.rating.average : "Sin Rating"}
            </p>
            <p>
              <strong>Sitio Official: </strong>{" "}
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                "Sin Sitio Oficial"
              )}
            </p>
            <p>
              <strong>Descripción: </strong>{" "}
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Singlepage;
