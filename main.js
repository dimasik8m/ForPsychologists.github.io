const questions = [
{
q: "Вопрос 1: Какое утверждение отражает суть конструктивного риска?",
a: ["Употребление наркотиков",
    "Спорт высших достижений и участие в олимпиаде",
    "Самоповреждения",
    "Экстремальные развлечения без безопасности"],
correct: 1
},
{
q: "Вопрос 2: Какие факторы повышают рискованное поведение?",
a: ["Доверие с родителями",
    "Давление сверстников и низкая самооценка",
    "Поддержка друзей",
    "Творчество"],
correct: 1
},
{
q: "Вопрос 3: Эффективная мера снижения риска?",
a: ["Игнорировать проблему",
    "Развивать сопротивление давлению",
    "Изоляция",
    "Опасные развлечения"],
correct: 1
},
{
q: "Вопрос 4: Почему подростки склонны к риску?",
a: ["Осознают последствия",
    "Самонадеянность и поиск самоутверждения",
    "Не подвержены влиянию",
    "Полностью защищены"],
correct: 1
},
{
q: "Вопрос 5: Социальные риски?",
a: ["Алкоголь, кибербуллинг, драки",
    "Курение и экстремальный спорт",
    "Самоповреждения",
    "Публикация данных"],
correct: 0
},
{
q: "Вопрос 6: НЕ деструктивное поведение?",
a: ["Употребление ПАВ",
    "Занятия спортом",
    "Самоповреждения",
    "Кибербуллинг"],
correct: 1
},
{
q: "Вопрос 7: Фактор риска?",
a: ["Поддержка семьи",
    "Доступность ПАВ и проблемы в семье",
    "Хобби",
    "Информированность"],
correct: 1
},
{
q: "Вопрос 8: Самопомощь?",
a: ["Импульсивность",
    "Методы снижения напряжения",
    "Опасные развлечения",
    "Игнорировать взрослых"],
correct: 1
},
{
q: "Вопрос 9: Зачем информированность?",
a: ["Не слушают советы",
    "Помогает принимать решения",
    "Единственная причина поведения",
    "Все знают сами"],
correct: 1
},
{
q: "Вопрос 10: Черты характера риска?",
a: ["Высокая самооценка",
    "Низкая самооценка и самоутверждение",
    "Ответственность",
    "Спокойствие"],
correct: 1
},
{
q: "Вопрос 11: Роль возраста?",
a: ["Уменьшают риск",
    "Поиск себя и бунтарство",
    "Исключают риск",
    "Полная защита"],
correct: 1
},
{
q: "Вопрос 12: Меры защиты?",
a: ["Недоверие родителям",
    "Позитивные друзья и сопротивление давлению",
    "Изоляция",
    "Неинформированность"],
correct: 1
},
{
q: "Вопрос 13: Безопасная альтернатива?",
a: ["Экстремальный спорт с тренером",
    "Опасные эксперименты",
    "Незаконные группы",
    "Общение с незнакомцами"],
correct: 0
},
{
q: "Вопрос 14: Зачем анализ последствий?",
a: ["Оправдываться",
    "Повышение ответственности",
    "Убедить других",
    "Не замечать последствий"],
correct: 1
},
{
q: "Вопрос 15: Шаги безопасного выбора?",
a: ["Оценить последствия и сказать «нет»",
    "Игнорировать последствия",
    "Искать риск",
    "Принимать решения мгновенно"],
correct: 0
}
];

const questions2 = [
{
q: "Вопрос 1: Какой механизм действия этанола вызывает зависимость?",
a: [
"Нарушение структуры нервных клеток мозга",
"Воздействие на систему вознаграждения в мозге",
"Угнетение сердечно-сосудистой системы",
"Повышение серотонина только в гипоталамусе"
],
correct: 1
},
{
q: "Вопрос 2: Последствие повреждения ствола мозга алкоголем?",
a: [
"Нарушение зрения и слуха",
"Осложнения в работе печени",
"Ослабление защитных реакций",
"Развитие диабета"
],
correct: 2
},
{
q: "Вопрос 3: Алкоголь при беременности приводит к:",
a: [
"ФАС и нарушениям мозга",
"Повышению иммунитета",
"Улучшению развития мозга",
"Повышению витаминов"
],
correct: 0
},
{
q: "Вопрос 4: Концентрация ~1,5% градусов алкоголя вызывает:",
a: [
"Неточность движений",
"Падения и выраженное опьянение",
"Невнятную речь",
"Ступор"
],
correct: 1
},
{
q: "Вопрос 5: Факторы приобщения несовершеннолетних к табаку:",
a: [
"Подражание друзьям и взрослым",
"Желание сохранить здоровье",
"Воздействие рекламы",
"Жажда избежать проблем в учебе"
],
correct: 0
},
{
q: "Вопрос 6: Признак того, что подросток начал курить:",
a: [
"Отсутствие запаха табака",
"Желтоватый налёт на зубах",
"Постоянное спокойствие",
"Увеличение энергии"
],
correct: 1
},
{
q: "Вопрос 7: Наиболее опасное последствие курения:",
a: [
"Ухудшение зрения",
"Повышение выносливости",
"Онкологические заболевания",
"Увеличение роста"
],
correct: 2
},
{
q: "Вопрос 8: Критерии включения вещества в список наркотиков:",
a: [
"Медицинский, социальный, юридический",
"Медицинский, экономический, экологический",
"Юридический, культурный, социальный",
"Медицинский, психологический, фармакологический"
],
correct: 0
},
{
q: "Вопрос 9: Последствия употребления опиатов:",
a: [
"Психическая зависимость и нарушение памяти",
"Высокий риск ВИЧ и снижение иммунитета",
"Повышение интеллекта",
"Укрепление иммунитета"
],
correct: 1
},
{
q: "Вопрос 10: Что характерно для психической зависимости?",
a: [
"Обострение ощущений без вещества",
"Потребность в употреблении для снятия напряжения",
"Полное отсутствие желания повторить",
"Автоматическая зависимость после многих приёмов"
],
correct: 1
},
{
q: "Вопрос 11: Последствия употребления экстази:",
a: [
"Полная безопасность",
"Сильная зависимость и повреждение мозга",
"Отсутствие влияния",
"Улучшение памяти"
],
correct: 1
},
{
q: "Вопрос 12: Метод противостояния социальному давлению:",
a: [
"Предлагать альтернативы",
"Игнорировать ситуацию",
"Беспокоиться и переубеждать",
"Согласиться"
],
correct: 0
},
{
q: "Вопрос 13: Причина уязвимости подростков:",
a: [
"Высокая уверенность",
"Недостаток информации и уверенности",
"Спортивные нагрузки",
"Полная независимость"
],
correct: 1
},
{
q: "Вопрос 14: Нужно ли готовить сценарии отказа?",
a: [
"Нет, ограничивает свободу",
"Да, помогает уверенно реагировать",
"Нет, не влияет",
"Да, чтобы отвечать произвольно"
],
correct: 1
},
{
q: "Вопрос 15: Наименее эффективная стратегия:",
a: [
"Отстаивать границы",
"Использовать юмор",
"Уходить из ситуации",
"Поддаваться давлению"
],
correct: 3
}
];

// ========== ПОСТРАНИЧНЫЕ ТЕСТЫ ДЛЯ ЛЕКЦИЙ ==========
function createPagedTest(questions, containerId, resultId) {
    const container = document.getElementById(containerId);
    const resultDiv = document.getElementById(resultId);
    if (!container) return;
    
    let answers = new Array(questions.length).fill(null);
    let currentPage = 0;
    const questionsPerPage = 5;
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    
    function renderPage() {
        const start = currentPage * questionsPerPage;
        const end = Math.min(start + questionsPerPage, questions.length);
        
        let html = '<div class="paged-questions">';
        for (let i = start; i < end; i++) {
            const q = questions[i];
            const savedAnswer = answers[i];
            html += `
                <div class="quiz-question" data-qindex="${i}">
                    <p class="question-text"><strong>${q.q}</strong></p>
                    <div class="options-list">
            `;
            q.a.forEach((opt, optIdx) => {
                const isChecked = (savedAnswer === optIdx);
                html += `
                    <label class="quiz-option">
                        <input type="radio" name="q_${containerId}_${i}" value="${optIdx}" ${isChecked ? 'checked' : ''}>
                        <span>${opt}</span>
                    </label>
                `;
            });
            html += `</div></div>`;
        }
        html += '</div>';
        
        // Добавляем навигацию
        const answeredCount = answers.filter(a => a !== null).length;
        html += `
            <div class="answered-info">📊 Отвечено: ${answeredCount} из ${questions.length} вопросов</div>
            <div class="quiz-nav">
                <button class="quiz-nav-btn prev-page" ${currentPage === 0 ? 'disabled' : ''}>◀ Назад</button>
                <span class="page-info">${currentPage + 1} / ${totalPages}</span>
                <button class="quiz-nav-btn next-page" ${currentPage === totalPages - 1 ? 'disabled' : ''}>Далее ▶</button>
            </div>
            <button class="submit-paged-test">✅ Завершить тест</button>
        `;
        
        container.innerHTML = html;
        
        // Привязываем события
        container.querySelectorAll('.quiz-option input').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const qDiv = e.target.closest('.quiz-question');
                const qIndex = parseInt(qDiv.dataset.qindex);
                answers[qIndex] = parseInt(e.target.value);
                updateAnsweredInfo();
            });
        });
        
        container.querySelector('.prev-page')?.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                renderPage();
                // Прокручиваем контейнер к началу
                container.scrollTop = 0;
            }
        });
        
        container.querySelector('.next-page')?.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                renderPage();
                // Прокручиваем контейнер к началу
                container.scrollTop = 0;
            }
        });
        
        container.querySelector('.submit-paged-test')?.addEventListener('click', () => {
            let score = 0;
            for (let i = 0; i < questions.length; i++) {
                if (answers[i] !== null && answers[i] === questions[i].correct) {
                    score++;
                }
            }
            const percentage = Math.round((score / questions.length) * 100);
            let message = '';
            let emoji = '';
            if (percentage >= 80) { emoji = '🏆'; message = 'Отлично! Вы отлично усвоили материал!'; }
            else if (percentage >= 60) { emoji = '📚'; message = 'Хороший результат! Рекомендуем повторить некоторые моменты.'; }
            else if (percentage >= 40) { emoji = '📖'; message = 'Неплохо, но стоит перечитать лекцию внимательнее.'; }
            else { emoji = '💪'; message = 'Рекомендуем вернуться к лекции и пройти тест ещё раз.'; }
            
            resultDiv.innerHTML = `
                <div class="quiz-result-content">
                    <div class="result-score">${emoji} Ваш результат: ${score} из ${questions.length} (${percentage}%)</div>
                    <div class="result-message">${message}</div>
                    <button class="reset-test" onclick="location.reload()">🔄 Пройти тест заново</button>
                </div>
            `;
            resultDiv.style.display = 'block';
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    function updateAnsweredInfo() {
        const info = container.querySelector('.answered-info');
        if (info) {
            const answeredCount = answers.filter(a => a !== null).length;
            info.textContent = `📊 Отвечено: ${answeredCount} из ${questions.length} вопросов`;
        }
    }
    
    renderPage();
}

// Инициализация тестов для лекций
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли элементы для тестов
    if (document.getElementById('test1-paged')) {
        createPagedTest(questions, 'test1-paged', 'finish1-paged');
    }
    if (document.getElementById('test2-paged')) {
        createPagedTest(questions2, 'test2-paged', 'finish2-paged');
    }
    
    // Галерея для страницы activities.html
    const gallery = document.getElementById('galleryGrid');
    if (gallery) {
        for (let i = 1; i <= 7; i++) {
            const img = document.createElement('img');
            img.src = `./img/UsefulActivities${i}.jpg`;
            img.alt = 'Полезная активность';
            img.classList.add('gallery-img');
            img.onerror = function() {
                this.src = 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg';
            };
            gallery.appendChild(img);
        }
    }
    
    // Лайтбокс для галереи
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-lightbox');
    
    if (lightbox && closeBtn) {
        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
            });
        });
        
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });
    }
});

// Свайпер для песочной терапии (если элемент существует)
if (document.querySelector('.sand-swiper')) {
    const swiper = new Swiper(".sand-swiper", {
        loop: true,
        autoplay: { delay: 8000, disableOnInteraction: false },
        spaceBetween: 20,
        pagination: { el: ".swiper-pagination", clickable: true },
        speed: 800
    });
}