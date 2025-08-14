import { Question } from '../types';

export const javaQuestions: Question[] = [
  // ===== Variables & Data Types =====
  {
    id: 1,
    question: "Which keyword is used to declare a constant in Java?",
    options: ["const", "final", "constant", "static"],
    correctAnswer: 1,
    category: "Variables",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which of these is a primitive data type in Java?",
    options: ["String", "Integer", "boolean", "ArrayList"],
    correctAnswer: 2,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: 1,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which of these is the correct way to declare a character variable?",
    options: ["char c = 'A';", "char c = \"A\";", "char c = A;", "char c = 'AB';"],
    correctAnswer: 0,
    category: "Data Types",
    difficulty: "easy"
  },

  // ===== Operators =====
  {
    id: 5,
    question: "Which operator is used for logical OR in Java?",
    options: ["||", "|", "or", "OR"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What is the output of: System.out.println(7 % 3);",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "What is the output of: int x = 2; x *= 3; System.out.println(x);",
    options: ["2", "3", "5", "6"],
    correctAnswer: 3,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Which of these operators has the highest precedence?",
    options: ["+", "*", "++", "&&"],
    correctAnswer: 2,
    category: "Operators",
    difficulty: "easy"
  },

  // ===== Strings =====
  {
    id: 9,
    question: "Which method is used to compare two strings ignoring case?",
    options: ["equals()", "compareTo()", "equalsIgnoreCase()", "match()"],
    correctAnswer: 2,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What is the output of: System.out.println(\"Java\".substring(1,3));",
    options: ["Ja", "av", "ava", "va"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Which method removes leading and trailing spaces from a string?",
    options: ["strip()", "trim()", "removeSpaces()", "deleteWhitespace()"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "What is the output of: System.out.println(\"Hello\".toLowerCase());",
    options: ["hello", "HELLO", "Hello", "error"],
    correctAnswer: 0,
    category: "Strings",
    difficulty: "easy"
  },

  // ===== Arrays =====
  {
    id: 13,
    question: "What is the index of the first element in an array?",
    options: ["0", "1", "-1", "Depends on JVM"],
    correctAnswer: 0,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Which property is used to find the number of elements in an array?",
    options: ["size", "length", "count", "capacity"],
    correctAnswer: 1,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Which exception is thrown when accessing an invalid array index?",
    options: ["NullPointerException", "IndexOutOfBoundsException", "ArrayStoreException", "ArithmeticException"],
    correctAnswer: 1,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "Which is the correct syntax to initialize an array with values?",
    options: ["int[] arr = {1,2,3};", "int arr[] = {1,2,3};", "Both A and B", "new int[3]{1,2,3}"],
    correctAnswer: 2,
    category: "Arrays",
    difficulty: "easy"
  },

  // ===== Methods =====
  {
    id: 17,
    question: "Which keyword is used to define a method that does not return any value?",
    options: ["null", "empty", "void", "return"],
    correctAnswer: 2,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Which statement is true about methods in Java?",
    options: ["Methods must always return a value", "Methods can have 0 or more parameters", "Methods cannot be static", "Methods cannot be private"],
    correctAnswer: 1,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Which keyword is used to exit from a method?",
    options: ["exit", "stop", "break", "return"],
    correctAnswer: 3,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "What is the default access modifier for methods if not specified?",
    options: ["private", "public", "protected", "default (package-private)"],
    correctAnswer: 3,
    category: "Methods",
    difficulty: "easy"
  },

  // ===== Method Overloading =====
  {
    id: 21,
    question: "Which of these is a valid example of method overloading?",
    options: ["void print(int a) and void print(double b)", "void print() and int print()", "Both A and B", "Only one method allowed"],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Method overloading is determined at:",
    options: ["Compile time", "Run time", "JVM start", "Linking time"],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "Which of the following cannot be changed when overloading?",
    options: ["Number of parameters", "Type of parameters", "Order of parameters", "Only return type"],
    correctAnswer: 3,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Can overloaded methods have different access modifiers?",
    options: ["Yes", "No", "Only public and private", "Only default"],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  },

  // ===== OOP Concepts =====
  {
    id: 25,
    question: "Which of the following is not a core OOP concept?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
    correctAnswer: 3,
    category: "OOP",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Which OOP principle allows using the same method name but different implementations?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    correctAnswer: 1,
    category: "OOP",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "Which OOP concept hides internal details and shows only functionality?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    correctAnswer: 0,
    category: "OOP",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Which keyword is used for inheritance in Java?",
    options: ["extends", "inherits", "derive", "base"],
    correctAnswer: 0,
    category: "OOP",
    difficulty: "easy"
  },

  // ===== Encapsulation =====
  {
    id: 29,
    question: "Which access modifier is most restrictive in Java?",
    options: ["protected", "public", "private", "default"],
    correctAnswer: 2,
    category: "Encapsulation",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Encapsulation is achieved by using:",
    options: ["Private fields and public methods", "Only public fields", "Global variables", "Static fields"],
    correctAnswer: 0,
    category: "Encapsulation",
    difficulty: "easy"
  },
  {
    id: 31,
    question: "Which method type is commonly used to read private variables?",
    options: ["getter", "setter", "reader", "fetcher"],
    correctAnswer: 0,
    category: "Encapsulation",
    difficulty: "easy"
  },
  {
    id: 32,
    question: "Which method type is commonly used to modify private variables?",
    options: ["getter", "setter", "changer", "updater"],
    correctAnswer: 1,
    category: "Encapsulation",
    difficulty: "easy"
  },

  // ===== Constructors =====
  {
    id: 33,
    question: "Which of these is true about constructors in Java?",
    options: ["They must have a return type", "They cannot be overloaded", "They have the same name as the class", "They must be public"],
    correctAnswer: 2,
    category: "Constructors",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "What is the default constructor?",
    options: ["A constructor with no parameters", "A constructor with default values", "A constructor created manually", "A constructor with return type void"],
    correctAnswer: 0,
    category: "Constructors",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "Can a constructor be private?",
    options: ["Yes", "No", "Only in abstract classes", "Only in interfaces"],
    correctAnswer: 0,
    category: "Constructors",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Which keyword is used to call another constructor in the same class?",
    options: ["super()", "this()", "constructor()", "call()"],
    correctAnswer: 1,
    category: "Constructors",
    difficulty: "easy"
  }
];
