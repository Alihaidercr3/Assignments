

    let dayNum = +prompt("Enter day number 1-7.")

    switch (dayNum) {
        case 1:
            alert("Monday")
            break;
        case 2:
            alert("Tuesday")
            break;
        case 3:
            alert("Wednesday")
            break;
        case 4:
            alert("Thursday")
            break;
        case 5:
            alert("Friday")
            break;
        case 6:
            alert("Saturday")
            break;
        case 7:
            alert("Sunday")
            break;

        default:
            alert("Please enter valid number only.")
            break;
    }