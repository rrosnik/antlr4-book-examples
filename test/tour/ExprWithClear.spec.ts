import * as antlr4 from 'antlr4';
import ExprParser from '../../src/tour/ExprWithClear/.antlr/ExprParser';
import ExprLexer from '../../src/tour/ExprWithClear/.antlr/ExprLexer';
import CalculatorVisitor from '../../src/tour/ExprWithClear/CalculatorVisitor';

describe("Test Expr Grammar with Clear", () => {

    it("should clear calculation", () => {
        const input = 'x = 5 + 3 * (2 - 1)\nclear\nx=12\nx+1\n';
        const inputStream = new antlr4.CharStream(input);
        const lexer = new ExprLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new ExprParser(tokenStream);
        const tree = parser.prog();

        const visitor = new CalculatorVisitor();
        const result = visitor.visit(tree);
        
    })


});