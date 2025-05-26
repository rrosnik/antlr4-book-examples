import fs from 'fs';
import antlr4 from 'antlr4';
import XMLLexer from '../../src/tour/XMLLexer/.antlr/XMLLexer';


describe("Test For XMLLexer", () => {

	it("should parse XML content", () => {
		const inputText = fs.readFileSync('./src/tour/XMLLexer/t.xml', 'utf8');
		const inputStream = new antlr4.CharStream(inputText);
		const lexer = new XMLLexer(inputStream);

		// [@0,0:0='<',<1>,1:0]
		lexer.getAllTokens().forEach(token => {
			console.log(`[@${token.tokenIndex},${token.start}:${token.stop}='${token.text}',<${token.type}>,${token.line}:${token.column}]`);
		});

	});

});