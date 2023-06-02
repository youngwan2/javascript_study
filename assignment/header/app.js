

const topBackCon = document.querySelector('.top_back_content');
const navUl = document.querySelector('.nav_ul')


const navList = [
    {
        title: 'About',
        desc: "About 내용1"
    },
    {
        title: 'Products',
        desc: "products 내용1"
    },
    {
        title: 'Technology',
        desc: "Technology 내용1"
    },
    {
        title: 'Dowunloads',
        desc: "Dowunloads 내용1"
    },
    {
        title: 'Etc',
        desc: "Etc 내용1"
    },
]

console.log(navList.length)

const render = () => {

    let navUlHTML = ''

    for (let i = 0; i < navList.length; i++) {
        navUlHTML += `
            <li>${navList[i].title}</li>
            `
    }
    navUl.innerHTML = navUlHTML
}
render();


const menu = document.querySelectorAll('li')

menu.forEach((li, i) => {
    li.addEventListener('click', (e) => {
        choiceTopBackRender(e.target)
    })
})


const choiceTopBackRender = (target) => {
    let topBackHTML = ''
    console.log(target)
    for (let i = 0; i < navList.length; i++) {
        if (target.textContent === navList[i].title) {
            topBackHTML += `
        <h2>${navList[i].title}</h2>
        <p>
            ${navList[i].desc}
        </p>
        `
        }

    }

    topBackCon.innerHTML = topBackHTML
}
