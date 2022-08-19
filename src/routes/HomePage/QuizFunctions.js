// Fonksiyonlarda rastgele sayılar oluştururken eklenen 1 genel olarak aynı sayıyı üretmeyi engellemek için kullanılır.

export function additionQuestion() {
  function randQuestion() {
    let result = Math.floor(Math.random() * 99) + 1; // 1 ile 100 arasında sayı üretir.
    let number1 = Math.floor(Math.random() * result) + 1; // 1 ile result arasında sayı üretir.
    let number2 = result - number1; // number1 ile result'un farkını alarak toplamı verecek 2. sonucu üretir.

    // Fake cevaplar üretilir.
    let fakeAnswer1 = result + Math.floor(Math.random() * 5) + 1;
    let fakeAnswer2 = result - Math.floor(Math.random() * 5) - 1;

    if (fakeAnswer1 === fakeAnswer2) return randQuestion();
    if (fakeAnswer1 <= 0 || fakeAnswer2 <= 0) return randQuestion();
    if (fakeAnswer1 >= 100 || fakeAnswer2 >= 100) return randQuestion();

    const answers = [result, fakeAnswer1, fakeAnswer2];

    answers.sort(() => Math.random() - 0.5); // Sonuçları rastgele sıralar.

    return {
      operator: "+",
      number1,
      number2,
      result,
      answers,
      isTrue: "x",
      point: 2,
    };
  }

  let question = randQuestion();

  return question; // Obje olarak sonuçları döndürür.
}

export function subtractionQuiz() {
  function randQuestion() {
    let number1 = Math.floor(Math.random() * 99) + 1; // 1 ile 99 arasında sayı üretir.
    let number2 = Math.floor(Math.random() * (number1 - 1)) + 1; // 1 ile number1 arasında sayı üretir.
    let result = number1 - number2; // number1 ile number2 farkını alarak toplamı verecek 2. sonucu üretir.

    if (result === 0) return randQuestion(); // Eğer sonuç 0 ise tekrar üret.

    // Fake cevaplar üretilir.
    let fakeAnswer1 = result + Math.floor(Math.random() * 5) + 1;
    let fakeAnswer2 = fakeAnswer1 + Math.floor(Math.random() * 5) + 1;

    if (fakeAnswer1 === fakeAnswer2) return randQuestion();
    if (fakeAnswer1 <= 0 || fakeAnswer2 <= 0) return randQuestion();

    let answers = [result, fakeAnswer1, fakeAnswer2];
    answers.sort(() => Math.random() - 0.5); // Sonuçları rastgele sıralar.

    return {
      operator: "-",
      number1,
      number2,
      result,
      answers,
      isTrue: "x",
      point: 3,
    };
  }

  let question = randQuestion();

  return question; // Obje olarak sonuçları döndürür.
}

export function multiplicationQuiz() {
  function randQuestion() {
    let number1 = Math.floor(Math.random() * 9) + 1; // 1 ile 9 arasında sayı üretir.
    let number2 = Math.floor(Math.random() * 9) + 1; // 1 ile 9 arasında sayı üretir.
    let result = number1 * number2;

    // Fake cevaplar üretilir.
    let fakeAnswer1 = result + Math.floor(Math.random() * 4) + 1;
    let fakeAnswer2 = fakeAnswer1 - Math.floor(Math.random() * 3) - 1;

    if (fakeAnswer1 === fakeAnswer2) return randQuestion();
    if (result === fakeAnswer1 || result === fakeAnswer2) return randQuestion();

    let answers = [result, fakeAnswer1, fakeAnswer2];
    answers.sort(() => Math.random() - 0.5); // Sonuçları rastgele sıralar.

    return {
      operator: "x",
      number1,
      number2,
      result,
      answers,
      isTrue: "x",
      point: 4,
    };
  }

  let question = randQuestion();

  return question; // Obje olarak sonuçları döndürür.
}

export function divisionQuiz() {
  function randQuestion() {
    let number1 = Math.floor(Math.random() * 99) + 1; // 1 ile 9 arasında sayı üretir.
    let number2 = Math.floor(Math.random() * 9) + 2; // 1 ile 9 arasında sayı üretir.
    let result = number1 / number2;

    if (number1 === number2) return randQuestion();
    if (Number.isInteger(result) === false) return randQuestion(); // Eğer sonuç tam sayı değilse tekrar üret.

    // Fake cevaplar üretilir.
    let fakeAnswer1 = result + Math.floor(Math.random() * 4) + 1;
    let fakeAnswer2 = fakeAnswer1 - Math.floor(Math.random() * 3) - 1;

    if (fakeAnswer1 === fakeAnswer2) return randQuestion();
    if (result === fakeAnswer1 || result === fakeAnswer2) return randQuestion();

    let answers = [result, fakeAnswer1, fakeAnswer2];
    answers.sort(() => Math.random() - 0.5); // Sonuçları rastgele sıralar.

    return {
      operator: "/",
      number1,
      number2,
      result,
      answers,
      isTrue: "x",
      point: 5,
    };
  }

  let question = randQuestion();

  return question; // Obje olarak sonuçları döndürür.
}
