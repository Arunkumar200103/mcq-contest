import { Question } from '../types';

export const javaQuestions: Question[] = [
  // ===== Variables & Data Types =====
  {
    id: 1,
    question: "Which of the following is correct for declaring a constant in Java?",
    options: ["const int x = 10;", "final int x = 10;", "constant int x = 10;", "static x = 10;"],
    correctAnswer: 1,
    category: "Variables",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which of these is a wrapper class for int?",
    options: ["Int", "Integer", "Number", "IntegerWrapper"],
    correctAnswer: 1,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the range of byte data type in Java?",
    options: ["-128 to 127", "0 to 255", "-256 to 255", "0 to 127"],
    correctAnswer: 0,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which of these is the default value of an int variable?",
    options: ["0", "null", "undefined", "NaN"],
    correctAnswer: 0,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "What is the correct way to declare a float variable?",
    options: ["float f = 3.14;", "float f = 3.14f;", "float f = (float)3.14;", "Both B and C"],
    correctAnswer: 3,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What is the output of: char c = 'A'; System.out.println(c);",
    options: ["A", "65", "Error", "a"],
    correctAnswer: 0,
    category: "Data Types",
    difficulty: "easy"
  },

  // ===== Operators =====
  {
    id: 7,
    question: "Which operator is used for logical AND in Java?",
    options: ["&", "&&", "AND", "and"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "What is the output of: int x = 5; System.out.println(x++);",
    options: ["5", "6", "4", "Error"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "What is the output of: System.out.println(true && false);",
    options: ["true", "false", "1", "0"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What is the output of: System.out.println(10 / 3);",
    options: ["3.33", "3", "3.0", "Error"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Which operator is used for ternary conditional operations?",
    options: ["?:", "??", "::", "->"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "What is the output of: System.out.println(5 > 3 ? \"Yes\" : \"No\");",
    options: ["Yes", "No", "true", "false"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },

  // ===== Strings =====
  {
    id: 13,
    question: "What is the output of: System.out.println(\"10\" + 5);",
    options: ["15", "105", "10 + 5", "Error"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "What is the correct way to check if two strings are equal?",
    options: ["str1 == str2", "str1.equals(str2)", "str1 = str2", "str1.compare(str2)"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Which method is used to get the length of a string?",
    options: ["length()", "size()", "count()", "getLength()"],
    correctAnswer: 0,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "What is the output of: System.out.println(\"Java\".length());",
    options: ["4", "5", "3", "Error"],
    correctAnswer: 0,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Which method converts all characters in a string to uppercase?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "makeUpperCase()"],
    correctAnswer: 2,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What is the output of: System.out.println(\"Hello\".charAt(1));",
    options: ["e", "H", "l", "o"],
    correctAnswer: 0,
    category: "Strings",
    difficulty: "easy"
  },

  // ===== Arrays =====
  {
    id: 19,
    question: "Which statement correctly declares a 2D array?",
    options: ["int[][] arr;", "int arr[][];", "int[] arr[];", "All of the above"],
    correctAnswer: 3,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "What is the default value of an element in an int array?",
    options: ["0", "null", "undefined", "NaN"],
    correctAnswer: 0,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "Which method returns the length of an array?",
    options: ["length", "length()", "size()", "getLength()"],
    correctAnswer: 0,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "What is the output of: int[] arr = {1,2,3}; System.out.println(arr[1]);",
    options: ["1", "2", "3", "Error"],
    correctAnswer: 1,
    category: "Arrays",
    difficulty: "easy"
  },

  // ===== Methods =====
  {
    id: 23,
    question: "Which of these is a correct way to declare a method that returns nothing?",
    options: ["void methodName()", "null methodName()", "empty methodName()", "return methodName()"],
    correctAnswer: 0,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Which keyword is used to define a method in Java?",
    options: ["method", "define", "void", "function"],
    correctAnswer: 2,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "Which of these statements is true about methods?",
    options: [
      "Methods must always return a value",
      "Methods can return at most one value",
      "Methods cannot have parameters",
      "Methods cannot be overloaded"
    ],
    correctAnswer: 1,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Which keyword is used inside a method to exit from it?",
    options: ["exit", "break", "stop", "return"],
    correctAnswer: 3,
    category: "Methods",
    difficulty: "easy"
  },

  // ===== Method Overloading =====
  {
    id: 27,
    question: "Which statement is true about method overloading in Java?",
    options: [
      "Overloaded methods must have different parameter lists",
      "Overloaded methods must have the same return type",
      "Overloaded methods must be in different classes",
      "Overloaded methods cannot have different access modifiers"
    ],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Which of the following is NOT a valid method overloading scenario?",
    options: [
      "Changing the number of parameters",
      "Changing the order of parameters",
      "Changing only the return type",
      "Changing parameter types"
    ],
    correctAnswer: 2,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "Can method overloading occur in the same class?",
    options: ["Yes", "No", "Only in inherited classes", "Only in abstract classes"],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Which of these is a valid example of method overloading?",
    options: [
      "void print(int a) and void print(double b)",
      "void print() and int print()",
      "void print(int a) and void print(int b)",
      "Both A and C"
    ],
    correctAnswer: 0,
    category: "Method Overloading",
    difficulty: "easy"
  }
];
