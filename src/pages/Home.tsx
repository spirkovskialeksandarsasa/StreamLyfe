import HomeUnauthorized from "../components/HomeUnauthorized/HomeUnauthorized";
import HomeAuthorized from "../components/HomeAuthorized/HomeAuthorized";
import { useAppStore } from "../store";

function Home() {
  const token = useAppStore((state) => state.token);

  return <>{token ? <HomeAuthorized /> : <HomeUnauthorized />}</>;
}

export default Home;
