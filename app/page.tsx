import { Companies } from "./components/Companies";
import { Welcome } from "./components/Welcome";
import "./styles/globals.css";
export default async function Home() {
  return (
    <div className="gradient-bg">
      <Welcome />
      <div className="menucontainer">
        <Companies />
      </div>
    </div>
  );
}
