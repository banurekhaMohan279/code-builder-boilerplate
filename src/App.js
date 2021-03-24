import {Link} from 'react-router-dom';

function App() {
  return (
    <div className = "page-center">
      <h1> Your Heading </h1>
      <Link to = '/template'className = "next-btn"> &rarr; </Link>
    </div>
  );
}

export default App;
