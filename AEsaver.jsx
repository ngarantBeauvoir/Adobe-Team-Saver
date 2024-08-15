/*
======================================================
Fichier: AEsaver.jsx
Auteur: ngarant
Creation: 2024-07-15
Description: Script de sauvergarde automatique pour After Effects
======================================================
*/

/*                
                        TODO
======================================================
- Path de sauvegarde interactif
- Logique si le projet est un TeamProject
- Tester la sauvegarde
- Automatiser la sauvegarde
- Redondance
*/

/*
                     Variables
======================================================
*/

// Variables de Projet
var projectFileName = "RENOMEZ-MOI";                                // Nom du projet

// Si le projet est un TeamProject
if (app.project.file != null) {
 projectFileName = app.project.file.name;
}

var projectFileName = projectFileName.replace(".aep", "");          // Suppression du.aep
var projectPath = app.project.file;                                 // Chemin du projet
var newPath = new File("~/Desktop/" + projectFileName + ".aep");    // Nouveau chemin



alert(projectFileName);


// Variables de temps
var timeValue = 30 * 60000;  // Valeur du temps de sauvegarde de base en millisecondes (30 minutes)

$.writeln("Le nom du projet est : ", projectFileName)
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

//                      Functions
// ======================================================

// try {
//     //FONCTIONNEL
//     var taskId = app.scheduleTask('saveData()', 10000, false);
//     alert("yeepie!");
// }
// catch(x_x){
//     alert("ERREUR");

//     }
// finally {
//     //code
// }

// saveLoop();
// Verification si une sauvegarde a ete cedulee
function saveLoop() {
    // TODO à faire fonctionner
    // var taskId = app.scheduleTask(function() {alert("hello world!")}, parseFloat(5000), true);

}

// Lorsque la valeur de la dropdownlist change
function setTimeValue(dropdownlistTime) {

    // Valeur du temps de sauvegarde
    timeValue = Number(dropdownlistTime.selection.text);

    // Conversion des minutes en millisecondes
    timeValue = timeValue * 60000;

    alert(timeValue);

    return timeValue;
}

// Sauvegarde automatique toutes les 10 minutes
function saveData() {
    alert("Data saved!");
}

//                          GUI
// ======================================================

{
    function gui_AdobeTeamSaver(thisObj) {
        function gui_AdobeTeamSaver_buildUI(thisObj) {

            /*
            Code for Import https://scriptui.joonas.me — (Triple click to select): 
            {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"win","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[350,200],"margins":16,"orientation":"row","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupNewPath","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"dropdownlistTime","text":"DropDownList","listItems":"5,10,15,20,25,30,35,40,45,50,55,60","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupTimeSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave1","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Sauvegarder à chaque","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave2","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"minutes","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Divider","parentId":2,"style":{"enabled":true,"varName":null}}},"order":[0,2,4,3,1,10,7,8,6,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":9}
            */ 

            // win
            // ===================
            var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Adobe-Team-Saver", undefined, {resizeable:true, closeButton: false});
                win.text = "Adobe-Team-Saver"; 
                win.preferredSize.width = -1; 
                win.preferredSize.height = -1; 
                win.orientation = "row"; 
                win.alignChildren = ["center","top"]; 
                win.spacing = 10; 
                win.margins = 16; 

            // PANELNEWPATH
            // ============
            var panelNewPath = win.add("panel", undefined, undefined, {name: "panelNewPath"}); 
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

            var dropdownlistTime_array = [5,10,15,20,25,30,35,40,45,50,55,60]; 
            var dropdownlistTime = groupTimeSave.add("dropdownlist", undefined, undefined, {name: "dropdownlistTime", items: dropdownlistTime_array}); 
                dropdownlistTime.selection = 5; 

            var textTimeSave2 = groupTimeSave.add("statictext", undefined, undefined, {name: "textTimeSave2"}); 
                textTimeSave2.text = "minutes";


            // Lorsque la valeur de la dropdownlist change
            dropdownlistTime.onChange = function() {
                setTimeValue(dropdownlistTime);
            }
            

            win.layout.layout(true);

            return win;
        }

        var AdobeTeamSaver = gui_AdobeTeamSaver_buildUI(thisObj);

        AdobeTeamSaver instanceof Window? (AdobeTeamSaver.center(), AdobeTeamSaver.show()) : (AdobeTeamSaver.layout.layout(true), AdobeTeamSaver.layout.resize());
    }
    gui_AdobeTeamSaver(this);
}
