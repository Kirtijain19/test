function createCard(title, cname, views, monthsOLd, duration, thumbnail) {
    //finish this function
    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "K"
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {

    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewStr} views . ${monthsOLd} months ago</p>
            </div>
        </div>`
}

createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/nkaAJYfRDVk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBAO-vFdbNCEsT_yxB5HVqTscTA")