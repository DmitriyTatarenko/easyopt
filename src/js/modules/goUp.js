const goUp = () => {
    const upBtn = document.querySelector('.result__up-element');

    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    
};

export default goUp;