import styles from "./Apropos.module.css";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <main className={styles.apropos}>

      {/* Bannière */}
      <section className={styles.banner}>
        <h1>À propos de nous</h1>
        <p>Votre partenaire pour découvrir le monde</p>
      </section>

      {/* Présentation */}
      <section className={styles.presentation}>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            alt="Paysage de montagne"
          />
        </div>

        <div className={styles.texte}>
          <span className={styles.sousTitre}>
            QUI SOMMES-NOUS ?
          </span>

          <h2>Nous transformons vos rêves en voyages inoubliables</h2>

          <p>
            Travel Agency est une agence de voyage passionnée
            par la découverte du monde. Nous proposons des
            expériences uniques pour vous faire découvrir
            de nouvelles cultures et de magnifiques paysages.
          </p>

          <p>
            Notre équipe vous accompagne dans chaque étape
            de votre voyage afin de vous garantir un séjour
            confortable, agréable et adapté à vos envies.
          </p>

          <Link to="/destinations" className={styles.btn}>
            Découvrir nos destinations
          </Link>
        </div>

      </section>

      {/* Mission et valeurs */}
      <section className={styles.valeurs}>

        <h2>Pourquoi choisir Travel Agency ?</h2>

        <div className={styles.cartes}>

          <div className={styles.carte}>
            <span>🎯</span>
            <h3>Notre mission</h3>
            <p>
              Rendre les voyages accessibles et offrir
              des expériences exceptionnelles.
            </p>
          </div>

          <div className={styles.carte}>
            <span>❤️</span>
            <h3>Notre passion</h3>
            <p>
              Partager notre amour du voyage et faire
              découvrir de nouveaux horizons.
            </p>
          </div>

          <div className={styles.carte}>
            <span>🤝</span>
            <h3>Notre engagement</h3>
            <p>
              Accompagner chaque client avec sérieux,
              écoute et professionnalisme.
            </p>
          </div>

        </div>

      </section>

      {/* Chiffres clés */}
      <section className={styles.statistiques}>

        <div>
          <strong>+10</strong>
          <span>Années d'expérience</span>
        </div>

        <div>
          <strong>+50</strong>
          <span>Destinations</span>
        </div>

        <div>
          <strong>+2000</strong>
          <span>Clients satisfaits</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>Clients satisfaits</span>
        </div>

      </section>

    </main>
  );
}

export default Apropos;