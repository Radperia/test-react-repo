import { Helmet } from "react-helmet";
import "./Home.css";

export const Home = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Home title </title>
        </Helmet>
        <h1>Home</h1>
        <img src={`${process.env.PUBLIC_URL}/images/bird.jpg`} 
             alt="Sample" 
             className="img"
        />
      </div>
    );
  };