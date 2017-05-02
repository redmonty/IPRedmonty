// метод для проверки равенства объектов
Rectangle.prototype.equals = function (otherObj) {
    if (this.width === otherObj.width && this.height === otherObj.height) {
        return true;
    }
    return false;
}
//document.bgColor/cookie/lastModified/location/referrer/title
//document.anchors/images/forms/links
// innerHTML - текст между открывающим и закрывающим тегами.