import physicalh from "../assets/images/physicalh.svg";
import mentalh from "../assets/images/mentalh.svg";
import { NavLink } from "react-router-dom";

function InfoHome() {
  return (
    <div className="category-description">
      <div className="main-category-description">
        <div className="category-part">
          <div>
            <h3>Bien dans ma tête</h3>
            <img src={mentalh} alt="Mental Health" />
          </div>
          <div>
            <p>
              Découvrez des articles dédiés à votre santé mentale. Ces derniers
              sont conçus pour vous aider à maintenir une bonne santé
              psychologique, à gérer le stress, et à trouver des astuces pour un
              bien-être mental optimal.
            </p>
          </div>
        </div>
        <div className="category-part">
          <div>
            <h3>Bien dans mon corps</h3>
            <img src={physicalh} alt="physical Health" />
          </div>
          <div>
            <p>
              Cette section vous propose des articles dédiés à la santé
              physique. Retrouvez des conseils pratiques pour prendre soin de
              votre corps, améliorer votre forme physique, et adopter des
              habitudes de vie saines.
            </p>
          </div>
        </div>
      </div>
      <div className="send-to-blog">
        <div className="redirect-home">
          Vous trouverez les articles que j'ai déjà rédiger{" "}
          <NavLink to="/blog">ici</NavLink>
        </div>
        <div className="redirect-home">
          Si vous avez des question vous pouvez me contacter{" "}
          <NavLink to="/contact">ici</NavLink>
        </div>
      </div>
    </div>
  );
}
export default InfoHome;
