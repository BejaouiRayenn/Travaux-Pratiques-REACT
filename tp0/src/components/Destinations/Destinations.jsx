import Destination from "../Destination/Destination";

import santorin from "../../assets/santorini.jpg";
import bali from "../../assets/bali.jpg";
import rome from "../../assets/rome.jpg";

import styles from "./Destinations.module.css";

function Destinations() {
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>

        <Destination
          image={santorin}
          nom="Santorin"
          pays="Grèce"
          description="Découvrez les magnifiques paysages des îles grecques."
          prix="1200"
        />

        <Destination
          image={bali}
          nom="Bali"
          pays="Indonésie"
          description="Profitez des plages paradisiaques de Bali."
          prix="1800"
        />

        <Destination
          image={rome}
          nom="Rome"
          pays="Italie"
          description="Découvrez les monuments historiques de Rome."
          prix="950"
        />

      </div>
    </section>
  );
}
export default Destinations;