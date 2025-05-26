// Generated from g:/Thesis/programming/Test/src/examples/CSV/CSV.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./CSVParser.js";
import { HeaderContext } from "./CSVParser.js";
import { RowContext } from "./CSVParser.js";
import { FieldContext } from "./CSVParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CSVParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CSVVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CSVParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by `CSVParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;
	/**
	 * Visit a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
}

