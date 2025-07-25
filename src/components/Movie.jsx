function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return <div id={id} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      {
        poster === "N/A" 
        ? 
        <img className="activator" src="https://lh3.googleusercontent.com/xdEpUfP1PQqF5MasSf69TPQFihANIlOowbkF1d0m5XacBqMtC1lDyqL4CaxupqFPNlKkwc8ZGQcTekY=w544-h544-l90-rj" />
        : 
        <img className="activator" src={poster} />
      }
      
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
}

export {Movie}