const res = document.getElementById('res')
var operator = ''

// add eventlistener for each button
const buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener('click', buttonClick)

// button click event function
// e = event
function buttonClick(e) {
    let button = e.target || e.srcElement;

    if (button.id == 'btnClr') {
        res.innerHTML = ''
        operator = ''
    } else if (button.id != 'btnEql') {
        if (button.id != 'btn0' && button.id != 'btn1') {
            if (operator != '') {
                evaluate()
            }
            operator = button.innerHTML
        }
        res.innerHTML += button.innerHTML
    } else {
        evaluate()
    }
}

function evaluate() {
    let operands = res.innerHTML.split(operator)
    res.innerHTML = (Math.floor(eval(parseInt(operands[0], 2)) + operator + parseInt(operands[1], 2))).toString(2)

    operator = ''
}