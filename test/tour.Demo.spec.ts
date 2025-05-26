import fs from 'fs';
import JavaParser from '../src/tour/Demo/.antlr/JavaParser';
import JavaLexer from '../src/tour/Demo/.antlr/JavaLexer';
import antlr4, { CommonTokenStream, ParseTreeWalker } from 'antlr4';
import InterfaceExtractorListener from '../src/tour/Demo/InterfaceExtractorListener';

describe("Test For Demo example", () => {


    it("should extract interface from Demo.java file to", () => {
        const inputText = fs.readFileSync('./src/tour/Demo/Demo.java', 'utf8');
        const inputStream = new antlr4.CharStream(inputText);
        const lexer = new JavaLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new JavaParser(tokenStream);
        const tree = parser.compilationUnit();
        const walker = new ParseTreeWalker();
        const listener = new InterfaceExtractorListener(parser);
        walker.walk(listener, tree);
        console.log(listener.interfaces);

    })

})