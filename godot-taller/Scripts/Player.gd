extends KinematicBody2D

export (int) var speed = 600

onready var playback = $AnimationTree.get("parameters/playback")

var movement = Vector2(0, 0)

func get_input():
	movement = Vector2()

	if Input.is_action_pressed("move_right"):
		movement.x += speed
		playback.travel("move_right")
	if Input.is_action_pressed("move_left"):
		movement.x -= speed
		playback.travel("move_left")
	if Input.is_action_pressed("move_up"):
		movement.y -= speed
	if Input.is_action_pressed("move_down"):
		movement.y += speed
	if movement == Vector2():
		playback.start("RESET")

func _physics_process(delta):
	get_input()
	movement = move_and_slide(movement)
