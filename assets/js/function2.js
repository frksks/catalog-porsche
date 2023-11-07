function changeToLatin() {
    const elements = document.querySelectorAll('.block1, .block2, .block3, .block4, .block5, .block6, .block7, .block8, .block9');
    elements.forEach((element) => {
      const text = element.textContent;
      const latinText = cyrillicToLatin(text);
      element.textContent = latinText;
    });
  }
  
  function cyrillicToLatin(text) {
    const cyrillicLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const latinLetters = [
      'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '', 'y', '', 'e', 'yu', 'ya'
    ];
  
    const newText = text
      .toLowerCase()
      .split('')
      .map((letter) => {
        const index = cyrillicLetters.indexOf(letter);
        if (index !== -1) {
          return latinLetters[index];
        } else {
          return letter;
        }
      })
      .join('');
  
    return newText.toUpperCase();
  }
  