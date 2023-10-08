const changeActiveBtn = (activeBtn, currentBtn) => {
    activeBtn.classList.remove('active');
    currentBtn.classList.add('active');
    return currentBtn;
}

export default changeActiveBtn;