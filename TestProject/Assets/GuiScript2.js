#pragma strict

var guiHeight : float;

// Valid values are top and bottom. Was going to make an object for an enum,
// but apparently the only way to do that in unity is to create a new script.
var orientation : String;

var healthLeftTexture : Texture2D;
var healthMissingTexture : Texture2D;

var manaLeftTexture : Texture2D;
var manaMissingTexture : Texture2D;

var healthBarWidth : float;
var manaBarWidth : float;

var currHealth : float;
var maxHealth : float;

var currMana : float;
var maxMana : float;

var spellIcons : Texture[];

function Start () {

	orientation = "TOP";
	guiHeight = 75.0;
	
	healthBarWidth = Screen.width / 4 - 20;
	manaBarWidth = healthBarWidth;

	currHealth = 50.0;
	maxHealth = 200.0;
	
	currMana = 230;
	maxMana = 276;
}

function Update () {

}

function OnGUI(){

  	var healthLeftWidth : float = currHealth / maxHealth * healthBarWidth;
  	var manaLeftWidth : float = currMana / maxMana * manaBarWidth;
  	
  	if(guiHeight < 20){
  	
  		guiHeight = 20;
  	}
  	
  	var vertHealthGap = (guiHeight - 20) / 3;
  	var horMargin = 10;
  	var horGap = 10;
  	  	
  	var originY : int = 0;
  	
  	if(orientation == "BOTTOM"){
  	
  		originY = Screen.height - guiHeight;	
  	}
  	
  	GUI.Box(new Rect(0, originY, Screen.width, guiHeight), "");
  	
  	GUI.Box(new Rect(Screen.width - guiHeight, originY, guiHeight, guiHeight), "Map");
  	
  	// Draw background of health bar.
	GUI.DrawTextureWithTexCoords(Rect(horMargin, originY + vertHealthGap, healthBarWidth, 10), healthMissingTexture
    		, Rect(0, 0, (1.0 * healthLeftWidth), 1.0), false);
    		
	// Draw background of mana bar.        		
 	GUI.DrawTextureWithTexCoords(Rect(horMargin, originY + vertHealthGap * 2 + 10, manaBarWidth, 10), manaMissingTexture
    		, Rect(0, 0, (1.0 * manaLeftWidth), 1.0), false);
        		
    if (currHealth > 0)
    {
    	// Draw health left on health bar.
  		GUI.DrawTextureWithTexCoords(Rect(horMargin, originY + vertHealthGap, healthLeftWidth, 10), healthLeftTexture
        		, Rect(0, 0, (1.0 * healthBarWidth), 1.0), false);
    }
    
    if (currMana > 0)
    {
    	// Draw mana left on mana bar.
  		GUI.DrawTextureWithTexCoords(Rect(horMargin, originY + vertHealthGap * 2 + 10, manaLeftWidth, 10), manaLeftTexture
        		, Rect(0, 0, (1.0 * manaBarWidth), 1.0), false);
    }
    
    
    var startX : int = horMargin + max(healthBarWidth, manaBarWidth);
    var numGaps : int = spellIcons.length - 1;
    var spellGap : int = 10;
    var spellHeight : int = guiHeight - 20;
    var currX = Screen.width / 2 - (numGaps * spellGap) / 2 - (spellIcons.length * spellHeight) / 2;
 	for(var spell in spellIcons){
 	
 		GUI.Button(new Rect(currX, originY + 10, spellHeight, spellHeight), spell);
 		currX += spellHeight + spellGap;
 	}
}

function max(a : int, b : int){

	return a > b ? a : b;
}