// 1. что будет в консоли
[[1, 2], [0, 3]].reduce((acc, curr) => { return acc.concat(curr) }, [2, 1])

// 2. Как изменится результат если убрать [2, 1]