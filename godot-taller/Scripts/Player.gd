extends KinematicBody2D

export (int) var speed = 600

var movement = Vector2(0, 0)

func get_input():
	movement = Vector2()

	if Input.is_action_pressed("move_right"):
		movement.x += speed
	if Input.is_action_pressed("move_left"):
		movement.x -= speed
	if Input.is_action_pressed("move_up"):
		movement.y -= speed
	if Input.is_action_pressed("move_down"):
		movement.y += speed

func _physics_process(delta):
	get_input()
	movement = move_and_slide(movement)
