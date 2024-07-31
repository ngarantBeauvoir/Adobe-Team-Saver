/*
======================================
Fichier: AEsaver.jsx
Auteur: ngarant
Creation: 2024-07-15
Description: Script de sauvergarde automatique pour After Effects
======================================
*/
projectName = app.project.file.name;    // Nom du projet
projectPath = app.project.file;         // Chemin du projet


$.writeln("The project name is ", projectName)
$.writeln("The project has been saved") 