import DataParser from '../../src/tour/Data/.antlr/DataParser';
import DataLexer from '../../src/tour/Data/.antlr/DataLexer';
import antlr4 from 'antlr4';

describe("Test For Data example", () => {

	it("should parse Data file", () => {
		const inputText = "2 2 3 3 5 6 9"
		const inputStream = new antlr4.CharStream(inputText);
		const lexer = new DataLexer(inputStream);
		const tokenStream = new antlr4.CommonTokenStream(lexer);
		const parser = new DataParser(tokenStream);
		const tree = parser.file();
		console.log(tree.toStringTree(parser.ruleNames, parser));
	});

});