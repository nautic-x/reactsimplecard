import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Card
        imgSrc="https://picsum.photos/300/200"
        imgAlt="Card Image"
        title="Card Title"
        description="My entire discription goes here. Page is currently under construction.
        Back back soon for more information. Thank you"
        buttonText="Learn More Here"
        link="cardPage"
      />
    </div>
  );
}

export default App;
