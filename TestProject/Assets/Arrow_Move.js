#pragma strict

var missileSpeed : float = 30;
var direction : int;

function Update ()
{
	
	transform.position += Quaternion.Euler(0, 0, direction) * transform.forward * Time.deltaTime * missileSpeed; //Translate(0, missileSpeed * Time.deltaTime, 0);
}