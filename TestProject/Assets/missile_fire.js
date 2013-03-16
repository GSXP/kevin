public var arrow : Transform;
public var missiles : Transform;

function Update ()
{
	if(Input.GetButtonDown("Fire1"))
	{
    
	    var camera = GameObject.Find("Main Camera").camera;
	
	    var newPosition   = Vector3(Input.mousePosition.x, Input.mousePosition.y
	    		, missiles.transform.position.z - camera.transform.position.z);
	    
	    var mouseWorldPosition  = camera.main.ScreenToWorldPoint(newPosition);
	    
	    var rotation = Quaternion.LookRotation(mouseWorldPosition - missiles.transform.position);
	    		
	    var zRotation = -90;
	    var direction = 180;
	    
	    if(mouseWorldPosition.x < transform.position.x){
	    
	    	print("gets to left of position");
	    
	    	zRotation = 90;
	    	direction = 270;
	    }
	    
	   
		var newMissile = Instantiate (arrow, missiles.position, Quaternion.Euler(0, 0, zRotation) * rotation);
	
	    if(mouseWorldPosition.x < transform.position.x){
	    
	    	newMissile.GetComponent("Arrow_Move").direction = direction;
	    }
	}
}