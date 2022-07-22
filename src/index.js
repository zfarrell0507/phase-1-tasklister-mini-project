document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.children[1].value)
    form.reset()
  })
});

function buildTask(todo) {
  let li = document.createElement('li')
  li.textContent = `${todo} `
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
