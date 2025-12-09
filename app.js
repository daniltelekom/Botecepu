// ====== ДАННЫЕ УРОКОВ / ТЕСТОВ ======

const lessonsData = {
  operator: [
    {
      id: "op_module_1",
      title: "Кто мы и что делаем",
      short: "Базовое понимание компании и услуг",
      description:
        "Разберём, чем занимается ООО «ЕЦПУ», какие услуги оказываем и как объяснять это клиенту простым языком.",
      content: [
        {
          type: "title",
          text: "О компании ООО «ЕЦПУ»"
        },
        {
          type: "text",
          text:
            "ООО «ЕЦПУ» занимается поверкой, заменой и установкой приборов учёта (счётчиков), а также сантехническими и электрическими работами. " +
            "Оператор принимает звонок, оформляет заявку, а мастер выезжает к клиенту и выполняет работу."
        },
        {
          type: "title",
          text: "Что такое поверка, замена и установка"
        },
        {
          type: "list",
          items: [
            "Поверка — проверяем, правильно ли считает счётчик, без замены счётчика.",
            "Замена — снимаем старый счётчик и устанавливаем новый.",
            "Установка — ставим счётчик там, где его раньше не было."
          ]
        },
        {
          type: "title",
          text: "Сантехнические и электрические работы"
        },
        {
          type: "list",
          items: [
            "Сантехника: замена кранов, гибких подводок, вентилей, устранение протечек и т.п.",
            "Электрика: розетки, выключатели, автоматы, щитки и другие работы по электропроводке."
          ]
        },
        {
          type: "title",
          text: "Принципы общения с клиентом"
        },
        {
          type: "list",
          items: [
            "Говорим спокойно, вежливо и понятным языком.",
            "Не спорим с клиентом, не повышаем тон.",
            "Не обещаем того, чего компания не делает или не может гарантировать.",
            "Если не уверены — лучше уточнить у старшего, чем придумать ответ."
          ]
        }
      ],
      test: [
        {
          question: "Что чаще всего оформляет оператор ООО «ЕЦПУ»?",
          options: [
            "Поверку счётчиков",
            "Доставку еды",
            "Ремонт автомобилей",
            "Перевозку мебели"
          ],
          correctIndex: 0
        },
        {
          question: "Что такое поверка счётчика?",
          options: [
            "Замена старого счётчика на новый",
            "Проверка, правильно ли считает счётчик",
            "Установка счётчика, которого раньше не было",
            "Промывка труб"
          ],
          correctIndex: 1
        },
        {
          question: "Что из этого относится к сантехническим работам?",
          options: [
            "Замена кранов",
            "Настройка Wi-Fi",
            "Ремонт телевизора",
            "Установка антенны"
          ],
          correctIndex: 0
        }
      ]
    },
    {
      id: "op_module_2",
      title: "Программа компании (заявки)",
      short: "Как быстро и правильно оформить заявку",
      description:
        "Научимся создавать заявки в программе компании, заполнять обязательные поля и избегать типичных ошибок.",
      content: [
        {
          type: "title",
          text: "Вход в программу"
        },
        {
          type: "text",
          text:
            "Оператор работает в программе компании (CRM/учёт заявок). Вход по логину и паролю. " +
            "Если возникли проблемы с входом или забыли пароль — обращаемся к ответственному за доступы (старшему оператору/администратору)."
        },
        {
          type: "title",
          text: "Создание новой заявки"
        },
        {
          type: "text",
          text:
            "Для создания новой заявки используется раздел «Новая заявка» или кнопка «Создать заявку» (точное название зависит от программы). " +
            "Сначала мы вносим данные клиента, затем выбираем услугу, назначаем время и добавляем комментарии."
        },
        {
          type: "title",
          text: "Обязательные поля заявки"
        },
        {
          type: "list",
          items: [
            "ФИО клиента.",
            "Телефон клиента — по нему мастер связывается перед выездом.",
            "Адрес (город, улица, дом, квартира).",
            "Вид услуги: поверка, замена или установка.",
            "Количество счётчиков, с которыми нужно работать.",
            "Дата и ориентировочное время визита мастера.",
            "Комментарий — дополнительные сведения (домофон, код, этаж без лифта, собака и т.п.)."
          ]
        },
        {
          type: "title",
          text: "Статусы заявок (пример)"
        },
        {
          type: "list",
          items: [
            "«Новая» — только что создана, ещё не назначена мастеру.",
            "«Назначена мастеру» — мастер закреплён и должен выполнить работу.",
            "«Выполнена» — работа выполнена, заявка закрыта.",
            "«Отменена» — клиент отказался или перенёс визит."
          ]
        },
        {
          type: "title",
          text: "Типичные ошибки при оформлении"
        },
        {
          type: "list",
          items: [
            "Не указан или неверно указан телефон — мастер не сможет связаться.",
            "Перепутали поверку и замену — мастер приезжает без нужного оборудования.",
            "Не указали количество счётчиков — мастер может не уложиться по времени.",
            "Отсутствует адрес или важные детали, из-за чего сложно найти клиента."
          ]
        }
      ],
      test: [
        {
          question: "Какое поле считается обязательным при создании заявки?",
          options: [
            "Любимый цвет клиента",
            "Телефон клиента",
            "Имя собаки",
            "Марка телевизора"
          ],
          correctIndex: 1
        },
        {
          question:
            "Что может случиться, если оператор не укажет количество счётчиков в заявке?",
          options: [
            "Ничего страшного",
            "Мастер может не успеть по времени или не взять нужный комплект",
            "Клиент сам всё объяснит мастеру",
            "Заявка автоматически отменится"
          ],
          correctIndex: 1
        },
        {
          question: "Для чего нужен статус заявки «Выполнена»?",
          options: [
            "Чтобы удалить заявку",
            "Чтобы понимать, что работа завершена",
            "Чтобы отправить жалобу",
            "Чтобы перенести дату"
          ],
          correctIndex: 1
        }
      ]
    },
    {
      id: "op_module_3",
      title: "Входящий звонок: структура и скрипт",
      short: "Как вести разговор от приветствия до оформления",
      description:
        "Разберём, как правильно начинать разговор, какие вопросы задавать и как подтверждать заявку.",
      content: [
        {
          type: "title",
          text: "Структура входящего звонка"
        },
        {
          type: "list",
          items: [
            "Приветствие и представление.",
            "Выяснение вопроса клиента.",
            "Сбор информации для заявки.",
            "Оформление и повтор данных.",
            "При необходимости — аккуратная допродажа.",
            "Вежливое завершение разговора."
          ]
        },
        {
          type: "title",
          text: "Приветствие"
        },
        {
          type: "text",
          text:
            "Корректное приветствие: «Добрый день, компания ООО «ЕЦПУ», меня зовут [Имя], слушаю вас». " +
            "Не используем грубые или слишком короткие варианты вроде «Алло?» или «Да?»."
        },
        {
          type: "title",
          text: "Сбор информации"
        },
        {
          type: "list",
          items: [
            "Адрес клиента.",
            "Телефон для связи.",
            "Вид услуги: поверка, замена или установка.",
            "Количество счётчиков.",
            "Удобное время визита.",
            "Особенности: домофон, код, этаж, наличие животных и т.п."
          ]
        },
        {
          type: "title",
          text: "Подтверждение заявки"
        },
        {
          type: "text",
          text:
            "После заполнения заявки оператор повторяет ключевую информацию: " +
            "«Повторю: заявка на поверку [количество] счётчиков по адресу [адрес] на [дата/время]. " +
            "Мастер свяжется с вами по телефону [номер]. Всё верно?»."
        },
        {
          type: "title",
          text: "Завершение разговора"
        },
        {
          type: "text",
          text:
            "После подтверждения заявки благодарим клиента: «Спасибо за обращение в ООО «ЕЦПУ». Хорошего дня»."
        }
      ],
      test: [
        {
          question: "Какое приветствие корректно для оператора?",
          options: [
            "«Алло»",
            "«Да?»",
            "«Добрый день, компания ООО «ЕЦПУ», меня зовут [Имя], слушаю вас.»",
            "«Говорите быстрее»"
          ],
          correctIndex: 2
        },
        {
          question:
            "Какие данные обязательно нужно уточнить при оформлении заявки на поверку?",
          options: [
            "Марку телефона клиента",
            "Адрес, телефон, вид услуги и количество счётчиков",
            "Знак зодиака клиента",
            "Есть ли у клиента машина"
          ],
          correctIndex: 1
        },
        {
          question:
            "Клиент сказал: «Мне нужна поверка счётчиков воды». Что оператор делает в первую очередь?",
          options: [
            "Сразу называет цену, не задавая вопросов",
            "Говорит, что всё занято",
            "Уточняет адрес, телефон и количество счётчиков",
            "Переключает звонок на мастера"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      id: "op_module_4",
      title: "Кросс-продажи сантехники и электрики",
      short: "Как мягко предлагать доп. услуги",
      description:
        "Научимся аккуратно предлагать дополнительные работы по сантехнике и электрике, не затягивая разговор и не давя на клиента.",
      content: [
        {
          type: "title",
          text: "Когда предлагать дополнительные услуги"
        },
        {
          type: "list",
          items: [
            "После того как основная заявка уже оформлена.",
            "Не в начале разговора и не во время жалоб клиента.",
            "Когда клиент спокоен и согласен с основной услугой."
          ]
        },
        {
          type: "title",
          text: "Как предлагать — пример формулировки"
        },
        {
          type: "text",
          text:
            "Пример: «Раз мастер всё равно будет у вас, он может заодно посмотреть состояние кранов и гибких подводок, " +
            "чтобы избежать протечек. Ничего по сантехнике не беспокоит?»."
        },
        {
          type: "text",
          text:
            "По электрике: «Мастер также занимается электрикой — щиток, автоматы, розетки. " +
            "Если есть что-то, что давно хотели проверить или заменить, сейчас самое удобное время»."
        },
        {
          type: "title",
          text: "Чего нельзя делать при кросс-продаже"
        },
        {
          type: "list",
          items: [
            "Нельзя пугать клиента: «у вас всё развалится», «точно затопит», «это срочно» без оснований.",
            "Нельзя давить и настаивать, если клиент отказывается.",
            "Нельзя обещать несуществующие скидки или услуги, которых компания не оказывает."
          ]
        },
        {
          type: "title",
          text: "Если клиент говорит: «Нет, ничего не нужно»"
        },
        {
          type: "text",
          text:
            "Корректный ответ: «Хорошо, оформляю только основную услугу. " +
            "Если что-то вспомните — можете сказать мастеру при визите»."
        }
      ],
      test: [
        {
          question: "Когда лучше всего предлагать дополнительные услуги?",
          options: [
            "В начале разговора, до оформления заявки",
            "Во время жалоб клиента",
            "После того, как основная заявка уже оформлена",
            "Вообще не предлагать"
          ],
          correctIndex: 2
        },
        {
          question:
            "Какая фраза корректна для кросс-продажи сантехники?",
          options: [
            "«Давайте я вам ещё что-нибудь впарю»",
            "«У вас всё сломается, если прямо сейчас не сделаете ремонт»",
            "«Раз мастер всё равно к вам приедет, он может заодно посмотреть состояние кранов и подводок, чтобы избежать протечек. Ничего по сантехнике не беспокоит?»",
            "«Ну чё, ремонт делать будем?»"
          ],
          correctIndex: 2
        },
        {
          question:
            "Клиент говорит: «Нет, ничего больше не нужно». Как правильнее ответить?",
          options: [
            "«Ну и зря»",
            "«Ладно, как хотите»",
            "«Хорошо, оформляю только поверку. Если что-то вспомните — можете сказать мастеру на месте»",
            "Сразу положить трубку"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      id: "op_module_5",
      title: "Исходящие звонки",
      short: "Звонки клиентам: напоминания и предложения",
      description:
        "Разберём, как правильно звонить клиенту первым: по срокам поверки, предложениям по замене и другим случаям.",
      content: [
        {
          type: "title",
          text: "Зачем оператор делает исходящие звонки"
        },
        {
          type: "list",
          items: [
            "Подходит срок поверки счётчика.",
            "Предложение заменить старый счётчик.",
            "Напоминание о визите мастера.",
            "Информирование об акциях и предложениях, если это предусмотрено правилами компании."
          ]
        },
        {
          type: "title",
          text: "Начало разговора при исходящем звонке"
        },
        {
          type: "text",
          text:
            "Корректное начало: «Добрый день, это компания ООО «ЕЦПУ», меня зовут [Имя]. " +
            "Раньше вы обращались к нам по поводу счётчиков. Звоню, потому что [причина звонка]»."
        },
        {
          type: "title",
          text: "Краткий сценарий исходящего звонка"
        },
        {
          type: "list",
          items: [
            "Представиться и назвать компанию.",
            "Напомнить, откуда у нас контакт клиента (раньше обращался).",
            "Коротко объяснить причину звонка и суть предложения.",
            "Спросить, интересно ли клиенту предложение.",
            "Если да — оформить заявку.",
            "Если нет — вежливо завершить разговор."
          ]
        },
        {
          type: "title",
          text: "Работа с возражениями"
        },
        {
          type: "list",
          items: [
            "«Неинтересно» — поблагодарить за время и оставить возможность обратиться в будущем.",
            "«Дорого» — при необходимости пояснить, что входит в услугу (если у компании есть скрипт).",
            "«Сделаю потом» — зафиксировать, что сейчас заявку не оформляем.",
            "Во всех случаях оставаться вежливым, не спорить и не давить."
          ]
        }
      ],
      test: [
        {
          question:
            "Что первым делом должен сказать оператор при исходящем звонке?",
          options: [
            "«Записывайте наш супервыгодный тариф!»",
            "«Алло, угадайте кто?»",
            "«Добрый день, это компания ООО «ЕЦПУ», меня зовут [Имя]. Раньше вы обращались к нам по поводу счётчиков.»",
            "«У вас есть минутка?»"
          ],
          correctIndex: 2
        },
        {
          question:
            "Клиент говорит: «Мне неинтересно». Как корректнее ответить?",
          options: [
            "«Ну и зря»",
            "«Это ваши проблемы»",
            "«Понимаю, тогда записывать заявку не буду. Если передумаете — можете всегда обратиться к нам по этому номеру»",
            "Сразу положить трубку"
          ],
          correctIndex: 2
        }
      ]
    }
  ]
};

// ====== ПРОГРЕСС (пока только localStorage, без бэка) ======

const STORAGE_KEY = "ecpu_training_progress";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { operator: { completed: [] } };
    return JSON.parse(raw);
  } catch {
    return { operator: { completed: [] } };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// ====== РЕНДЕР ПРИЛОЖЕНИЯ ======

const appRoot = document.getElementById("app");

let state = {
  role: null, // 'operator'
  screen: "roleSelect", // 'roleSelect' | 'modules' | 'lesson' | 'test'
  currentModuleId: null,
  testResult: null // { success: true/false }
};

// небольшая помощь
function getCurrentModules() {
  if (state.role === "operator") {
    return lessonsData.operator;
  }
  return [];
}

function getModuleById(id) {
  return getCurrentModules().find((m) => m.id === id);
}

function isModuleCompleted(id) {
  const progress = loadProgress();
  const roleProgress = progress[state.role] || { completed: [] };
  return roleProgress.completed.includes(id);
}

function canOpenModule(index) {
  if (index === 0) return true;
  const modules = getCurrentModules();
  const prev = modules[index - 1];
  return isModuleCompleted(prev.id);
}

// ====== ЭКРАНЫ ======

function render() {
  if (state.screen === "roleSelect") {
    renderRoleSelect();
  } else {
    renderShell();
  }
}

function renderRoleSelect() {
  appRoot.innerHTML = `
    <div class="app-shell">
      <div class="app-header">
        <div class="app-title-group">
          <div class="app-title">
            Обучение сотрудников
            <span class="app-title-pill">ООО «ЕЦПУ»</span>
          </div>
          <div class="app-subtitle">Выберите вашу роль, чтобы начать обучение</div>
        </div>
      </div>
      <div class="role-select-screen">
        <div class="role-cards">
          <div class="role-card" data-role="operator">
            <span class="role-tag">Доступно</span>
            <div class="role-card-title">Оператор</div>
            <div class="role-card-sub">
              Входящие и исходящие звонки, оформление заявок и кросс-продажи сантехники и электрики.
            </div>
          </div>
          <div class="role-card disabled">
            <span class="role-tag">Скоро</span>
            <div class="role-card-title">Мастер (новичок)</div>
            <div class="role-card-sub">
              Базовое поведение на выезде, общение с клиентом, закрытие заявки.
            </div>
          </div>
          <div class="role-card disabled">
            <span class="role-tag">Скоро</span>
            <div class="role-card-title">Мастер (допщик)</div>
            <div class="role-card-sub">
              Предложение дополнительных услуг на выезде: сантехника и электрика.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const operatorCard = appRoot.querySelector('[data-role="operator"]');
  operatorCard.addEventListener("click", () => {
    state.role = "operator";
    state.screen = "modules";
    render();
  });
}

function renderShell() {
  const modules = getCurrentModules();
  const currentModule =
    state.currentModuleId && getModuleById(state.currentModuleId);

  const progress = loadProgress();
  const roleProgress = progress[state.role] || { completed: [] };

  const sidebarItemsHtml = modules
    .map((m, index) => {
      const completed = roleProgress.completed.includes(m.id);
      const locked = !canOpenModule(index);
      const active = currentModule && currentModule.id === m.id;

      let statusText = "Не начат";
      if (completed) statusText = "Пройдено";
      else if (active) statusText = "Сейчас";
      const pillClass = completed
        ? "sidebar-status-pill done"
        : locked
        ? "sidebar-status-pill locked"
        : "sidebar-status-pill";

      return `
        <div class="sidebar-item ${active ? "active" : ""}" data-module-id="${
        m.id
      }" data-locked="${locked}">
          <div class="sidebar-item-label">
            <div class="sidebar-item-main">${index + 1}. ${m.title}</div>
            <div class="sidebar-item-sub">${m.short}</div>
          </div>
          <div class="${pillClass}">${statusText}</div>
        </div>
      `;
    })
    .join("");

  let mainContentHtml = "";
  if (state.screen === "modules") {
    mainContentHtml = renderModulesScreenInner(modules, roleProgress);
  } else if (state.screen === "lesson" && currentModule) {
    mainContentHtml = renderLessonScreenInner(currentModule);
  } else if (state.screen === "test" && currentModule) {
    mainContentHtml = renderTestScreenInner(currentModule);
  }

  appRoot.innerHTML = `
    <div class="app-shell">
      <div class="app-header">
        <div class="app-title-group">
          <div class="app-title">
            Обучение сотрудников
            <span class="app-title-pill">ООО «ЕЦПУ»</span>
          </div>
          <div class="app-subtitle">
            Телефония, заявки и работа с клиентами
          </div>
        </div>
        <div class="app-role-badge">
          Роль: ${
            state.role === "operator"
              ? "Оператор"
              : state.role || "Не выбрана"
          }
        </div>
      </div>
      <div class="app-content">
        <aside class="sidebar">
          <div class="sidebar-title">Модули</div>
          ${sidebarItemsHtml}
        </aside>
        <main class="main-panel">
          ${mainContentHtml}
        </main>
      </div>
    </div>
  `;

  // обработка кликов по модулям
  appRoot.querySelectorAll(".sidebar-item").forEach((el) => {
    const moduleId = el.getAttribute("data-module-id");
    const locked = el.getAttribute("data-locked") === "true";
    if (!moduleId || locked) return;
    el.addEventListener("click", () => {
      state.currentModuleId = moduleId;
      state.screen = "lesson";
      state.testResult = null;
      render();
    });
  });

  // кнопка "назад к ролям" в блоке при необходимости можно добавить позже
}

// ====== Внутренние рендеры экранов ======

function renderModulesScreenInner(modules, roleProgress) {
  const completedCount = (roleProgress.completed || []).length;
  const total = modules.length;

  return `
    <div class="breadcrumbs">Оператор · Обучающие модули</div>
    <div class="main-heading">План обучения оператора</div>
    <div class="main-description">
      Проходите модули последовательно: каждый следующий открывается после успешного теста по предыдущему.
      Сейчас пройдено модулей: ${completedCount} из ${total}.
    </div>
    <div class="block">
      <div class="block-title">Как работать с модулями</div>
      <ul class="block-list">
        <li>Откройте первый модуль, внимательно прочитайте материалы.</li>
        <li>После чтения перейдите к тесту и ответьте на вопросы.</li>
        <li>Если допустите ошибки — вернитесь к уроку, перечитайте и пройдите тест ещё раз.</li>
        <li>После успешной сдачи теста откроется следующий модуль.</li>
      </ul>
    </div>
  `;
}

function renderLessonScreenInner(module) {
  const contentBlocks = module.content
    .map((block) => {
      if (block.type === "title") {
        return `
          <div class="block">
            <div class="block-title">${block.text}</div>
          </div>
        `;
      } else if (block.type === "text") {
        return `
          <div class="block">
            <div>${block.text}</div>
          </div>
        `;
      } else if (block.type === "list") {
        const itemsHtml = block.items
          .map((item) => `<li>${item}</li>`)
          .join("");
        return `
          <div class="block">
            <ul class="block-list">
              ${itemsHtml}
            </ul>
          </div>
        `;
      } else {
        return "";
      }
    })
    .join("");

  return `
    <div class="breadcrumbs">Оператор · ${module.title}</div>
    <div class="main-heading">${module.title}</div>
    <div class="main-description">${module.description}</div>
    ${contentBlocks}
    <div class="btn-row">
      <button class="btn" data-action="backToModules">К списку модулей</button>
      <button class="btn btn-primary" data-action="toTest">Перейти к тесту</button>
    </div>
  `;
}

function renderTestScreenInner(module) {
  const questionsHtml = module.test
    .map((q, qi) => {
      const optionsHtml = q.options
        .map(
          (opt, oi) => `
          <label class="test-option" data-question-index="${qi}" data-option-index="${oi}">
            <input type="radio" name="q${qi}" value="${oi}" />
            <span>${opt}</span>
          </label>
        `
        )
        .join("");

      return `
        <div class="test-question">
          <div class="test-question-title">${qi + 1}. ${q.question}</div>
          <div class="test-options">
            ${optionsHtml}
          </div>
        </div>
      `;
    })
    .join("");

  let messageHtml = "";
  if (state.testResult) {
    messageHtml = state.testResult.success
      ? `<div class="message message-success">Отлично! Все ответы верные. Модуль отмечен как пройден.</div>`
      : `<div class="message message-error">Есть ошибки в ответах. Вернитесь к уроку, перечитайте материал и попробуйте ещё раз.</div>`;
  }

  const buttonsHtml = state.testResult?.success
    ? `
      <div class="btn-row">
        <button class="btn" data-action="backToLesson">Вернуться к уроку</button>
        <button class="btn btn-primary" data-action="backToModules">К списку модулей</button>
      </div>
    `
    : `
      <div class="btn-row">
        <button class="btn" data-action="backToLesson">Вернуться к уроку</button>
        <button class="btn btn-primary" data-action="checkTest">Проверить ответы</button>
      </div>
    `;

  // после вставки разметки нужно будет повесить обработчики (ниже)
  setTimeout(() => attachTestHandlers(module), 0);

  return `
    <div class="breadcrumbs">Оператор · ${module.title} · Тест</div>
    <div class="main-heading">Тест по модулю</div>
    <div class="main-description">
      Ответьте на вопросы. Если допустите ошибки — вернитесь к уроку и повторите материал.
    </div>
    ${questionsHtml}
    ${messageHtml}
    ${buttonsHtml}
  `;
}

// ====== Обработчики теста ======

function attachTestHandlers(module) {
  const mainPanel = appRoot.querySelector(".main-panel");
  if (!mainPanel) return;

  mainPanel
    .querySelectorAll('.btn[data-action="checkTest"]')
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const result = checkTestAnswers(module);
        state.testResult = { success: result.success };
        if (result.success) {
          // записать прогресс
          const progress = loadProgress();
          if (!progress[state.role]) progress[state.role] = { completed: [] };
          if (!progress[state.role].completed.includes(module.id)) {
            progress[state.role].completed.push(module.id);
          }
          saveProgress(progress);
        }
        render();
      });
    });

  mainPanel
    .querySelectorAll('.btn[data-action="backToLesson"]')
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        state.screen = "lesson";
        render();
      });
    });

  mainPanel
    .querySelectorAll('.btn[data-action="backToModules"]')
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        state.screen = "modules";
        state.currentModuleId = null;
        state.testResult = null;
        render();
      });
    });
}

function checkTestAnswers(module) {
  const mainPanel = appRoot.querySelector(".main-panel");
  if (!mainPanel) return { success: false };

  let allCorrect = true;

  // Снимаем прежние подсветки
  mainPanel.querySelectorAll(".test-option").forEach((opt) => {
    opt.classList.remove("wrong", "correct");
  });

  module.test.forEach((q, qi) => {
    const selected = mainPanel.querySelector(
      `input[name="q${qi}"]:checked`
    );
    if (!selected) {
      allCorrect = false;
      return;
    }
    const selectedIndex = parseInt(selected.value, 10);
    const options = mainPanel.querySelectorAll(
      `.test-option[data-question-index="${qi}"]`
    );
    options.forEach((optEl) => {
      const oi = parseInt(optEl.getAttribute("data-option-index"), 10);
      if (oi === q.correctIndex) {
        optEl.classList.add("correct");
      }
      if (oi === selectedIndex && selectedIndex !== q.correctIndex) {
        optEl.classList.add("wrong");
        allCorrect = false;
      }
    });
  });

  return { success: allCorrect };
}

// ====== Глобальные обработчики кнопок в уроках ======

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  const action = btn.getAttribute("data-action");
  if (!action) return;

  if (action === "backToModules") {
    state.screen = "modules";
    state.currentModuleId = null;
    state.testResult = null;
    render();
  } else if (action === "toTest") {
    state.screen = "test";
    state.testResult = null;
    render();
  } else if (action === "backToLesson") {
    state.screen = "lesson";
    state.testResult = null;
    render();
  }
});

// ====== ИНИЦИАЛИЗАЦИЯ ======

function init() {
  // Поддержка Telegram WebApp (когда будешь запускать внутри телеги)
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.expand();
  }
  render();
}

init();
