// Generated from g:/Thesis/programming/Test/src/examples/CSV/CSV.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./CSVParser.js";
import { HeaderContext } from "./CSVParser.js";
import { RowContext } from "./CSVParser.js";
import { FieldContext } from "./CSVParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CSVParser`.
 */
export default class CSVListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CSVParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `CSVParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;
	/**
	 * Enter a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;
	/**
	 * Enter a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
}

