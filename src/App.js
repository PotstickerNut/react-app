import "./App.css";
import { useState, useEffect } from "react";

const GithubUser = ({ name, location, avatar }) => {
  console.log(avatar);
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt={name} height={150} />
    </div>
  );
};

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

export default App;
