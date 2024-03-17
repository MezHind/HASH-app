<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifier si le champ 'objectif' est défini dans les données POST
    if (isset($_POST['objectif'])) {
        // Récupérer la valeur de l'objectif sélectionné
        $objectif = $_POST['objectif'];
        
        // Vous pouvez ici effectuer d'autres traitements en fonction de l'objectif sélectionné
        
        // Redirection vers une autre page après le traitement
        if ($objectif == 'candidat') {
            header("Location: inscription_candidat.php");
        } elseif ($objectif == 'recruteur') {
            header("Location: inscription_recruteur.php");
        } else {
            // Si une autre option est sélectionnée, afficher un message d'erreur ou rediriger vers une page d'erreur
            header("Location: erreur.php");
        }
        exit(); // Terminer le script
    } else {
        // Si le champ 'objectif' n'est pas défini, afficher un message d'erreur
        echo "Veuillez sélectionner un objectif.";
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="projet.css">
    </head>
    <body class="body_cmpt">
      <div class="lg">
     <img src="notre_logo.jpg" class="notre_logo">
    </div>
      <fieldset>
 
     <legend><h2 > QUEL EST VOTRE OBJECTIF ?</h2></legend>
   <div>
    <a href="inscription.html">
    <button class="b1">Candidat</button><br></a>
    <a href="inscription_recruteur.html">
    <button class="b1">Recruteur </button></a><br>
     </div>
    
 </fieldset>
 <script src="projet.js" defer></script>
</html>