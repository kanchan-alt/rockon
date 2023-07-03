const  body = document.body

// body.append("Hello World", "Bye")


// const div = document.createElement('div')

// div.innerText ="Hello World"
// div.textContent ="Hello World"

// div.innerHTML =<stong>" Hellow world 2"</stong>
            
                 //   or

// const strong = document.createElement('strong')
// strong.innerText = "Hello world 2"
// div.append(strong)



// body.append(div)


// secand Example removing thing


// const div = document.createElement('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)



// 3 Example adding and removing attribute


const div = document.createElement('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
const spanDataAttirbute = document.querySelector('#dataAttribute')

console.log(spanHi.getAttribute('title'));

console.log(spanBye.setAttribute("id", "jsjjj"));
// console.log(spanBye.id ="gfhfjj");

// spanHi.removeAttribute("id"/"title")


// manipluating with data attibute

console.log(spanDataAttirbute.dataset);
console.log(spanDataAttirbute.dataset.test);

spanDataAttirbute.dataset.newName ="hi"


//className

spanHi.classList.add("new-class")
spanHi.classList.remove("new-class")
spanHi.classList.toggle("hi3", false)