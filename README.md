# JQuery Hidder

Простецкий плагин для сокрытия дочерних тегов с возможностью их раскрывать.

### Пример использования
```sh
$('selector').hidder(options);
```

### Доступные опции
```sh
show: 2, //Количество не скрываемых тегов
collapsed: true, //Состояние плагина при запуске (Свернут по умолчанию)
hideText: 'Hide', //Текст контрола в развернутом виде
showText: 'Show', //Текст контрола в свернутом виде
animationDuration: 600, //Продолжительность анимации
tag: $('<div/>'), //Оборачивающий тег
controlTag: $('<a/>').attr('href', '#') //Тег контрола
```