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
// if (confirm("Voulez-vous sauvergarder le projet?")) {
//     app.project.save(newPath);
//     $.writeln("Le projet a été sauvegardé")
// }
// else { 
//     $.writeln("Le projet n'a pas été sauvegardé")
// }



/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"AdobeTeamSaverPanel","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[150,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":4,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"groupPanelSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,4,2,3,1],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":0}
*/ 

{
    function gui_AdobeTeamSaver(thisObj) {
        function gui_AdobeTeamSaver_buildUI(thisObj) {

            // ADOBETEAMSAVER
            // ==============
            var AdobeTeamSaverPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Adobe-Team-Saver", undefined, {resizeable:true, closeButton: false})
                AdobeTeamSaverPanel.text = "Adobe-Team-Saver"; 
                AdobeTeamSaverPanel.preferredSize.width = 150; 
                AdobeTeamSaverPanel.preferredSize.height = 200; 
                AdobeTeamSaverPanel.orientation = "column"; 
                AdobeTeamSaverPanel.alignChildren = ["left","top"]; 
                AdobeTeamSaverPanel.spacing = 10; 
                AdobeTeamSaverPanel.margins = 16; 

            // GROUPPANELSAVE
            // ==============
            var groupPanelSave = AdobeTeamSaverPanel.add("group", undefined, {name: "groupPanelSave"}); 
                groupPanelSave.orientation = "row"; 
                groupPanelSave.alignChildren = ["left","center"]; 
                groupPanelSave.spacing = 10; 
                groupPanelSave.margins = 0; 

            // PANELNEWPATH
            // ============
            var panelNewPath = groupPanelSave.add("panel", undefined, undefined, {name: "panelNewPath"}); 
                panelNewPath.text = "Sauvegarde"; 
                panelNewPath.orientation = "column"; 
                panelNewPath.alignChildren = ["left","top"]; 
                panelNewPath.spacing = 10; 
                panelNewPath.margins = 10; 

            var textNewPath = panelNewPath.add("statictext", undefined, undefined, {name: "textNewPath"}); 
                textNewPath.text = "Emplacement de sauvegarde automatique"; 

            var editNewPath = panelNewPath.add('edittext {properties: {name: "editNewPath"}}'); 
                editNewPath.text = "~/Desktop/"; 

            AdobeTeamSaverPanel.layout.layout(true);

            return AdobeTeamSaverPanel;
        }

        var AdobeTeamSaver = gui_AdobeTeamSaver_buildUI(thisObj);

        if (AdobeTeamSaver != null && AdobeTeamSaver instanceof Window){
            AdobeTeamSaver.center();
            AdobeTeamSaver.show();
        }
    }
    gui_AdobeTeamSaver(this);
}