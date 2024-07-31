projectName = app.project.file.name; // Nom du projet
projectPath = app.project.path; // Chemin du projet
console = app.console; // Console de debug

$.writeln("The project name is ", projectName)
// alert("Your OS is " + system.osName + " running version " + system.osVersion);
// confirm("You are: " + system.userName + " running on " + system.machineName + ".");
// app.project.saveAs(projectName + ".prproj")
alert(app.project.file.name);

$.writeln(projectPath)

$.writeln("The project has been saved") 