import JavaListener from './.antlr/JavaListener';
import { ClassBodyContext } from './.antlr/JavaParser';
import antlr4 from 'antlr4';

export default class InsertSerialIDListener extends JavaListener {

	rewriter: antlr4.TokenStreamRewriter;

	constructor(tokenStream: antlr4.CommonTokenStream) {
		super();
		this.rewriter = new antlr4.TokenStreamRewriter(tokenStream);
	}

	enterClassBody: ((ctx: ClassBodyContext) => void) = (ctx: ClassBodyContext) => {
		const field = `\n    private static final long serialVersionUID = 1L; \n`;
		this.rewriter.insertAfter(ctx.start, field);
	}
}