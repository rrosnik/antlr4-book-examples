import fs from 'fs';
import antlr4 from 'antlr4';
import RowsLexer from '../src/tour/Rows/.antlr/RowsLexer';
import RowsParser from '../src/tour/Rows/.antlr/RowsParser';
import RowsListener from '../src/tour/Rows/.antlr/RowsListener';


describe("Test For Rows example", () => {
    it("should parse Rows file", () => {
        const inputText = fs.readFileSync('./src/tour/Rows/t.rows', 'utf8');
        const inputStream = new antlr4.CharStream(inputText);
        const lexer = new RowsLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new RowsParser(tokenStream);
        parser.setCol(1); // Set the column to 1
    });
});