// Generated from src/tour/Expr.g4 by ANTLR 4.13.2

import ExprVisitor from './.antlr/ExprVisitor';
import ExprParser, {
    AddSubContext,
    AssignContext,
    ClearContext,
    IdContext,
    IntContext,
    MulDivContext,
    ParensContext,
    PrintExprContext
} from './.antlr/ExprParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <number> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class calculatorVisitor extends ExprVisitor<number> {

    values: Map<string, number> = new Map();

    visitPrintExpr: (ctx: PrintExprContext) => number = (ctx: PrintExprContext) => {
        console.log(this.visit(ctx.expr()))
        return 0;
    }
    visitAssign: (ctx: AssignContext) => number = (ctx: AssignContext) => {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.values.set(id, value);
        return value;
    }
    visitParens: (ctx: ParensContext) => number = (ctx: ParensContext) => {
        return this.visit(ctx.expr());
    }
    visitMulDiv: (ctx: MulDivContext) => number = (ctx: MulDivContext) => {
        if (ctx._op.type === ExprParser.MUL) {
            return this.visit(ctx.expr(0)) * this.visit(ctx.expr(1));
        } else {
            return this.visit(ctx.expr(0)) / this.visit(ctx.expr(1));
        }
    }
    visitAddSub: (ctx: AddSubContext) => number = (ctx: AddSubContext) => {
        if (ctx._op.type === ExprParser.ADD) {
            return this.visit(ctx.expr(0)) + this.visit(ctx.expr(1));
        } else {
            return this.visit(ctx.expr(0)) - this.visit(ctx.expr(1));
        }
    }
    visitId: (ctx: IdContext) => number = (ctx: IdContext) => {
        const id = ctx.ID().getText();
        const value = this.values.get(id);
        if (value === undefined) {
            throw new Error(`Undefined variable: ${id}`);
        }
        console.log(`Variable ${id} = ${value}`);
        return value;
    }
    visitInt?: (ctx: IntContext) => number = (ctx: IntContext) => {
        return parseInt(ctx.INT().getText());
    }

    visitClear: ((ctx: ClearContext) => number) | undefined = (ctx: ClearContext) => {
        this.values.clear();
        console.log("All variables cleared");
        return 0;
    }

}

