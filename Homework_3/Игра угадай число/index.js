let userNum = prompt("Угадайте число от 0 до 100: ")
function game(num)
{
    let winNum = parseInt(Math.random()*100)
    while (num != winNum)
        if (num > winNum)
            num = prompt(`Число ${num} БОЛЬШЕ загадонного\nВведите другое число:`)
        else if (num < winNum)
            num = prompt(`Число ${num} МЕНЬШЕ загадонного\nВведите другое число:`)
    alert("Ура! Победа!\nВы угадали)")
}

game(userNum)

