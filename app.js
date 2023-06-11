Date.prototype.getDaysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

data = {
    date: new Date(),
    offset: 0,
}

function clearTds() {
    let tds = document.getElementsByClassName('td')
    for (const item of tds) {
        item.style.backgroundColor = '#ff7878'
        item.innerText = ''
    }
}

function draw(date = new Date(), showDay = true, draw = true) {
    clearTds()
    const dateElement = document.getElementById('date')
    let month = ((date.getMonth() + 1) / 2)
    if (showDay === false) {
        if (month >= 5) {
            let str = (date.getMonth() + 1) + '.' + date.getFullYear()
            dateElement.innerText = str
        } else {
            let str = '0' + (date.getMonth() + 1) + '.' + date.getFullYear()
            dateElement.innerText = str;
        }
    } else {
        if (month >= 5) {
            let str = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
            dateElement.innerText = str
        } else {
            let str = date.getDate() + '.' + ('0' + String(date.getMonth() + 1)) + '.' + date.getFullYear()
            dateElement.innerText = str
        }

    }

    if (draw === false);
    else {
        let tds = document.getElementsByClassName('td');
        let daysInMonth = date.getDaysInMonth()
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
        if (Number(firstDayOfMonth) === 0) {
            for (const i in tds) {
                if (Number(i) === Number(7 - 1)) {
                    for (let j = i, l = 0; l < daysInMonth; j++, l++) {
                        tds[j].innerText = Number(l + 1)
                    }
                    break;
                } else;
            }
        } else {
            for (const i in tds) {
                if (Number(i) === Number(firstDayOfMonth - 1)) {
                    for (let j = i, l = 0; l < daysInMonth; j++, l++) {
                        tds[j].innerText = Number(l + 1)
                    }
                    break;
                } else;
            }
        }
    }
}

function nextMonth(data) {
    data.offset += 1
    draw(new Date(data.date.getFullYear(), data.date.getMonth() + data.offset, data.date.getDate()))
    if (data.offset === 0) {
        draw(new Date(data.date.getFullYear(), data.date.getMonth() + data.offset, data.date.getDate()), showDay = true)
    } else {
        draw(new Date(data.date.getFullYear(), data.date.getMonth() + data.offset, data.date.getDate()), showDay = false)
    }
}

function prevMonth(data) {
    data.offset -= 1
    if (data.offset === 0) {
        draw(new Date(data.date.getFullYear(), data.date.getMonth() + data.offset, data.date.getDate()), showDay = true)
    } else {
        draw(new Date(data.date.getFullYear(), data.date.getMonth() + data.offset, data.date.getDate()), showDay = false)
    }
}

function tdClick(element) {
    let tds = document.getElementsByClassName('td');
    for (const item of tds) {
        item.style.backgroundColor = '#ff7878'
    }

    if (element.innerText === '') {
        draw(date = new Date(data.date.getFullYear(), (data.date.getMonth() + data.offset), 1), showDay = false);
    } else {
        draw(date = new Date(data.date.getFullYear(), (data.date.getMonth() + data.offset), String(element.innerText)), showDay = true);
    }

    element.style.backgroundColor = '#aa3a3a';
}

window.addEventListener('load', () => {
    let tds = document.getElementsByClassName('td');
    for (const item of tds) {
        item.addEventListener('click', () => {
            tdClick(item)
        });
    }

    draw(date = data.date, showDay = true)
})