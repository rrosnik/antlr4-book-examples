// Generated from g:/Thesis/programming/Test/src/starter/ArrayInit.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { InitContext } from "./ArrayInitParser.js";
import { ValueContext } from "./ArrayInitParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ArrayInitParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ArrayInitVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ArrayInitParser.init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit?: (ctx: InitContext) => Result;
	/**
	 * Visit a parse tree produced by `ArrayInitParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

