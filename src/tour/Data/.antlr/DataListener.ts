// Generated from g:/Thesis/programming/Test/src/tour/Data/Data.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./DataParser.js";
import { GroupContext } from "./DataParser.js";
import { SequenceContext } from "./DataParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DataParser`.
 */
export default class DataListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DataParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `DataParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by `DataParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;
}

