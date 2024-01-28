import {useEffect,useState} from "react";

function App() {
  const [message, setMessage] = useState("");
//this is has been added

  useEffect(() => {
    fetch("https://mern-deploy-backend-mxe8.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>);
}

export default App;
