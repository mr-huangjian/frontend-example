import httplog from "./httplog.js"

httplog({ foo: "bar" })

httplog.enable = false
httplog({ foo: "ok" })
