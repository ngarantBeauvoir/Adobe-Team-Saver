projectName = app.project.name; // Nom du projet
projectPath = app.project.path; // Chemin du projet

$.writeln("The project name is ", projectName)

app.project.saveAs(projectName + ".prproj")

$.writeln(projectPath)

$.writeln("The project has been saved")