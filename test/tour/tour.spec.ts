import antlr4 from 'antlr4';
import ExprParser from '../../src/tour/Expr/.antlr/ExprParser';
import ExprLexer from '../../src/tour/Expr/.antlr/ExprLexer';
import ExprListener from '../../src/tour/Expr/.antlr/ExprListener';
import CalculatorVisitor from '../../src/tour/Expr/CalculatorVisitor';

describe('Expr Grammar', () => {
    it('parses integer literals', () => {
        const input = '46*1000+12';
        const inputStream = new antlr4.CharStream(input);
        const lexer = new ExprLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new ExprParser(tokenStream);
        const tree = parser.prog();

        const visitor = new CalculatorVisitor();
        const result = visitor.visit(tree);


    });

    it('parses variable assignment', () => {
        const input = 'x = 5 + 3 * (2 - 1)\nx\n';
        const inputStream = new antlr4.CharStream(input);
        const lexer = new ExprLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new ExprParser(tokenStream);
        const tree = parser.prog();

        const visitor = new CalculatorVisitor();
        const result = visitor.visit(tree);

    });
});