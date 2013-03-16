#pragma strict

/*function Start () {

}

function Update () {

    //var keyCode = Event.keyCode();
    // Jump
	//if (Input.GetKey(Event.Keycode.S)){
	
		
	//}
	
	// Move right
	//if(Input.GetKey(Event.Keycode.D)){
	
	//	transform.position.x++;
	//}
	
	//Move left
	//if(Input.GetKey(Inpuy.Keycode.A)){
	
	//	transform.position.x--;
	//}
	//transform.position.x++;
}*/

//Doesn't show this variable as property of the script
@System.NonSerialized
var isJumping = false;
var velocity = Vector3(0, 5, 0);

function Start () {

}

function Update () {

    //var Hero = GameObject.Find("Hero");
	//Hero.transform.position.x += Input.GetAxis("Horizontal") *.5;
	transform.position.x += Input.GetAxis("Horizontal") *.5;
	if(Input.GetMouseButtonUp(0) && !isJumping){
	
		isJumping = true;
		velocity = Vector3(0, .5, 0);
	}
	
	if(isJumping){
	
	    //print('gets here 89');
	    //print ('transform.position' + transform.position + " velocity: " + velocity);
		//Hero.transform.position += velocity;
		transform.position += velocity;
		velocity.y -= .1;
	}
}

function OnTriggerEnter(collider : Collider){

	isJumping = false;
	velocity.y = 0;
}