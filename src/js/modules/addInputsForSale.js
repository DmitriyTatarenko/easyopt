
const addInputsForSale = (allSelects) => {
    const selects = document.querySelectorAll(allSelects);
    const createdInputs = {}; // Объект для хранения созданных инпутов

    selects.forEach(function(select) {
        select.addEventListener('change', function () {
            
            const selectedText = select.options[select.selectedIndex].textContent;
            const parentOfSelect = select.parentElement;
            
            // Удаляем предыдущий инпут, если он существует для текущего селекта
            if (createdInputs[select.id]) {
                createdInputs[select.id].remove();
                delete createdInputs[select.id]; // Удаляем запись из объекта
            }

            if (selectedText !== '-/-') {
                const newInput = document.createElement('input');
                newInput.type = 'number';
                newInput.classList.add('choose__wrapper_item-input');
                newInput.placeholder = 'К-во';
                newInput.id = select.id;
               

                parentOfSelect.insertAdjacentElement('afterend', newInput);

               

                createdInputs[select.id] = newInput; // Сохраняем инпут в объект с использованием идентификатора селекта
            }
        });
    });
};










export default addInputsForSale;
