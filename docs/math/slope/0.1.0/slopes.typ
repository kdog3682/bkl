#import "@preview/cetz:0.2.0"

#let axes = (
    axes: (
        y: (
            stroke: black, mark: (
                end: "stealth", start: "stealth", fill: black,
            ),
        ), x: (
            stroke: black, mark: (
                end: "stealth", start: "stealth", fill: black,
            ),
        ),
    ),
)

#let base(size: (10, 10), legend: none) = {
    if legend != none {
        legend = "legend.north-east"
    }

    cetz.canvas(
        {
            import cetz.plot
            import cetz.draw: *

            set-style( * * axes)

            plot.plot(
                size: size, name: "plot", x-min: -5.5, x-max: 5, y-min: -5.5, y-max: 5, x-tick-step: 1, y-tick-step: 1,
                //x-minor-tick-step: 0.5, y-minor-tick-step: 1,
                grid: true, legend: legend, legend-style: (
                    inset: 4pt, stroke: black, padding: 0.4, radius: 5pt, spacing: 0.1, item: ("spacing": 0.2, preview: (width: 0.4)),
                ), axis-style: "school-book", {
                    for curve in curves {
                        let opts = (
                            style: (stroke: curve.color), domain: curve.domain, label: text(curve.label, fill: curve.color), fn: curve.fn,
                        )
                        plot.add(**opts)
                    }
                },
            )
        },
    )
}

let curves = (
    (
        label: "flat",
        fn: (x) => (x / 10) + 1
    ),

    (
        label: "steep",
        fn: (x) => 6 * x
    ),

    (
        label: "up",
    ),

    (
    label: "down",
    )

)

#let arrow-down() = {}

// to assume the children are smart.
