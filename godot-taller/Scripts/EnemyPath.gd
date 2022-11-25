extends Path2D

export (float) var speed = 200

var paths

func _ready():
	paths = get_children()

func _physics_process(delta):
	for path in paths:
		path.offset += speed * delta
