import HomeUnauthorized from "../components/HomeUnauthorized/HomeUnauthorized";
import HomeAuthorized from "../components/HomeAuthorized/HomeAuthorized";

function Home() {
  const token = window.localStorage.getItem('token');
  

  return (
    
    <>
    {token ? (
  <>
    <HomeAuthorized />
  </>
) : (
  <HomeUnauthorized />
)}

    </>
  );
}

export default Home;
