while True:
    print(input.acceleration(Dimension.Y))

    if input.acceleration(Dimension.Y) > 0 or input.acceleration(Dimension.Y) < 0:
        light.set_all(color.rgb(255, 0, 255))

    else:
        light.clear()
        pause(300)
