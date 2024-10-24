//react
import { useContext, useEffect } from "react";

//context
import ShowsContext from "../context/shows/showsContext";

//components
import SearchBar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

const Homepage = () => {
  //context variables
  const showsContext = useContext(ShowsContext);
  const { defaultShows, loading, shows } = showsContext;

  //useEffect
  useEffect(() => {
    defaultShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="homepage">
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "Sin rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
