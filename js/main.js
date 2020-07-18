var selectorAllElements = document.querySelectorAll('[data-select]');

selectorAllElements.forEach(function(item) {
    item.addEventListener('click', function(e){

        const realSelect = this.nextElementSibling;

        // Если кликнули по пунктам в дропдауне
        if(e.target.hasAttribute('data-select-item')) {

            var itemTitle = e.target.dataset.selectItem;

            // Нашли заголовок у данного дропдауна и записали в его текстовое наполнение значение из data-атрибута data-select-item
            this.querySelector('[data-select-title]').textContent =  e.target.dataset.selectItem;

            var selectItems = this.querySelectorAll('[data-select-item]')
            selectItems.forEach(function(item) {
                item.classList.remove('bg-color')
            })
            e.target.classList.toggle('bg-color');

            // Скрываем дропдаун
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');

            // Связка с реальным селектом
            // Изменяем значение value у релаьного селекта
            if (realSelect) {
                realSelect.value = itemTitle;
            }

        } else {
            // Если кликнули по заголовку
            // Скрываем или открываем дропдаун
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
        }
    })
})
