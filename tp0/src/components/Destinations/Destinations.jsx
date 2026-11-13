import Destination from "../Destination/Destination";
import styles from "./Destinations.module.css";
import destinations from "../../Data/DestinationListe";



function Destinations() {

  

  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>

        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}

      </div>

    </section>
  );
}

export default Destinations;

