let myName = prompt("Как вас зовут?", "Введите ваше имя")
function GetName(name)
{
    let userName = name + ", добро пожаловать на наш сайт!"
    return userName
}
alert(GetName(myName))

