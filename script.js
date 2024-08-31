// Шаг 1: Создаём переменную alphabet, в которой хранится алфавит
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Функция для генерации случайного слова
function generateRandomWord() {
    let randomWord = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomWord += alphabet[randomIndex];
    }

    // Выводим случайное слово на экран
    document.getElementById('randomWord').textContent = randomWord;
}

// Генерируем случайное слово при загрузке страницы
generateRandomWord();
