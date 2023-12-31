

export function ui(){

  const button = document.querySelector('button.info-button')
  const content = document.querySelector('.info-content')

  let to: ReturnType<typeof setTimeout>
  button?.addEventListener('click', () => { 
    
    button.classList.toggle('on')
    content?.classList.toggle('on')
    to && clearTimeout(to)
    
    if(content?.classList.contains('on')) {
      to = setTimeout(() => {
        button.classList.remove('on')
        content?.classList.remove('on')
      }, 5000)
    }
  })

}