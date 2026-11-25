
import { Link } from "react-router-dom";
import styles from "./Accueil.module.css";

function Accueil() {
  return (
    <main className={styles.accueil}>

      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.contenu}>
          <span className={styles.sousTitre}>
            ✈ EXPLOREZ LE MONDE AVEC NOUS
          </span>

          <h1>
            Le voyage commence <br />
            par un <span>rêve</span>
          </h1>

          <p>
            Découvrez des destinations exceptionnelles,
            vivez des expériences inoubliables et créez
            des souvenirs qui resteront gravés pour toujours.
          </p>

          <div className={styles.actions}>
            <Link to="/destinations" className={styles.btnPrincipal}>
              Découvrir nos destinations
            </Link>

            <Link to="/apropos" className={styles.btnSecondaire}>
              En savoir plus
            </Link>
          </div>
        </div>

      </section>

      <section className={styles.avantages}>

        <div className={styles.avantage}>
          <span>🌍</span>
          <h3>Destinations variées</h3>
          <p>Explorez les plus beaux endroits du monde.</p>
        </div>

        <div className={styles.avantage}>
          <span>💰</span>
          <h3>Meilleurs prix</h3>
          <p>Profitez de voyages adaptés à votre budget.</p>
        </div>

        <div className={styles.avantage}>
          <span>⭐</span>
          <h3>Qualité garantie</h3>
          <p>Un accompagnement pour un séjour réussi.</p>
        </div>

      </section>

    </main>
  );
}

export default Accueil;
