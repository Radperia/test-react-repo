import { Helmet } from "react-helmet";
import Layout from './components/Layout';
import "./Home.css";

export const Home = () => {
    return (
      <Layout>
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
      </Layout>
    );
  };