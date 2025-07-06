import HomeImg from "../../assets/home_img.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <img src={HomeImg} className="home-img" />
      <h1 className="home-title">Combat Boxing Randers</h1>
      <p className="home-description">
        Vil du i bedre form, lære selvdisciplin og blive en del af et stærkt
        fællesskab? <br />
        Combat Boxing Randers giver dig muligheden for at udvikle dig fysisk og
        mentalt gennem boksning.
        <br />
        <br />
        Eller
        <br />
        <br />
        Drømmer du om at prøve kræfter med bokseringen - eller vil du bare have
        effektiv træning med mening? Vi tilbyder seriøs boksetræning med plads
        til både begyndere og øvede.
      </p>
      <button className="home-button">
        <a href="#Træningstider">Læs mere</a>
      </button>
    </div>
  );
}

export default Home;
