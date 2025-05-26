# ANTLR4 Book Examples in TypeScript

This repository contains examples and projects from the book **"The Definitive ANTLR 4 Reference"** by Terence Parr, implemented in TypeScript. Each chapter's code and grammar samples are adapted to work with the TypeScript target of ANTLR4.

## References

- [The Definitive ANTLR 4 Reference (Book)](https://pragprog.com/titles/tpantlr2/the-definitive-antlr-4-reference/)
- [ANTLR4 Official Repository](https://github.com/antlr/antlr4)

## About

- All examples are written in TypeScript.
- Each project corresponds to a section or chapter in the book.
- Intended for educational and reference purposes.

Feel free to explore, learn, and contribute!

## New Generation of Antlr Tool

[ANTLR-ng](https://www.antlr-ng.org/) tool is a modern reimplementation of the classic ANTLR toolchain. ANTLR-ng provides improved performance, enhanced TypeScript support, and a more streamlined developer experience compared to the original ANTLR4 tool. While both tools generate parsers from grammar files, ANTLR-ng is designed to integrate more naturally with TypeScript projects and offers additional features and bug fixes not present in the standard ANTLR4 distribution. This repository demonstrates how to use ANTLR-ng for grammar generation and parsing in TypeScript, showcasing the differences and benefits over the regular ANTLR tool.

## ANTLR-ng vs. ANTLR4: Differences, Pros, and Cons

### Key Differences

- **Language Support:**  
    ANTLR-ng is optimized for TypeScript and JavaScript, while ANTLR4 supports multiple targets (Java, C#, Python, etc.).
- **Performance:**  
    ANTLR-ng offers improved performance and faster parser generation for TypeScript projects.
- **Integration:**  
    ANTLR-ng integrates more seamlessly with modern TypeScript build tools and workflows.
- **Feature Set:**  
    ANTLR-ng includes additional features and bug fixes not present in the standard ANTLR4 distribution.
- **Tooling:**  
    ANTLR-ng provides a more streamlined CLI and better TypeScript type definitions.

### Pros of ANTLR-ng

- Native TypeScript support with strong typings.
- Faster parser generation and runtime performance.
- Modernized codebase and improved developer experience.
- Actively maintained with TypeScript-centric enhancements.

### Cons of ANTLR-ng

- Limited to TypeScript/JavaScript; lacks multi-language target support.
- Smaller community and ecosystem compared to ANTLR4.
- Some advanced ANTLR4 features or plugins may not be available or fully compatible.

Use ANTLR-ng if you are building TypeScript projects and want the latest features and best integration. Stick with ANTLR4 if you need support for other languages or require a mature, widely-used toolchain.

## Code Completion with antlr4-c3

[antlr4-c3](https://github.com/mike-lischke/antlr4-c3) is a powerful code completion engine for ANTLR4 grammars. It analyzes your grammar and parser state to provide intelligent suggestions for possible tokens or rules at a given position in the input. This is especially useful for building editor integrations, IDE plugins, or language servers that offer context-aware code completion for custom languages defined with ANTLR4.

- **Language Support:** Works with any language target supported by ANTLR4, including JavaScript and TypeScript.
- **Integration:** Can be used in web-based editors or desktop IDEs to enhance developer productivity.
- **Usage:** Given a grammar and a partial input, antlr4-c3 computes valid next tokens or rules, helping users write syntactically correct code faster.

This repository demonstrates how to use ANTLR-ng for grammar generation, but if you need advanced code completion features, consider integrating antlr4-c3 into your workflow.
