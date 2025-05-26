import JavaListener from './.antlr/JavaListener';
import JavaParser, { ClassDeclarationContext, MethodDeclarationContext } from './.antlr/JavaParser';
import antlr4, { Interval } from 'antlr4';


export default class InterfaceExtractorListener extends JavaListener {

    public interfaces: string = '';

    parser: JavaParser;
    constructor(parser: JavaParser) {
        super();
        this.parser = parser;
    }

    enterClassDeclaration: ((ctx: ClassDeclarationContext) => void) = (ctx: ClassDeclarationContext) => {
        const className = ctx.Identifier().getText();
        const interfaceName = `I${className}`;
        this.interfaces += `public interface ${interfaceName} {\n`;
    }

    exitClassDeclaration: ((ctx: ClassDeclarationContext) => void) = (ctx: ClassDeclarationContext) => {
        this.interfaces += '}\n\n';
    }

    enterMethodDeclaration: ((ctx: MethodDeclarationContext) => void) = (ctx: MethodDeclarationContext) => {

        const tokens = this.parser.getTokenStream();
        let type = "void";
        if (ctx.type_() !== null) {
            type = ctx.type_().getText();
            tokens.getText(new Interval(ctx.type_().start.tokenIndex, ctx.type_().stop?.tokenIndex || ctx.type_().start.tokenIndex));
        }

        const methodName = ctx.Identifier().getText();
        const pctx = ctx.formalParameters();
        const parameters = tokens.getText(new Interval(pctx.start.tokenIndex, pctx.stop?.tokenIndex || pctx.start.tokenIndex));

        this.interfaces += `    ${type} ${methodName}${parameters};\n`;

    }



}