export const getFirstLine = (htmlText) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    const firstLine = tempDiv.firstChild?.textContent.trim() || ''; 
    return firstLine;
}

export const getSecondLine = (htmlText) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    let nonEmptyLineCount = 0;
    let secondNonEmptyLine = '';
    for (var i = 0; i < tempDiv.children.length; i++) {
        var currentElement = tempDiv.children[i];
        if (currentElement.textContent.trim() !== '') {
            nonEmptyLineCount++;
            if (nonEmptyLineCount === 2) {
                secondNonEmptyLine = currentElement.textContent.trim();
                break;
            }
        }
    }

    return secondNonEmptyLine;
}