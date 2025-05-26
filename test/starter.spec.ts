import { CommonTokenStream, CharStream, ParseTreeWalker } from 'antlr4';
import ArrayInitLexer from '../src/starter/.antlr/ArrayInitLexer';
import ArrayInitParser from '../src/starter/.antlr/ArrayInitParser';
import ArrayInitListener from '../src/starter/.antlr/ArrayInitListener';

describe("test for starter example", () => {

    it("should parse a simple expression", () => {
        const input = "{1, 99, 33}";
        const chars = new CharStream(input);
        const lexer = new ArrayInitLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new ArrayInitParser(tokens);

        const walker = new ParseTreeWalker();
        const listener = new ArrayInitListener();
        walker.walk(listener, parser.init());

    });

    it.skip("should handle syntax errors gracefully", () => {
        const input = "1 + * 3";
        const chars = new CharStream(input);
        const lexer = new ArrayInitLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new ArrayInitParser(tokens);

        expect(() => parser.init()).toThrow();
    });

});