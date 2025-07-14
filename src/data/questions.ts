import { Question } from '../types';

export const javaQuestions: Question[] = [
 {
    id: 1,
    question: "Which package is imported by default in Java?",
    options: ["java.util", "java.lang", "java.io", "java.awt"],
    correctAnswer: 1,
    category: "Packages",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What is the output of: System.out.println(\"10\" + 5);",
    options: ["15", "105", "10 + 5", "Error"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "execute()"],
    correctAnswer: 1,
    category: "Program Structure",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which of the following is correct for declaring a constant in Java?",
    options: ["const int x = 10;", "final int x = 10;", "constant int x = 10;", "static x = 10;"],
    correctAnswer: 1,
    category: "Variables",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "What is the correct way to check if two strings are equal?",
    options: ["str1 == str2", "str1.equals(str2)", "str1 = str2", "str1.compare(str2)"],
    correctAnswer: 1,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Which of these is a wrapper class for int?",
    options: ["Int", "Integer", "Number", "IntegerWrapper"],
    correctAnswer: 1,
    category: "Wrapper Classes",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "What is the range of byte data type in Java?",
    options: ["-128 to 127", "0 to 255", "-256 to 255", "0 to 127"],
    correctAnswer: 0,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Which operator is used for logical AND in Java?",
    options: ["&", "&&", "AND", "and"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Which statement correctly declares a 2D array?",
    options: ["int[][] arr;", "int arr[][];", "int[] arr[];", "All of the above"],
    correctAnswer: 3,
    category: "Arrays",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What is the output of: int x = 5; System.out.println(x++);",
    options: ["5", "6", "4", "Error"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Which of these is used to handle exceptions in Java?",
    options: ["try-catch", "handle-error", "exception-handle", "error-catch"],
    correctAnswer: 0,
    category: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Which keyword is used to prevent inheritance in Java?",
    options: ["final", "static", "private", "abstract"],
    correctAnswer: 0,
    category: "Inheritance",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "What is the output of: System.out.println(true && false);",
    options: ["true", "false", "1", "0"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Which of these is NOT a valid variable name in Java?",
    options: ["_name", "$price", "class", "name123"],
    correctAnswer: 2,
    category: "Identifiers",
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
    question: "What is the correct way to create an ArrayList in Java?",
    options: ["ArrayList<Integer> list = new ArrayList<>();", "ArrayList list = new ArrayList();", "ArrayList<Integer> list = new ArrayList<Integer>();", "All of the above"],
    correctAnswer: 3,
    category: "Collections",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Which of these is used to get input from keyboard?",
    options: ["BufferedReader", "Scanner", "InputStreamReader", "All of the above"],
    correctAnswer: 3,
    category: "Input/Output",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What is the output of: System.out.println(10 / 3);",
    options: ["3.33", "3", "3.0", "Error"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Which of these is a correct way to declare a method that returns nothing?",
    options: ["void methodName()", "null methodName()", "empty methodName()", "return methodName()"],
    correctAnswer: 0,
    category: "Methods",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Which loop is best when you know the number of iterations?",
    options: ["while", "do-while", "for", "foreach"],
    correctAnswer: 2,
    category: "Control Flow",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "What is the output of: char c = 'A'; System.out.println(c + 1);",
    options: ["A1", "B", "66", "Error"],
    correctAnswer: 2,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Which access modifier provides the widest accessibility?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: 2,
    category: "Access Modifiers",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "What is the correct syntax for a switch statement?",
    options: ["switch(variable) { case value: break; }", "switch variable { case value: break; }", "switch(variable) [ case value: break; ]", "switch variable: case value break;"],
    correctAnswer: 0,
    category: "Control Flow",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Which of these is used to convert a string to integer?",
    options: ["Integer.parseInt()", "Integer.valueOf()", "Both A and B", "String.toInt()"],
    correctAnswer: 2,
    category: "Type Conversion",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "What is the output of: System.out.println(\"Java\".length());",
    options: ["4", "5", "3", "Error"],
    correctAnswer: 0,
    category: "Strings",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Which of these is used to terminate a program in Java?",
    options: ["System.exit()", "System.stop()", "System.terminate()", "System.end()"],
    correctAnswer: 0,
    category: "System Methods",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "What is the correct way to declare a float variable?",
    options: ["float f = 3.14;", "float f = 3.14f;", "float f = (float)3.14;", "Both B and C"],
    correctAnswer: 3,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Which of these is not a control flow statement?",
    options: ["if", "switch", "class", "while"],
    correctAnswer: 2,
    category: "Control Flow",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "What is the output of: System.out.println(5 > 3 ? \"Yes\" : \"No\");",
    options: ["Yes", "No", "true", "false"],
    correctAnswer: 0,
    category: "Operators",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Which of these is used to skip the current iteration of a loop?",
    options: ["break", "continue", "skip", "next"],
    correctAnswer: 1,
    category: "Control Flow",
    difficulty: "easy"
  }


];