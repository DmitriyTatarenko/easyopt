import addInputs from "./addInputs";
import createTxt from "./createTxt";
const createNewSelect = (button, item, inner, classBtn, addInputsSelector, chooseSelect, resultTxt, pathOfNewSelect) => {

   //LAKTALIS 
    const btn = document.querySelector(button);
    const wrapperItem = document.querySelector(item);
    const someInner = inner;
    const btnSelector = classBtn;
    const addInputsPath = addInputsSelector;
    const chooseSelectList = chooseSelect;
    const resultText = resultTxt;
    const selectClass = pathOfNewSelect;


    //Клик на Лакталис кнопку
   btn.addEventListener('click', () => {
    
    const newSelect = document.createElement('div');
          newSelect.classList.add(selectClass);
     
          
          newSelect.innerHTML = someInner;
         

        wrapperItem.appendChild(newSelect);
        addInputs(addInputsPath);
        createTxt(chooseSelectList, resultText);
        btn.remove();
        
        wrapperItem.appendChild(btn);
        btn.classList.add(btnSelector);
   });

  
   
   

 
   
};

export default createNewSelect;