extends Area2D

export (int) var speed = 500

onready var players = get_tree().get_nodes_in_group("player")

var movement = Vector2()

func _physics_process(delta):
	var player_pos = players[0].global_position
	global_position = global_position.move_toward(player_pos, speed * delta)
