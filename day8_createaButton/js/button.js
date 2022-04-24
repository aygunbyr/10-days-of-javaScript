// Create btn dynamically
var btn = document.createElement("Button")
btn.id = 'btn'
btn.innerHTML = "0"

// Append btn as child of body
document.body.appendChild(btn)

// On click function
btn.onclick = () => {
    btn.innerHTML = Number(btn.innerHTML) + 1
}