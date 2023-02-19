const possibleExercises = [
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5, y = 0;\n"
            + "x++;\n"
            + "y = ++x + 2;\n"
            + "x += y\n"
            + 'cout << x;\n'
            + "\nreturn 0;",
        expected: "16",
        explanation: "Objaśnienie: Ten program inicjuje dwie zmienne całkowite, x o wartości 5 i y o wartości 0. "
            + "Następnie zwiększa wartość x o 1 za pomocą operatora ++. "
            + "W rezultacie wartość x wynosi 6. Następnie program przypisuje wartość ++x + 2 do y. "
            + "Tutaj ++x zwiększa wartość x o 1, co daje 7, a następnie dodaje się do niej 2. "
            + "W rezultacie wartość y wynosi 9. Na koniec program dodaje wartość y do x, używając operatora przypisania złożonego +=. "
            + "Wynikowa wartość x wynosi 16 (tj. x = 6 + 9 + 1).",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int y = 10;\n"
            + "y--;\n"
            + "cout << y;\n"
            + "\nreturn 0;",
        expected: "9",
        explanation: "No bez przesady, tu nie ma nic trudnego...",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int z = 3;\n"
            + "z += 2;\n"
            + "cout << z;\n"
            + "\nreturn 0;",
        expected: "5",
        explanation: "No bez przesady, tu nie ma nic trudnego...",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int a = 7;\n"
            + "a -= 3;\n"
            + "cout << a;\n"
            + "\nreturn 0;",
        expected: "4",
        explanation: "Objaśnienie: Ten program inicjuje zmienną całkowitą a wartością 7. "
            + "Następnie odejmuje 3 od a za pomocą złożonego operatora przypisania -=. "
            + "Wynikowa wartość a wynosi 4. Na koniec program wyświetla wartość a na konsoli za pomocą instrukcji cout.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int a = 10, b = 5;\n"
            + "int c = ++a - b--;\n"
            + 'cout << a << " " << b << " "<< c;\n'
            + "\nreturn 0;",
        expected: "11 4 6",
        explanation: "Objaśnienie: Wyrażenie ++a zwiększa a do 11, "
            + "a następnie odejmowanie b-- (które daje w wyniku 5) daje 6, "
            + "które jest przypisane do c. Po tym wartość b staje się 4 ze względu na operator dekrementacji."
            + "Na koniec wartości a, b i c są drukowane w konsoli.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5, y = 2;\n"
            + "int z = x++ + ++y;\n"
            + 'cout << z;\n'
            + "\nreturn 0;",
        expected: "8",
        explanation: "Objaśnienie: x++ zwraca wartość 5, a następnie zwiększa wartość x do 6. "
            + "++y zwiększa wartość y do 3, a następnie dodaje ją do poprzedniej wartości x. "
            + "Dlatego z jest przypisana wartość 8, która jest drukowana w konsoli.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int n = 5;\n"
            + "for (int i = 0; i < n; i++) {\n"
            + '\tcout << i << " ";\n'
            + "}\n"
            + "\nreturn 0;",
        expected: "0 1 2 3 4",
        explanation: "Objaśnienie: Pętla for zaczyna się od i = 0 i trwa tak długo, jak długo i < n. "
            + "W każdej iteracji pętli wartość i jest wyświetlana na konsoli, po której następuje spacja. "
            + "Po zakończeniu pętli na konsoli wyświetlany jest znak nowej linii. "
            + "Dlatego dane wyjściowe to 0 1 2 3 4.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5;\n"
            + "float y = 3.14;\n"
            + "double z = 2.76;\n"
            + 'cout << "x + y + z = " << x + y + z;\n'
            + "\nreturn 0;",
        expected: "x + y + z = 10.9",
        explanation:
            "Objaśnienie: Wartość int x jest automatycznie konwertowana na wartość zmiennoprzecinkową po dodaniu do y,"
            + "a następnie wynik jest dodawany do wartości zmiennej double z."
            + "Wynikowa suma jest drukowana na konsoli.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "float a = 3.14;\n"
            + "int b = a;\n"
            + 'cout << b;\n'
            + "\nreturn 0;",
        expected: "3",
        explanation: "Objaśnienie: Ten program inicjuje zmienną zmiennoprzecinkową a z wartością 3,14, a następnie przypisuje jej część całkowitą zmiennej całkowitej b. Część całkowita liczby 3,14 to 3, więc wynikiem programu jest 3.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5, y = 0;\n"
            + "x++;\n"
            + "y = x++ + 2;\n"
            + 'cout << y;\n'
            + "\nreturn 0;",
        expected: "8",
        explanation: "Objaśnienie: Ten program inicjalizuje dwie zmienne całkowite x i y z odpowiednio 5 i 0. Zwiększa wartość x o 1 za pomocą operatora ++. Następnie przypisuje wartość x++ + 2 do y, która najpierw używa oryginalnej wartości x (tj. 5) w dodawaniu, a następnie zwiększa x o 1. W rezultacie y staje się 7. Następnie program drukuje wartość z y, czyli 8.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int a = 3, b = 5;\n"
            + "float c = a / b;\n"
            + 'cout << c;\n'
            + "\nreturn 0;",
        expected: "0",
        explanation: "Objaśnienie: Ten program inicjuje dwie zmienne całkowite a i b z odpowiednio 3 i 5. Następnie przypisuje wynik dzielenia a przez b zmiennej zmiennoprzecinkowej c. Ponieważ zarówno a, jak i b są liczbami całkowitymi, operacja dzielenia jest dzieleniem całkowitym, które powoduje obcięcie części dziesiętnej. Dlatego wynikiem a / b jest 0, które jest następnie przypisywane do c. Następnie program wypisuje wartość c, która wynosi 0.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "double a = 1.23;\n"
            + "int b = a;\n"
            + 'cout << b;\n'
            + "\nreturn 0;",
        expected: "1",
        explanation: "Objaśnienie: Ten program inicjalizuje zmienną double a z wartością 1,23, a następnie przypisuje jej część całkowitą zmiennej całkowitej b. Część całkowita liczby 1,23 to 1, więc wynikiem programu jest 1.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int a = 7, b = 3;\n"
            + "int c = a % b;\n"
            + 'cout << c;\n'
            + "\nreturn 0;",
        expected: "1",
        explanation: "Objaśnienie: Ten program inicjalizuje dwie zmienne całkowite a i b z odpowiednio 7 i 3. Oblicza resztę z dzielenia przez b za pomocą operatora modulo % i przypisuje wynik do zmiennej całkowitej c. Reszta z 7 dzielona przez 3 to 1, więc wynikiem programu jest 1.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5;\n"
            + "int y = ++x;\n"
            + "y = x--;\n"
            + 'cout << y;\n'
            + "\nreturn 0;",
        expected: "6",
        explanation: "Objaśnienie: x jest zwiększane do 6 za pomocą ++x, a następnie przypisywane do y. Następnie x jest zmniejszane do 5 przez x--. Ostatecznie wartość x (która wynosi 5) jest przypisywana do y, więc wynikiem jest 6.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 2;\n"
            + "x *= 3;\n"
            + "x /= 2;\n"
            + 'cout << x++;\n'
            + "\nreturn 0;",
        expected: "3",
        explanation: "Objaśnienie: x jest najpierw mnożone przez 3 za pomocą złożonego operatora przypisania *= i staje się 6. Następnie jest dzielone przez 2 za pomocą złożonego operatora przypisania /= i staje się 3. Na koniec wartość x (która wynosi 3) jest drukowana z cout << x++, a następnie zwiększono do 4.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int x = 5;\n"
            + "int y = x++ + ++x;\n"
            + 'cout << y;\n'
            + "\nreturn 0;",
        expected: "12",
        explanation: "Objaśnienie: x++ zwraca wartość x (czyli 5), a następnie zwiększa ją do 6. ++x zwiększa wartość x do 7, a następnie ją zwraca. Dlatego y ma przypisaną wartość 5 + 7, czyli 12. Następnie program wypisze wartość y, czyli 12.",
    },
    {
        exerciseText:
            "Co zostanie wydrukowane w konsoli?",
        expression:
            "int a = 0;\n"
            + "int b = 2;\n"
            + "a = b * 2;\n"
            + "b = --b + a;\n"
            + "a = --b + a;\n"
            + 'cout << a << b;\n'
            + "\nreturn 0;",
        expected: "116",
        explanation: "Objaśnienie: x++ zwraca wartość x (czyli 5), a następnie zwiększa ją do 6. ++x zwiększa wartość x do 7, a następnie ją zwraca. Dlatego y ma przypisaną wartość 5 + 7, czyli 12. Następnie program wypisze wartość y, czyli 12.",
    },
];

const shuffledExercises = possibleExercises.sort(() => Math.random() - 0.5);

const selectedExercises = shuffledExercises.slice(0, 3);

const exercisesContainer = document.getElementById("exercises-container");
selectedExercises.forEach((exercise, index) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.classList.add("exercise");

    const instructions = document.createElement("p");
    instructions.classList.add("instructions");
    instructions.innerText = `Zadanie ${index + 1}: ${exercise.exerciseText}`;
    exerciseDiv.appendChild(instructions);

    const upperCode = document.createElement("upperCode");
    upperCode.innerText = `#include <iostream>\n\nusing namespace std;\n\nint main(){\n\n`;
    exerciseDiv.appendChild(upperCode);

    const code = document.createElement("code");
    code.setAttribute("id", "codeformat");
    code.innerText = exercise.expression;
    exerciseDiv.appendChild(code);

    const bottomCode = document.createElement("bottomCode");
    bottomCode.innerText = "\n}\n\n";
    exerciseDiv.appendChild(bottomCode);

    const expressionDiv = document.createElement("div");
    expressionDiv.classList.add("expression");
    exerciseDiv.appendChild(expressionDiv);

    const input = document.createElement("input");
    input.classList.add("input-box");
    input.setAttribute("type", "text");
    input.setAttribute("id", `input-${index}`);
    expressionDiv.appendChild(input);

    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.innerText = "Sprawdź";
    checkButton.addEventListener("click", () => {
        const inputValue = input.value;
        const expectedValue = exercise.expected;
        const result = document.createElement("p");
        result.classList.add("result");
        if (inputValue === expectedValue) {
            result.innerText = `"${inputValue}" to dobra odpowiedź!`;
            result.style.color = "#4CAF50";
        } else {
            result.innerText = `"${inputValue}" to zła odpowiedź.`;
            result.style.color = "#f44336";
        }
        expressionDiv.appendChild(result);
    });
    exerciseDiv.appendChild(checkButton);

    const helpButton = document.createElement("button");
    helpButton.classList.add("help-button");
    helpButton.innerText = "Rozwiązanie";
    helpButton.addEventListener("click", () => {
        const explanationText = exercise.explanation;
        alert(explanationText);
    });
    exerciseDiv.appendChild(helpButton);

    exercisesContainer.appendChild(exerciseDiv);
});

const div = document.getElementById("cheat");
const cheatButton = getElementById("cheat-button");
function toggleDiv() {
    if (div.style.display == "none") {
        div.style.display = "block";
        document.getElementById("cheat-button").style.backgroundColor = "red";
    } else {
        div.style.display = "none";
        document.getElementById("cheat-button").style.backgroundColor = "#3f3f3f";
    }
}
