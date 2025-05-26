// Generated from g:/Thesis/programming/Test/src/tour/Expr/Expr.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./ExprParser.js";
import { PrintExprContext } from "./ExprParser.js";
import { AssignContext } from "./ExprParser.js";
import { BlankContext } from "./ExprParser.js";
import { ParensContext } from "./ExprParser.js";
import { MulDivContext } from "./ExprParser.js";
import { AddSubContext } from "./ExprParser.js";
import { IdContext } from "./ExprParser.js";
import { IntContext } from "./ExprParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `printExpr`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `assign`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
	/**
	 * Visit a parse tree produced by the `blank`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlank?: (ctx: BlankContext) => Result;
	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;
	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;
	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;
	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
}

