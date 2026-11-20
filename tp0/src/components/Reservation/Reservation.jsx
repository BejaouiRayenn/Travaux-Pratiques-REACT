
import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {

  // 1. Déclaration des états
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [destination, setDestination] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [nbVoyageurs, setNbVoyageurs] = useState("1");
  const [typeVoyage, setTypeVoyage] = useState("");
  const [demandes, setDemandes] = useState("");

  const [reservation, setReservation] = useState(null);
  const [erreurs, setErreurs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // 2. Fonction pour effacer une erreur
  function effacerErreur(champ) {
    setErreurs((prev) => {
      const nouvellesErreurs = { ...prev };
      delete nouvellesErreurs[champ];
      return nouvellesErreurs;
    });
  }

  // 3. Validation du formulaire
  function validerFormulaire() {

    const erreursTemp = {};

    // Validation du nom
    if (nom.trim() === "") {
      erreursTemp.nom = "Le nom est obligatoire";
    } else if (nom.trim().length < 3) {
      erreursTemp.nom = "Le nom doit contenir au moins 3 caractères";
    }

    // Validation de l'email
    if (email.trim() === "") {
      erreursTemp.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erreursTemp.email = "Veuillez saisir un email valide";
    }

    // Validation du téléphone
    if (telephone.trim() === "") {
      erreursTemp.telephone = "Le téléphone est obligatoire";
    } else if (!/^[0-9]{8,15}$/.test(telephone.trim())) {
      erreursTemp.telephone = "Numéro de téléphone invalide";
    }

    // Validation de la destination
    if (destination === "") {
      erreursTemp.destination = "Veuillez choisir une destination";
    }

    // Validation de la date
    if (dateDepart === "") {
      erreursTemp.dateDepart = "Veuillez choisir une date";
    } else {
      const dateChoisie = new Date(dateDepart + "T00:00:00");
      const aujourdHui = new Date();
      aujourdHui.setHours(0, 0, 0, 0);

      if (dateChoisie < aujourdHui) {
        erreursTemp.dateDepart = "La date doit être dans le futur";
      }
    }

    // Validation du nombre de voyageurs
    if (
      nbVoyageurs === "" ||
      Number(nbVoyageurs) < 1 ||
      !Number.isInteger(Number(nbVoyageurs))
    ) {
      erreursTemp.nbVoyageurs = "Nombre de voyageurs invalide";
    }

    // Validation du type de voyage
    if (typeVoyage === "") {
      erreursTemp.typeVoyage = "Veuillez choisir un type de voyage";
    }

    // Mise à jour des erreurs
    setErreurs(erreursTemp);

    // Retourne true si aucune erreur
    return Object.keys(erreursTemp).length === 0;
  }

  // 4. Soumission du formulaire
  function handleSubmit(e) {

    // Empêcher le rechargement de la page
    e.preventDefault();

    // Vérifier les données
    const formulaireValide = validerFormulaire();

    if (formulaireValide) {

      // Créer l'objet réservation
      const nouvelleReservation = {
        nom,
        email,
        telephone,
        destination,
        dateDepart,
        nbVoyageurs,
        typeVoyage,
        demandes
      };

      setReservation(nouvelleReservation);

      // Afficher le popup
      setShowPopup(true);

    } else {
      setShowPopup(false);
    }
  }

  // 5. Réinitialisation du formulaire
  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("");
    setDateDepart("");
    setNbVoyageurs("1");
    setTypeVoyage("");
    setDemandes("");
    setErreurs({});
    setReservation(null);
    setShowPopup(false);
  }

  // 6. Affichage du formulaire
  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>

        <h2>Réservez votre voyage</h2>

        {/* Nom et prénom */}
        <div className={styles.formGroup}>
          <label>Nom et prénom :</label>

          <input
            type="text"
            value={nom}
            className={erreurs.nom ? styles.inputError : ""}
            onChange={(e) => {
              setNom(e.target.value);
              effacerErreur("nom");
            }}
            placeholder="Votre nom et prénom"
          />

          {erreurs.nom && (
            <span className={styles.errorMessage}>
              {erreurs.nom}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label>Adresse e-mail :</label>

          <input
            type="email"
            value={email}
            className={erreurs.email ? styles.inputError : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              effacerErreur("email");
            }}
            placeholder="exemple@gmail.com"
          />

          {erreurs.email && (
            <span className={styles.errorMessage}>
              {erreurs.email}
            </span>
          )}
        </div>

        {/* Téléphone */}
        <div className={styles.formGroup}>
          <label>Téléphone :</label>

          <input
            type="tel"
            value={telephone}
            className={erreurs.telephone ? styles.inputError : ""}
            onChange={(e) => {
              setTelephone(e.target.value);
              effacerErreur("telephone");
            }}
            placeholder="Votre numéro de téléphone"
          />

          {erreurs.telephone && (
            <span className={styles.errorMessage}>
              {erreurs.telephone}
            </span>
          )}
        </div>

        {/* Destination */}
        <div className={styles.formGroup}>
          <label>Destination :</label>

          <select
            value={destination}
            className={erreurs.destination ? styles.inputError : ""}
            onChange={(e) => {
              setDestination(e.target.value);
              effacerErreur("destination");
            }}
          >
            <option value="">Choisir une destination</option>
            <option value="Paris">Paris</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Djerba">Djerba</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Dubai">Dubai</option>
          </select>

          {erreurs.destination && (
            <span className={styles.errorMessage}>
              {erreurs.destination}
            </span>
          )}
        </div>

        {/* Date de départ */}
        <div className={styles.formGroup}>
          <label>Date de départ :</label>

          <input
            type="date"
            value={dateDepart}
            className={erreurs.dateDepart ? styles.inputError : ""}
            onChange={(e) => {
              setDateDepart(e.target.value);
              effacerErreur("dateDepart");
            }}
          />

          {erreurs.dateDepart && (
            <span className={styles.errorMessage}>
              {erreurs.dateDepart}
            </span>
          )}
        </div>

        {/* Nombre de voyageurs */}
        <div className={styles.formGroup}>
          <label>Nombre de voyageurs :</label>

          <input
            type="number"
            min="1"
            value={nbVoyageurs}
            className={erreurs.nbVoyageurs ? styles.inputError : ""}
            onChange={(e) => {
              setNbVoyageurs(e.target.value);
              effacerErreur("nbVoyageurs");
            }}
          />

          {erreurs.nbVoyageurs && (
            <span className={styles.errorMessage}>
              {erreurs.nbVoyageurs}
            </span>
          )}
        </div>

        {/* Type de voyage */}
        <div className={styles.formGroup}>
          <label>Type de voyage :</label>

          <div className={styles.radioGroup}>

            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Famille"
                checked={typeVoyage === "Famille"}
                onChange={(e) => {
                  setTypeVoyage(e.target.value);
                  effacerErreur("typeVoyage");
                }}
              />
              Famille
            </label>

            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Solo"
                checked={typeVoyage === "Solo"}
                onChange={(e) => {
                  setTypeVoyage(e.target.value);
                  effacerErreur("typeVoyage");
                }}
              />
              Solo
            </label>

            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Luxe"
                checked={typeVoyage === "Luxe"}
                onChange={(e) => {
                  setTypeVoyage(e.target.value);
                  effacerErreur("typeVoyage");
                }}
              />
              Luxe
            </label>

          </div>

          {erreurs.typeVoyage && (
            <span className={styles.errorMessage}>
              {erreurs.typeVoyage}
            </span>
          )}
        </div>

        {/* Demandes particulières */}
        <div className={styles.formGroup}>
          <label>Demandes particulières :</label>

          <textarea
            value={demandes}
            onChange={(e) => setDemandes(e.target.value)}
            placeholder="Vos demandes particulières..."
            rows="4"
          />
        </div>

        {/* Boutons */}
        <div className={styles.buttons}>

          <button type="submit" className={styles.submitBtn}>
            Réserver
          </button>

          <button
            type="button"
            className={styles.resetBtn}
            onClick={handleReset}
          >
            Réinitialiser
          </button>

        </div>

      </form>

      {/* 7. Popup de confirmation */}
      {showPopup && reservation && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>

            <h3>Réservation réussie !</h3>

            <p>Votre réservation a été enregistrée.</p>

            <div className={styles.reservationDetails}>
              <p><strong>Nom :</strong> {reservation.nom}</p>
              <p><strong>Email :</strong> {reservation.email}</p>
              <p><strong>Téléphone :</strong> {reservation.telephone}</p>
              <p><strong>Destination :</strong> {reservation.destination}</p>
              <p><strong>Date :</strong> {reservation.dateDepart}</p>
              <p><strong>Voyageurs :</strong> {reservation.nbVoyageurs}</p>
              <p><strong>Type :</strong> {reservation.typeVoyage}</p>
              <p><strong>Demandes :</strong> {reservation.demandes || "Aucune"}</p>
            </div>

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className={styles.closeBtn}
            >
              Fermer
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Reservation;
