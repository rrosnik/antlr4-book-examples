// Generated from g:/Thesis/programming/Test/src/tour/Data/Data.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./DataParser.js";
import { GroupContext } from "./DataParser.js";
import { SequenceContext } from "./DataParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DataParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class DataVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DataParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by `DataParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
	/**
	 * Visit a parse tree produced by `DataParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;
}

