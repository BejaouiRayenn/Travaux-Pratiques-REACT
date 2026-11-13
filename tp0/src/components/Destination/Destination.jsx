import styles from "./Destination.module.css";
import santorini from '../../assets/santorini.jpg';
import { useState } from "react";
function Destination(props) {
    const[afficher,setAfficher]=useState(false);
    const[favoris,setFavoris]=useState("🤍");

    function swap(){
        setAfficher(!afficher)
    }
    function swapf(){
        if (favoris ==="🤍")
            setFavoris("❤️")
        else 
             setFavoris("🤍")
    }
    return (
        <div className={styles.destination}>
            <img
                className={styles.image}
                src={props.image}
                alt={props.nom}
            />
            <h2 className={styles.titre}>
                {props.nom}
            </h2>
            <h3 className={styles.pays}>
                {props.pays}
            </h3>
            {afficher &&<p className={styles.description}>
                {props.description}
            </p>}
            
            <h3 className={styles.prix}>
                {props.prix} DT
            </h3>
            <button onClick={swap}>{afficher?"Masquer":"Afficher"}</button>
            <button onClick={swapf}>{favoris}</button>
        </div>
    );
}
            

export default Destination;