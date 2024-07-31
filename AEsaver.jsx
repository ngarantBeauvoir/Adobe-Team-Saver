/*
======================================
Fichier: AEsaver.jsx
Auteur: ngarant
Creation: 2024-07-15
Description: Script de sauvergarde automatique pour After Effects
======================================
*/
projectName = app.project.file.name; // Nom du projet
projectName = projectName.replace(".aep", ""); // Suppression du.aep

projectPath = app.project.file; // Chemin du projet

newPath = new File("~/Desktop/" + projectName + ".aep"); // Nouveau chemin


$.writeln("Le nom du projet est : ", projectName)
$.writeln("L'emplacement du projet est : ", projectPath)
$.writeln("Le nouvel emplacement est : ", newPath)

// Confirmation de la sauvegarde du projet
if (confirm("Voulez-vous sauvergarder le projet?")) {
    app.project.save(newPath);
    $.writeln("Le projet a été sauvegardé")
}
else { 
    $.writeln("Le projet n'a pas été sauvegardé")
}