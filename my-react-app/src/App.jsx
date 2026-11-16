// Load the styles and the List component
import "./App.css";
import List from "./List.jsx";

// The main component for the whole page
function App() {
  // My name and a random number from 0 to 99
  const name = "Tristan S";
  const luckyNumber = Math.floor(Math.random() * 100);

  // Pick a greeting based on the hour of the day
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // Style for the heading, written as a JavaScript object
  const headingStyle = {
    color: "tomato",
    fontSize: "48px",
  };

  // What shows on the page: heading, lucky number, and the list
  return (
    <div>
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

// Let other files (main.jsx) use App
export default App;
