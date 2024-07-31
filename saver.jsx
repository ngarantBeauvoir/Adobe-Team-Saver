projectName = app.project.name; // Nom du projet
projectPath = app.project.path; // Chemin du projet
console = app.console; // Console de debug

$.writeln("The project name is ", projectName)
alert("Your OS is " + system.osName + " running version " + system.osVersion);
confirm("You are: " + system.userName + " running on " + system.machineName + ".");
// app.project.saveAs(projectName + ".prproj")
console.log(app.project)

$.writeln(projectPath)

$.writeln("The project has been saved") 