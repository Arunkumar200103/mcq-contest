import { Question } from '../types';

export const javaQuestions: Question[] = [
  {
    id: 1,
    question: "Which of the following is the correct way to declare a variable in Java?",
    options: ["int x = 5;", "integer x = 5;", "var x = 5;", "number x = 5;"],
    correctAnswer: 0,
    category: "Variables",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What is the output of System.out.println(10 + 20 + \"Hello\");?",
    options: ["1020Hello", "30Hello", "Hello30", "Hello1020"],
    correctAnswer: 1,
    category: "Operators",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Which keyword is used to create a class in Java?",
    options: ["class", "Class", "new", "create"],
    correctAnswer: 0,
    category: "Classes",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: 1,
    category: "Data Types",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Which method is called when an object is created in Java?",
    options: ["constructor", "init()", "create()", "new()"],
    correctAnswer: 0,
    category: "Constructors",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "What does the 'static' keyword mean in Java?",
    options: [
      "The method belongs to the class rather than instance",
      "The method cannot be overridden",
      "The method is private",
      "The method is final"
    ],
    correctAnswer: 0,
    category: "Keywords",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Which of the following is NOT a valid Java identifier?",
    options: ["_variable", "$variable", "2variable", "variable_2"],
    correctAnswer: 2,
    category: "Identifiers",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "What is the parent class of all classes in Java?",
    options: ["Object", "Class", "Parent", "Super"],
    correctAnswer: 0,
    category: "Inheritance",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Which exception is thrown when an array is accessed with an illegal index?",
    options: [
      "ArrayIndexOutOfBoundsException",
      "IndexOutOfBoundsException",
      "IllegalArgumentException",
      "RuntimeException"
    ],
    correctAnswer: 0,
    category: "Exceptions",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "What is the correct way to create a thread in Java?",
    options: [
      "Extend Thread class",
      "Implement Runnable interface",
      "Both A and B",
      "Use Thread.create() method"
    ],
    correctAnswer: 2,
    category: "Multithreading",
    difficulty: "hard"
  },

  {
  id: 11,
  question: "Which symbol is used to end a statement in Java?",
  options: [";", ".", ":", ","],
  correctAnswer: 0,
  category: "Syntax",
  difficulty: "easy"
},
{
  id: 12,
  question: "Which of these is a valid comment in Java?",
  options: ["# This is a comment", "// This is a comment", "-- This is a comment", "/* This is comment"],
  correctAnswer: 1,
  category: "Syntax",
  difficulty: "easy"
},
{
  id: 13,
  question: "What is the size of an int variable in Java?",
  options: ["8 bits", "16 bits", "32 bits", "64 bits"],
  correctAnswer: 2,
  category: "Data Types",
  difficulty: "easy"
},
{
  id: 14,
  question: "Which of the following is a correct method declaration in Java?",
  options: ["void myMethod()", "method myMethod()", "function myMethod()", "define myMethod()"],
  correctAnswer: 0,
  category: "Methods",
  difficulty: "easy"
},
{
  id: 15,
  question: "What is the correct way to create a String in Java?",
  options: ['String s = "Hello";', 'string s = Hello;', 'String s = Hello;', 'String s = new String;'],
  correctAnswer: 0,
  category: "Strings",
  difficulty: "easy"
},
{
  id: 16,
  question: "Which of the following is used to take input from the user in Java?",
  options: ["Scanner", "Input", "Reader", "ConsoleReader"],
  correctAnswer: 0,
  category: "Input/Output",
  difficulty: "easy"
},
{
  id: 17,
  question: "Which of these is a loop structure in Java?",
  options: ["for", "repeat", "loop", "foreach"],
  correctAnswer: 0,
  category: "Control Flow",
  difficulty: "easy"
},
{
  id: 18,
  question: "What is the result of 5 % 2 in Java?",
  options: ["0", "2", "1", "2.5"],
  correctAnswer: 2,
  category: "Operators",
  difficulty: "easy"
},
{
  id: 19,
  question: "Which access modifier makes a member accessible within the same class only?",
  options: ["private", "public", "protected", "default"],
  correctAnswer: 0,
  category: "Access Modifiers",
  difficulty: "easy"
},
{
  id: 20,
  question: "Which of the following keywords is used to inherit a class in Java?",
  options: ["extends", "implements", "inherits", "super"],
  correctAnswer: 0,
  category: "Inheritance",
  difficulty: "easy"
},
{
  id: 21,
  question: "Which loop guarantees at least one execution?",
  options: ["while", "for", "do-while", "foreach"],
  correctAnswer: 2,
  category: "Control Flow",
  difficulty: "easy"
},
{
  id: 22,
  question: "Which operator is used to compare two values?",
  options: ["==", "=", "!=", "<="],
  correctAnswer: 0,
  category: "Operators",
  difficulty: "easy"
},
{
  id: 23,
  question: "What will be the output of: System.out.println(\"Java\" + 5 + 10);",
  options: ["Java15", "Java510", "15Java", "15"],
  correctAnswer: 1,
  category: "Strings",
  difficulty: "easy"
},
{
  id: 24,
  question: "Which data type is used to store decimal numbers?",
  options: ["int", "float", "char", "boolean"],
  correctAnswer: 1,
  category: "Data Types",
  difficulty: "easy"
},
{
  id: 25,
  question: "Which of these is not a primitive data type?",
  options: ["String", "int", "boolean", "char"],
  correctAnswer: 0,
  category: "Data Types",
  difficulty: "easy"
},
{
  id: 26,
  question: "How do you write a multi-line comment in Java?",
  options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
  correctAnswer: 2,
  category: "Syntax",
  difficulty: "easy"
},
{
  id: 27,
  question: "Which of the following initializes an array correctly?",
  options: ["int[] arr = new int[5];", "int arr = [5];", "int arr[5];", "array int arr;"],
  correctAnswer: 0,
  category: "Arrays",
  difficulty: "easy"
},
{
  id: 28,
  question: "Which statement is used to exit a loop in Java?",
  options: ["break", "stop", "exit", "return"],
  correctAnswer: 0,
  category: "Control Flow",
  difficulty: "easy"
},
{
  id: 29,
  question: "Which of these is used to create an object in Java?",
  options: ["new", "create", "build", "make"],
  correctAnswer: 0,
  category: "OOP",
  difficulty: "easy"
},
{
  id: 30,
  question: "What does JVM stand for?",
  options: ["Java Virtual Machine", "Java Visual Machine", "Just Virtual Machine", "Java Variable Memory"],
  correctAnswer: 0,
  category: "JVM",
  difficulty: "easy"
}



];