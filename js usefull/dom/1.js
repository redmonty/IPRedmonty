// Основные типы узлов
        // Интерфейс           | Константа nodeType            | Значение nodeType
        // ------------------------------------------------------------------------
        // Element             | Node.ELEMENT_NODE             | 1
        // Text                | Node.TEXT_NODE                | 3
        // Comment             | Node.COMMENT_NODE             | 8
        // Document            | Node.DOCUMENT_NODE            | 9
        // ------------------------------------------------------------------------

        // Свойства для навигации по DOM
        // childNodes - массив всех дочерних узлов
        // firstChild - первый дочерний узел   firstElementChild
        //children - ссылка на дочерние элементы(узелы с типом “элемент”)
        // lastChild - последний дочерний узел  lastElementChild
        // nextSibling - следующий узел расположенный на одном уровне с текущим previousElementSibling  
        // previousSibling - предыдущий узел расположенный на одном уровне с текущим nextElementSibling
        // parentNode/parentElement - родительский узел для текущего элемента

        // Методы для работы с DOM
        // appendChild - добавить дочерний элемент
        // insertBefore - добавить элемент перед указанным
        // removeChild - удаление элемента
        // replaceChild - замена одного элемента на другой

        // var div1 = document.getElementById("div1");
        //     var p1 = document.createElement("p");
        //     p1.innerHTML = "Paragraph 1";
        //     div1.appendChild(p1);

        //getElementById(elementId)
        //getElementsByTagName('li')
        //getElementsByClassName('item')
        //querySelector('.phone')
        //querySelectorAll('.phone')

        // установка атрибута
            // a1.setAttribute("href", "http://edu.cbsystematics.com");
            // // удаление атрибута
            // a2.removeAttribute("href");
            // // чтение атрибута
            // alert(a3.getAttribute("href"));
            //el.hasAttribite()