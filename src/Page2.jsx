import "./Page2.css";
import { Helmet } from "react-helmet";
import Trans from "./components/Change";
import Layout from './components/Layout';

export const Page2 = () => {
    return (
      <Layout>
        <div style={{ width: "500px", height: "500px", overflow: "hidden" }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title> Page2 title </title>
          </Helmet>
          <h1>Page2</h1>
          <Trans />
        </div>
      </Layout>
    );
  };
  