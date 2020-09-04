[
{
"module": "1. Liczby i operatory arytmetyczne",
"title": "1. Podstawowe operatory arytmetyczne",
"task": "Policz, ile to jest 4 * 2 - 1.",
"initcode": "print 2 + 2",
"inputReq": "/print/ -> Pamiętaj o poleceniu print.\n/\\b4\\b/ -> Pamiętaj o liczbie 4.\n/[*]/ -> Użyj znaku * jako operatora mnożenia.\n/\\b2\\b/ -> Pamiętaj o liczbie 2.\n/-/ -> Użyj znaku - jako operatora odejmowania.\n/\\b1\\b/ -> Pamiętaj o liczbie 1.",
"outputHas": "[] -> [ /^7$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "2. Kolejność wykonywania działań arytmetycznych",
"task": "Policz średnią arytmetyczną z 4 i 6.",
"initcode": "print 4 - (2 - 1)",
"inputReq": "/\\b4\\b/ -> Pamiętaj o liczbie 4.\n/[+]/ -> Użyj znaku + do obliczenia sumy dwóch liczb.\n/\\b6\\b/ -> Pamiętaj o liczbie 6.",
"outputHas": "[] -> [ /^5$|^5.0$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "3. Liczby całkowite i rzeczywiste",
"task": "Policz dokładną średnią arytmetyczną z 4 i 3, nie używając operatora mnożenia.",
"initcode": "print (4 + 3) / 2",
"inputReq": "/\\b4\\b/ -> Pamiętaj o liczbie 4.\n/[+]/ -> Użyj znaku + do obliczenia sumy dwóch liczb.\n/\\b3\\b/ -> Pamiętaj o liczbie 3.\n/[/]/ -> Operatorem dzielenia jest /.\n/[.]/ -> Zapisz przynajmniej jedną z liczb jako liczbę rzeczywistą.\n/[*]/ +> Nie używaj operatora mnożenia.",
"outputHas": "[] -> [ /^3.5$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "4. Inne systemy liczbowe",
"task": "Przelicz liczbę szesnastkową BADF00D na postać dziesiętną.",
"initcode": "print 0b100000",
"inputReq": "/\\b0x/i -> Pamiętaj o prefiksie sygnalizującym system szesnastkowy.\n/BADF00D\\b/i -> Przyjrzyj się dokładnie liczbie szesnastkowej.\n/O/ +> Liczby szesnastkowe mogą zawierać cyfry 0-9 i A-F. Litera O nie może być ich elementem.",
"outputHas": "[] -> [ /^195948557$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "5. Potęgowanie",
"task": "Policz rzeczywisty pierwiastek kwadratowy z liczby 3.",
"initcode": "print 2 ** 2",
"inputReq": "/\\b3/ -> Pamiętaj o liczbie 3.\n/[*][*]/ -> Użyj operatora potęgowania **.\n/2|0.5/ -> Prawidłowo zapisz wykładnik.\n/[.]/ -> Pamiętaj o różnicy między operacjami na liczbach całkowitych, a na liczbach rzeczywistych.\n/[*][*]\\s*1.*[/]/ +> Pamiętaj o kolejności wykonywania działań.",
"outputHas": "[] -> [ /^1.73\\d*$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "6. Zagnieżdżanie nawiasów",
"task": "Policz pierwiastek kwadratowy z iloczynu dwóch średnich arytmetycznych: z 4 i 16 oraz 5 i 15.",
"initcode": "print ((4 - 2) * 2) ** 2",
"inputReq": "/\\b4\\b/ -> Pamiętaj o liczbie 4.\n/[+]/ -> Użyj znaku + do obliczenia sumy dwóch liczb.\n/\\b16\\b/ -> Pamiętaj o liczbie 16.\n/\\b5\\b/ -> Pamiętaj o liczbie 5.\n/\\b15\\b/ -> Pamiętaj o liczbie 15.\n/[*]/ -> Użyj znaku * do obliczenia iloczynu.\n/[+][\\s\\S]+[+]/ -> Oblicz iloczyn dwóch sum.\n/[*][*]/ -> Użyj znaków ** do obliczenia pierwiastka.\n/[(][^()]*[)]/ -> Pamietaj o użyciu nawiasów okrągłych (i ich domykaniu).\n/[/]\\s*2|[^*][*]\\s*0.5|0[.]5\\s*[*]/ -> Upewnij się, czy prawidłowo obliczasz średnią arytmetyczną z dwóch liczb.",
"outputHas": "[] -> [ /^10$|^10.0$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "7. Notacja naukowa liczb",
"task": "Policz sumę jednej tysięcznej i czterech setnych. Obie wartości zapisz w notacji naukowej.",
"initcode": "print 1e-6 * 2",
"inputReq": "/1/ -> Pamiętaj o cyfrze 1.\n/4/ -> Pamiętaj o cyfrze 4.\n/[+]/ -> Użyj znaku + do obliczenia sumy dwóch liczb.\n/e|E/ -> Użyj notacji naukowej.\n/e|E-2/ -> Pamiętaj, że jedna setna to jedynka z dwoma zerami z przodu.\n/e|E-3/ -> Pamiętaj, że jedna tysięczna to jedynka z trzema zerami z przodu.",
"outputHas": "[] -> [ /^0.041$/m ]"
 },{
"module": "1. Liczby i operatory arytmetyczne",
"title": "8. Reszta z dzielenia",
"task": "Przyjmijmy, że numer 0 oznacza niedzielę, jeden &ndash; poniedziałek, dwa &ndash; wtorek itd. Jeżeli dziś byłaby środa, to jaki dzień tygodnia będzie za dwanaście dni? (Oblicz jego numer wykorzystując operator reszty z dzielenia.)",
"initcode": "print 33 % 4",
"inputReq": "/12/ -> Pamiętaj, że dni jest 12.\n/3/ -> Pamiętaj, że środa ma numer 3.\n/[+]/ -> Użyj operatora + do obliczenia sumy dni.\n/[%]/ -> Użyj operatora %.\n/[%].*7/ -> Pamiętaj, że w tygodniu jest 7 dni.\n/\\d+\\s*[+]\\s*\\d+\\s*[%]/ +> Pamiętaj o kolejnośći wykonywania działań. Priorytet reszty z dzielenia jest taki sam jak mnożenia i dzielenia.",
"outputHas": "[] -> [ /^1$/m ]"
 }
]