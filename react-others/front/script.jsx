( async () => {
  let data = [];

  let i = Math.floor(Math.random() * (Math.floor(42) - Math.ceil(1) + 1)) + Math.ceil(1);
  const response = await fetch('https://rickandmortyapi.com/api/character/?page=' + i);
  const characters = await response.json();
  data = data.concat( characters.results.map( el => {
    return { "name": el.name, "linkImg": el.image, "status": el.status }
  }));

  caller(data);
})()

function Print(props) {
  return (
    <div>
      {
        props.data.map( card => (
          <div className={"card " + card.status}>
            <img src={card.linkImg} />
            <p>{card.name}</p>
            <span>{card.status}</span>
          </div>
        ))
      }
    </div>
  );
}

function caller(arrCharacters) {
  ReactDOM.render(
    <Print data={arrCharacters} />,
    document.getElementById('root')
  );
}