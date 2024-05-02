#import "main.typ": *
#flex(
    [
        the slope of a line is how fast it rises.
    ],
    
    text(
        name: "slope-triangle",
        arrows: true,
        label: "a gentle slope",
        points: ("(-2", "0)", "(3", "1)"),
        multiline-description: true,
        defined-as: "dydx"
    , "diagram")
)
#flex(
    [
        sometimes the slope is steep
    ],
    
    text(
        name: "slope-triangle",
        arrows: true,
        background: "plain-grid",
        points: ("(-2", "-2)", "(1", "5)"),
        defined-as: "m"
    , "diagram")
)
#flex(
    [
        sometimes it points down.
    ],
    
    text(
        name: "slope-triangle",
        arrows: true,
        stick-figure: "Ahhh!",
        background: "schoolbook",
        defined-as: "rise/run"
    , "diagram")
)
#flex(
    [
        sometimes it doesnt go anywhere at all
    ],
    
    text(
        name: "slope-triangle",
        format: "arrows",
        stick-figures: ((x-pos: 1, text: "Why arent we moving?"), (x-pos: 3, text: "Because the slope is 0")),
        defined-as: "equation"
    , "diagram")
)
#flex(
    text(
        diagram: (name: "spiderman", import: true)
    , "slope goes by many names")
)