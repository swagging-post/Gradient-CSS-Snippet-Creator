function createGradient() {
    const colorLeft = document.getElementById('color-left').value;
    const colorRight = document.getElementById('color-right').value;
    const gradientType = document.getElementById('gradient-type').value;
    const degree = document.getElementById('degree').value;

    const gradientBox = document.getElementById('gradient-box');
    if (gradientType === "radial-gradient") {
        gradientBox.style.backgroundImage = `${gradientType}(${colorLeft}, ${colorRight})`;
    } else {
        gradientBox.style.backgroundImage = `${gradientType}(${degree}deg, ${colorLeft}, ${colorRight})`;
    }
}

function toggleCreateButton() {
    const dynamicUpdate = document.getElementById('dynamic-update').checked;
    const createButton = document.getElementById('create-button');

    if (dynamicUpdate) {
        createButton.classList.add('disabled');
        createButton.disabled = true;
        createButton.removeEventListener('mouseenter', addHoverEffect);
        createButton.removeEventListener('mouseleave', removeHoverEffect);
    } else {
        createButton.classList.remove('disabled');
        createButton.disabled = false;
        createButton.addEventListener('mouseenter', addHoverEffect);
        createButton.addEventListener('mouseleave', removeHoverEffect);
    }
}

function addHoverEffect() {
    this.style.backgroundColor = "#45a049";
}

function removeHoverEffect() {
    this.style.backgroundColor = "#4CAF50";
}

document.getElementById('dynamic-update').addEventListener('change', function() {
    toggleCreateButton();
    if (this.checked) {
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', createGradient);
        });
    } else {
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.removeEventListener('change', createGradient);
        });
    }
});

toggleCreateButton(); // state check
