    // Функция поиска и перемещения к изображению
    function filterImages() {
        var input = document.getElementById("search");
        var filter = input.value.toLowerCase();
        var images = document.querySelectorAll('.video-container img');

        var found = false;  // Флаг для проверки, найдено ли изображение

        images.forEach(function(image) {
            var title = image.getAttribute("title").toLowerCase();

            // Если заголовок изображения содержит текст из поиска
            if (title.includes(filter)) {
                if (!found) {
                    // Плавно перемещаемся к первому найденному изображению
                    image.scrollIntoView({ behavior: "smooth", block: "center" });
                    found = true;  // Устанавливаем флаг, что изображение найдено
                }
            }
        });

        // Если ничего не найдено, ничего не происходит
    }