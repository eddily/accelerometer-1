while (true) {
    console.log(input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) > 0 || input.acceleration(Dimension.Y) < 0) {
        light.setAll(color.rgb(255, 0, 255))
    } else {
        light.clear()
        pause(300)
    }
    
}
