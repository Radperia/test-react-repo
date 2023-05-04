import "./Home.css";

export const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <img src={`${process.env.PUBLIC_URL}/images/bird.jpg`} 
             alt="Sample" 
             className="img"
        />
      </div>
    );
  };