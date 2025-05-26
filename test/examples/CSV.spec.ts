import fs from 'fs';
import antlr4 from 'antlr4';
import CSVLexer from '../../src/examples/CSV/.antlr/CSVLexer';
import CSVParser from '../../src/examples/CSV/.antlr/CSVParser';

describe("Test For CSV example", () => {

	it("should parse CSV file", () => {
		const inputText = fs.readFileSync('./src/examples/CSV/data.csv', 'utf8');
		const inputStream = new antlr4.CharStream(inputText);
		const lexer = new CSVLexer(inputStream);
		lexer.getAllTokens().forEach((token,index) => {
			console.log(`[@${index},${token.start}:${token.stop}='${token.text}',<${token.type}>,${token.line}:${token.column}]`);
		});
	});

});