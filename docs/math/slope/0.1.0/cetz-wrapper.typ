#let cetz-wrapper(get: "", size: "default", scale-factor: 50%) = {
    let (path, key) = get.split(".")
    let module = include(path)
    let item = module.get(key)
    if size == "small" {
        item = scale(item, x: scale-factor, y: scale-factor)
    }
    return item
}

// /home/kdog3682/bkl/math/slope/0.1.0/nature.typ
