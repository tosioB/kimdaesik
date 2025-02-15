import "./assets/App.scss";
import "swiper/css";
import IntroContainer from "./components/intro/IntroContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

function App() {
  return (
    <div className="wrapper">
      <IntroContainer />
      <ProfileContainer />
    </div>
  );
}

export default App;
