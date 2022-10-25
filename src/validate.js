import { saveMe } from "./saveData.js";

export function validation(response, btn, notValidated,currentProject) {

  if (response) {
    btn.style.display = 'none'

    btn.parentNode.querySelector('.validated').style.display = 'block'
saveMe(btn,currentProject);

  }
  else {
    btn.disabled = false;
    btn.classList.remove('no-hover')
    btn.classList.remove('grey-me')

    notValidated.style.display = 'block'


  }

}