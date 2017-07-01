function toTimeString(d) {
    return String(d)
            .split(" ")
            .slice(4, 7)
            .join(" ");
}

const x = new Date()
console.log(toTimeString(x))
console.log(x.toTimeString())