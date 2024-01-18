function convertNumbersToHex(text) {
    return text.replace(/\b\d+\b/g, match => '0x' + parseInt(match).toString(16));
  }
  
  function convertPageNumbersToHex() {
    let elements = document.getElementsByTagName('*');
    for (let element of elements) {
      if (element.childNodes.length) {
        element.childNodes.forEach(child => {
          if (child.nodeType === 3) { // Node.TEXT_NODE
            let newText = convertNumbersToHex(child.nodeValue);
            if (newText !== child.nodeValue) {
              element.replaceChild(document.createTextNode(newText), child);
            }
          }
        });
      }
    }
  }
  
  window.onload = convertPageNumbersToHex;
  