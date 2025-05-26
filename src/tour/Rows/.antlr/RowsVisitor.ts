// Generated from g:/Thesis/programming/Test/src/tour/Rows/Rows.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./RowsParser.js";
import { RowContext } from "./RowsParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RowsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class RowsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RowsParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by `RowsParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;
}

