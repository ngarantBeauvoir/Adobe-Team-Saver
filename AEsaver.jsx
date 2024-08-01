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

// var AdobeTeamSaverPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Adobe-Team-Saver", undefined, {resizeable:true, closeButton: false})


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"AdobeTeamSaverPanel","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[150,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":4,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"groupPanelSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,4,2,3,1],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":0}
*/ 

{
    function gui_AdobeTeamSaver(thisObj) {
        function gui_AdobeTeamSaver_buildUI(thisObj) {

            /*
            Code for Import https://scriptui.joonas.me — (Triple click to select): 
            {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"AdobeTeamSaverPanel","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[350,200],"margins":16,"orientation":"row","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupNewPath","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"dropdownlistTime","text":"DropDownList","listItems":"5,10,15,20,25,30,35,40,45,50,55,60","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupTimeSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave1","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Sauvegarder à chaque","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave2","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"minutes","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Divider","parentId":2,"style":{"enabled":true,"varName":null}}},"order":[0,2,4,3,1,10,7,8,6,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":9}
            */ 

            // ADOBETEAMSAVERPANEL
            // ===================
            var AdobeTeamSaverPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Adobe-Team-Saver", undefined, {resizeable:true, closeButton: false});
                AdobeTeamSaverPanel.text = "Adobe-Team-Saver"; 
                AdobeTeamSaverPanel.preferredSize.width = 350; 
                AdobeTeamSaverPanel.preferredSize.height = 500; 
                AdobeTeamSaverPanel.orientation = "row"; 
                AdobeTeamSaverPanel.alignChildren = ["center","top"]; 
                AdobeTeamSaverPanel.spacing = 10; 
                AdobeTeamSaverPanel.margins = 16; 

            // PANELNEWPATH
            // ============
            var panelNewPath = AdobeTeamSaverPanel.add("panel", undefined, undefined, {name: "panelNewPath"}); 
                panelNewPath.text = "Sauvegarde"; 
                panelNewPath.preferredSize.width = 300; 
                panelNewPath.orientation = "column"; 
                panelNewPath.alignChildren = ["left","top"]; 
                panelNewPath.spacing = 10; 
                panelNewPath.margins = 10; 

            // GROUPNEWPATH
            // ============
            var groupNewPath = panelNewPath.add("group", undefined, {name: "groupNewPath"}); 
                groupNewPath.orientation = "column"; 
                groupNewPath.alignChildren = ["left","center"]; 
                groupNewPath.spacing = 10; 
                groupNewPath.margins = 0; 

            var textNewPath = groupNewPath.add("statictext", undefined, undefined, {name: "textNewPath"}); 
                textNewPath.text = "Emplacement de sauvegarde automatique"; 

            var editNewPath = groupNewPath.add('edittext {properties: {name: "editNewPath"}}'); 
                editNewPath.text = "~/Desktop/"; 
                editNewPath.preferredSize.width = 250; 

            // PANELNEWPATH
            // ============
            var divider1 = panelNewPath.add("panel", undefined, undefined, {name: "divider1"}); 
                divider1.alignment = "fill"; 

            // GROUPTIMESAVE
            // =============
            var groupTimeSave = panelNewPath.add("group", undefined, {name: "groupTimeSave"}); 
                groupTimeSave.orientation = "row"; 
                groupTimeSave.alignChildren = ["left","center"]; 
                groupTimeSave.spacing = 10; 
                groupTimeSave.margins = 0; 

            var textTimeSave1 = groupTimeSave.add("statictext", undefined, undefined, {name: "textTimeSave1"}); 
                textTimeSave1.text = "Sauvegarder à chaque"; 

            var dropdownlistTime_array = ["5","10","15","20","25","30","35","40","45","50","55","60"]; 
            var dropdownlistTime = groupTimeSave.add("dropdownlist", undefined, undefined, {name: "dropdownlistTime", items: dropdownlistTime_array}); 
                dropdownlistTime.selection = 0; 

            var textTimeSave2 = groupTimeSave.add("statictext", undefined, undefined, {name: "textTimeSave2"}); 
                textTimeSave2.text = "minutes";

            var textTimeSave3 = groupTimeSave.add("statictext", undefined, undefined, {name: "textTimeSave3"});
                
                dropdownlistTime.onChange = function () {
                    textTimeSave3.text = dropdownlistTime.items[dropdownlistTime.selection];
                }

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