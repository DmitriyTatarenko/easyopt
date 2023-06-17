const createTxt = (allSelects, blockOfResult) => {
   
    const selects = document.querySelectorAll(allSelects);
    const resultBlock = document.querySelector(blockOfResult);
   
   
    
    function createStr() {
        selects.forEach(select => {
            select.addEventListener('change', function () {  
            const selectedIndex = select.selectedIndex;
            const selectedOption = select.options.item(selectedIndex);
            const selectedText = selectedOption.textContent;
            let selectedOptionVal = selectedOption.value;
            const wrapperItem = document.querySelectorAll('.choose__wrapper_item');
          
            
            function checkInput(callback) {
                wrapperItem.forEach(item => {
                  const closestInput = item.querySelectorAll('input');
                  closestInput.forEach(input => {
                    input.addEventListener('change', function() {
                      const currVal = input.value;
                      let str = currVal.toString();
                      callback(str);
                    });
                  });
                });
              }
              
              checkInput(function(result) {
                if(selectedText !== '-/-') {
                    let arr = [];
                    let newBlock = document.createElement('div');
                    const itemSumm = parseFloat(result * selectedOptionVal).toFixed(1);

                   
                    //Создаем текстовый блок округляя до 1 знака после запятой
                    
                     newBlock.textContent = `${selectedText}: ${result} * ${selectedOptionVal} = ${itemSumm}`;
                     arr.push(itemSumm);
                     newBlock.classList.add('result__text_item');
                     resultBlock.appendChild(newBlock);
                     
              
                 }
                

              });

            });
            
            
        });
       
    }
    createStr();

};

export default createTxt;
