document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#feedbackModal');
    const btn = document.querySelector('#feedbackBtn');
    const span = document.querySelector('.close');
    const form = document.querySelector('#feedbackForm');

    btn.addEventListener('click', function() {
        modal.classList.add('active');
    });
    span.addEventListener('click', function() {
        modal.classList.remove('active');
    })

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.classList.remove('active');
        }
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const fileInput = document.querySelector('#file');
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            const maxSize = 2 * 1024 * 1024;
            
            if (!validTypes.includes(file.type)) {
                alert('Пожалуйста, загрузите файл в формате JPG, PNG или PDF.');
                return;
            }
            
            if (file.size > maxSize) {
                alert('Файл слишком большой. Максимальный размер - 2MB.');
                return;
            }
        }
        const agreeCheckbox = document.querySelector('#agree');
        if (!agreeCheckbox.checked) {
            alert('Необходимо согласие на обработку персональных данных.');
            return;
        }
        alert('Форма успешно отправлена!');
        modal.classList.remove('active');
        form.reset();
    });
});