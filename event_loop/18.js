// Задача №18:

// Почему ошибка не обрабатывается блоком castch, как исправить ?

const fetchData = async () => {
  await Promise.resolve().then(() => {
    throw new Error();
  });
};

try {
  (async () => {
    await fetchData(); // может вернуть ошибку, а может данные
  })();
} catch (error) {
  console.error('Error fetching data:', error);
}

// Решение/Ответ: 






