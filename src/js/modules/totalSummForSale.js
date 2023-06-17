const totalSummForSale = (parent, button, resultItems, finalSumm, classOfSummBlock) => {
    const parentBlock = document.querySelector(parent);  
    const btn = document.querySelector(button);
    const arr = [];
    
    btn.addEventListener('click', () => {
        const items = document.querySelectorAll(resultItems);
        //Перебераю каждый блок, вытягиваю всё что после "=" и добавляю в ввиде числа в массив
        items.forEach(item => {
            const summPerItem = item.textContent.substring(item.textContent.indexOf('=') + 1);
            arr.push(+summPerItem);
            
        });
        //Суммирую весь массив, результат добавляю в созданный элемент на странице
        let result = parseFloat(arr.reduce((total, curr) => total + curr)).toFixed(1);
        const summ = document.querySelector(finalSumm);
        
    //Создаем элемент
        function createSummElem () {
            const summBlock = document.createElement('div');
                  summBlock.classList.add(classOfSummBlock);
                  summBlock.textContent = `Сумма: ${result} грн`;
                  parentBlock.appendChild(summBlock);
                  result = 0;
        }
    
    //Удаляем элемент
        function removeSummElem () {
            summ.remove();
        }
    //Если в result__text нет блока summ - создаем, если есть - удаляем,а потом создаем новый
        if(!parentBlock.contains(summ)) {
            createSummElem();
        } else {
            removeSummElem();
            createSummElem();
        }
    //Обнуляем массив 
        arr.length = 0;
    
        
        
        
    
            
                
                
    });
    
    
    
    };
    
    
    
    export default totalSummForSale;