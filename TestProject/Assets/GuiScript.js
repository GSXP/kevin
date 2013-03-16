#pragma strict

var mySkin : GUISkin;

var useMySkin = false;

var toggleSelected = false;

var toolbarInt = 0;
var toolbarStrings : String[] = ["Toolbar1", "Toolbar2", "Toolbar3"];


function Start () {

}

function Update () {

}

function OnGUI(){

	if(useMySkin){
	
		GUI.skin = mySkin;
	}
	else
	{
		GUI.skin = null;
	}

	GUI.Box (Rect (10,10,110,90), "Skin Menu", "box");

	if (GUI.Button (Rect (20,40,90,20), "Default Skin", "button")) {
		
		useMySkin = false;
	}

	if (GUI.Button (Rect (20,70,90,20), "My Skin", "button")) {

		useMySkin = true;
	}

	var nullString : String = null;
	
	toggleSelected = GUI.Toggle (Rect (20, 100, 17, 17), toggleSelected, "", "toggle");
	
	toolbarInt = GUI.Toolbar (Rect (20, 130, 250, 30), toolbarInt, toolbarStrings, "button");
}