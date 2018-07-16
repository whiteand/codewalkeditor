const files = [
  new File("main.go", "package main;\n\nfunc main() {\n  fmt.Println(\"Something new!\");\n}")
];
const steps = [
  new Step("Go Hello world!", "This is program with hello world!", "main.go", -1, -1),
  new Step("Main package", "Main package is an entry point to executing of program.", "main.go", -1, -1)
];