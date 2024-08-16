# Adobe-Team-Saver
Script pour sauvegarder les projets Teams Adobe localement.

1activerScripts.png
2activerScripts.png
3installScriptUI1.png
4scriptAdded.png
5selectScriptUI1.png
6window.png
7ui.png

# Installation After Effects

1. Télécharger le script `AEsaver.jsx` du répertoire Git

```bash
git clone --depth 1 https://github.com/ngarantBeauvoir/Adobe-Team-Saver.git
```


2. Ouvrir After Effects

3. Aller dans le menu `After Effects` > `Réglages` > `Modules de script et expressions`
---
<p align="center">
 <img src="images/1activerScripts.png" alt="Menu Module Script" width="500"/>
</p>


4. Dans la fenêtre qui s'ouvre, cocher la case `Autoriser les scripts à écrire des fichiers et à accéder au réseau` et `Activer le débogage JavaScript`
---
<p align="center">
    <img src="images/2activerScripts.png" alt="Menu Script UI" width="700"/>
</p>


5. Dans le menu `Fichier` > `Scripts` > `Installer le panneau ScriptUI`
---
<p align="center">
    <img src="images/3installScriptUI1.png" alt="Menu Script UI" width="500"/>
</p>


6. Dans la fenêtre Finder qui s'ouvre, choisir le script `AEsaver.jsx` et cliquer sur `Sélectionner`
---
<p align="center">
    <img src="images/4selectScript.png" alt="Menu Script UI" width="700"/>
</p>

7. Une fenêtre de dialogue s'ouvre, cliquer sur `OK` puis redémarrer After Effects
---
<p align="center">
    <img src="images/5scriptAdded.png" alt="Menu Script UI" width="700"/>
</p>

8. Une fois After Effects redémarré, dans le menu `Fenêtre` > `AEsaver.jsx`
---
<p align="center">
    <img src="images/6window.png" alt="Menu Script UI" width="400"/>
</p>

9. Commencer à sauvegarder vos projets!
---
<p align="center">
    <img src="images/7ui.png" alt="Menu Script UI" width="700"/>
</p>

## Emplacement des fichiers de ScriptUI
```bash
cp AEsaver.jsx ~/Library/Preferences/Adobe/After\ Effects/24.5/Scripts/ScriptUI\ Panels/AEsaver.jsx
```
