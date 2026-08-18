x = 0
hummingbird.start_hummingbird()
hummingbird.set_led(ThreePort.ONE, 100)
while x == 0:
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
        basic.pause(1000)
        basic.show_leds("""
            . # # # .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            """)
        basic.pause(1000)
        basic.show_leds("""
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            """)
        basic.pause(1000)
        x = randint(1, 3)
        if x == 1:
            basic.show_leds("""
                # # # # .
                # . . # .
                # # # . .
                # . # . .
                # . . # .
                """)
        elif x == 2:
            basic.show_leds("""
                . # # # .
                . # . # .
                . # # # .
                . # . . .
                . # . . .
                """)
        elif x == 3:
            basic.show_leds("""
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                """)
        x = 0