import { Helmet } from "react-helmet";
import Layout from './components/Layout';
import Hexagon from "./components/Rotate";

export const Page1 = () => {
    return (
      <Layout>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title> Page1 title </title>
          </Helmet>
          <h1>Page1</h1>

          <Hexagon />

        </div>
      </Layout>
    );
  };
  