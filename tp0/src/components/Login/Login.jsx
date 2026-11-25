import{useState} from "react";


function login()
{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const[error, setError] = useState("");
function handleSubmit(e){
    e.preventDefault();
    let newError = {};
    if(email.trim() === ""){
        newError.email = "veuillez entrez votre email";
    }
    else if(! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        newError.email = "veuillez entrez un email valide";
    }
    if(password.trim() === ""){
        newError.password = "veuillez entrez votre mot de passe";
    }
    else if(password.length < 8){
        newError.password = "le mot de passe doit contenir au moins 8 caractères";
    }
    else if(! /[A-Z]/.test(password)){
        newError.password = "le mot de passe doit contenir au moins une lettre majuscule";
    }
    else if(! /[0-9]/.test(password)){
        newError.password = "le mot de passe doit contenir au moins un chiffre";
    }
    else if(! /[^A-Za-z0-9]/.test(password)){
        newError.password = "le mot de passe doit contenir au moins un caractère spécial";
    }
    if(Object.keys(newError).length === 0){
       alert("Connexion réussie");
       console.log("Email:", email);
       console.log("Password:", password);
    }
    else{
        setError(newError);
        console.log("Errors:", newError);
    }
    
}

return(
<div>
    <form onSubmit={handleSubmit}>
        <div>
        <label
            htmlfor="email">email
        </label>
        <input type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        {error.email && (<span>{error.email}</span>)}
        
        <div>
        <label
            htmlfor="password">password
        </label>
        <input type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        {error.password && (<span>{error.password}</span>)}
        <div><button type="submit">Enregistrer</button></div>
    </form>
</div>

);
}
export default login ;