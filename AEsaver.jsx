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
- Tester la sauvegarde
- Automatiser la sauvegarde
- Redondance


- DONE Path de sauvegarde interactif
- DONE Logique si le projet est un TeamProject
- DONE Date et heure de sauvegarde
*/

/*
                     Variables
======================================================
*/

// Variables de Projet
// -------------------
var projectFileName = "RENOMEZ-MOI";                                // Nom du projet

// Si le projet est un TeamProject
if (app.project.file != null) {
 projectFileName = app.project.file.name;
}

var projectFileName = projectFileName.replace(".aep", "");          // Suppression du.aep
var projectPath = app.project.file;                                 // Chemin du projet
var defaultPath = Folder.desktop;                                   // Dossier par défaut (bureau)
var defaultPathString = defaultPath.path;                           // Chemin du dossier par défaut (bureau)
var defaultFile = new File( defaultPathString + projectFileName + ".aep" ); // Nouveau fichier projet

var selectedFolder = new Folder(defaultPath);   // Chemin du dossier sélectionné

var saveTaskID = 0; // ID de la tâche de sauvegarde


// Variables de temps
var timeValue = 30 * 60000;  // Valeur du temps de sauvegarde de base en millisecondes (30 minutes)

//                      Functions
// ======================================================


// Loop de sauvegarde
function saveLoop() {
    // TODO à faire fonctionner
    var taskId = app.scheduleTask('saveProject()', timeValue, true);
}

// Lorsque la valeur de la dropdownlist change
function setTimeValue(dropdownlistTime) {

    // Valeur du temps de sauvegarde
    timeValue = Number(dropdownlistTime.selection.text);

    // Conversion des minutes en millisecondes
    timeValue = timeValue * 60000;

    $.writeln("setTimeValue(): Intervale de temps de sauvegarde : " + timeValue);
    return timeValue;
}

// Sauvegarde automatique toutes les 10 minutes
function saveProject() {
    saveFile = new File (getSaveFile());

    // Sauvegarde du projet
    app.project.convertTeamProjectToProject(saveFile);
    app.project.save(saveFile);

    $.writeln("saveProject(): Le projet a été sauvegardé");
}

function getSaveFile(){
    var date = getCurrentTime();
    // var saveFile = new File(selectedFolder + "/" + projectFileName + date + ".aep");
    var saveFile = String(selectedFolder) + "/" + projectFileName + date + ".aep";

    $.writeln("getSaveFile(): Fichier de sauvegarde: " + saveFile);
    return saveFile;
}

// Selection du chemin de sauvegarde
function setFolder() {
    var tempFolder = Folder(defaultPathString).selectDlg("Sélectionner le dossier de sauvegarde");

    $$.writeln("setFolder(): Chemin du dossier sélectionné: " + tempFolder);
    return tempFolder;
}

// Chercher date du jour en format YYYY-MM-DD-HH-MM-SS
function getCurrentTime() {
    var date = new Date();

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
    var hh = date.getHours().toString();
    var min = date.getMinutes().toString();
    var ss = date.getSeconds().toString();


    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var hhChars = hh.split('');
    var minChars = min.split('');
    var ssChars = ss.split('');

    var now = yyyy +  (mmChars[1]?mm:"0"+mmChars[0]) +  (ddChars[1]?dd:"0"+ddChars[0]) + '_' + (hhChars[1]?hh:"0"+hhChars[0]) +  (minChars[1]?min:"0"+minChars[0]) +  (ssChars[1]?ss:"0"+ssChars[0]);
    
    $.writeln("getCurrentTime(): Date : " + now);
    return today;
}

saveLoop();
//                          GUI
// ======================================================

{
    function gui_AdobeTeamSaver(thisObj) {
        function gui_AdobeTeamSaver_buildUI(thisObj) {

            /*
            Code for Import https://scriptui.joonas.me — (Triple click to select): 
            {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"win","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[350,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupNewPath","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"dropdownlistTime","text":"DropDownList","listItems":"5,10,15,20,25,30,35,40,45,50,55,60","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupTimeSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave1","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Sauvegarder à chaque","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave2","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"minutes","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Divider","parentId":2,"style":{"enabled":true,"varName":null}}},"order":[0,2,4,3,1,10,7,8,6,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":9}
            */ 

            /*
            Code for Import https://scriptui.joonas.me — (Triple click to select): 
            {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"win","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Adobe-Team-Saver","preferredSize":[350,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"EditText","parentId":13,"style":{"enabled":true,"varName":"editNewPath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panelNewPath","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sauvegarde","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"textNewPath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Emplacement de sauvegarde automatique","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupNewPath","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"dropdownlistTime","text":"DropDownList","listItems":"5,10,15,20,25,30,35,40,45,50,55,60","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"groupTimeSave","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave1","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Sauvegarder à chaque","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"textTimeSave2","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"minutes","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Divider","parentId":2,"style":{"enabled":true,"varName":null}},"item-11":{"id":11,"type":"Button","parentId":0,"style":{"enabled":true,"varName":null,"text":"Button","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":13,"style":{"enabled":true,"varName":"buttonOpenPath","text":"Ouvrir","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"groupSelectPath","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}}},"order":[0,2,4,3,13,1,12,10,7,8,6,9,11],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":13}
            */ 

            // win
            // ===================
            var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Adobe-Team-Saver", undefined, {resizeable:true, closeButton: false});
                win.text = "Adobe-Team-Saver"; 
                win.preferredSize.width = -1; 
                win.preferredSize.height = -1; 
                win.orientation = "column"; 
                win.alignChildren = ["left","top"]; 
                win.spacing = 10; 
                win.margins = 16; 

            // PANELNEWPATH
            // ============
            var panelNewPath = win.add("panel", undefined, undefined, {name: "panelNewPath"}); 
                panelNewPath.text = "Sauvegarde"; 
                panelNewPath.preferredSize.width = -1;
                panelNewPath.preferredSize.height = -1;
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

            // GROUPSELECTPATH
            // ===============
            var groupSelectPath = groupNewPath.add("group", undefined, {name: "groupSelectPath"}); 
                groupSelectPath.orientation = "row"; 
                groupSelectPath.alignChildren = ["center","center"];
                groupSelectPath.alignment = ["fill", "center"];
                groupSelectPath.spacing = 10; 
                groupSelectPath.margins = 0; 

            var editNewPath = groupSelectPath.add('edittext {properties: {name: "editNewPath"}}'); 
                editNewPath.text = defaultPath; 
                editNewPath.preferredSize.width = 120; 

            var buttonOpenPath = groupSelectPath.add("button", undefined, undefined, {name: "buttonOpenPath"}); 
                buttonOpenPath.text = "Ouvrir";

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
                
                // Lorsque la valeur change, annule la tache de sauvegarde en cours et recommence
                app.cancelTask(saveTaskID);
                saveLoop();
            }
            
            // Selection du chemin de sauvegarde et changement du texte affiché
            buttonOpenPath.onClick = function() {
                var tempFolder = setFolder();
                
                // Vérifie si le dossier a été sélectionné, sinon ne change pas la valeur
                if (tempFolder != null) {
                    selectedFolder = tempFolder;
                    editNewPath.text =  selectedFolder; 
                    app.cancelTask(saveTaskID);
                    saveLoop();
                }
            }

            win.layout.layout(true);

            return win;
        }

        var AdobeTeamSaver = gui_AdobeTeamSaver_buildUI(thisObj);

        AdobeTeamSaver instanceof Window? (AdobeTeamSaver.center(), AdobeTeamSaver.show()) : (AdobeTeamSaver.layout.layout(true), AdobeTeamSaver.layout.resize());
    }
    gui_AdobeTeamSaver(this);
}
