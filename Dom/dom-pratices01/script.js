const  body = document.body

// body.append("Hello World", "Bye")


const div = document.createElement('div')

// div.innerText ="Hello World"
// div.textContent ="Hello World"

// div.innerHTML =<stong>" Hellow world 2"</stong>
            
                 //   or

const strong = document.createElement('strong')
strong.innerText = "Hello world 2"
div.append(strong)



body.append(div)
