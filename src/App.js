import {Link} from 'react-router-dom';

function App() {
  return (
    <div className = "page-center">
      <h1> Your Heading </h1>
      <Link to = '/Template' className = "next-btn"> &rarr; </Link>
    </div>
  );
}

export default App;
