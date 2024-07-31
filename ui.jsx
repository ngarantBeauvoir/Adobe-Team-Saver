// dockable script
// https://www.provideocoalition.com/after-effects-extendscript-training-ep-12/
{
   function myScript(thisObj){
      function myScript_buildUI(thisObj){
         var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: false});
         
         res = "group{orientation:'column',\
                        groupOne: Group{orientation:'row',\
                        createCompButton: Button{text:'Create Comp'},\
               },\
               groupTwo: Panel{orientation:'row',\
                        myText: StaticText{text:'Just some other UI stuff'},\
               },\
               groupThree: Group{orientation:'row',\
               closeButton: Button{text:'Close'},\
               },\
         }";

         myPanel.grp = myPanel.add(res);

         //Defaults (put your methods and UI declarations here)
         myPanel.grp.groupOne.createCompButton.onClick = function() {
             //var comp = app.project.items.addComp();
             //comp.openInViewer();
             }
         
        myPanel.grp.groupThree.closeButton.onClick = function() {
            myPanel.close();
            }
    
         
         myPanel.layout.layout(true);

         return myPanel;
      }
   
   
      var myScriptPal = myScript_buildUI(thisObj);

      if (myScriptPal != null && myScriptPal instanceof Window){
         myScriptPal.center();
         myScriptPal.show();
      }

   }
   myScript(this);
}