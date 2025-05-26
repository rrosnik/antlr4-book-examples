// Generated from g:/Thesis/programming/Test/src/starter/ArrayInit.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { InitContext } from "./ArrayInitParser.js";
import { ValueContext } from "./ArrayInitParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ArrayInitParser`.
 */
export default class ArrayInitListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ArrayInitParser.init`.
	 * @param ctx the parse tree
	 */
	enterInit?: (ctx: InitContext) => void;
	/**
	 * Exit a parse tree produced by `ArrayInitParser.init`.
	 * @param ctx the parse tree
	 */
	exitInit?: (ctx: InitContext) => void;
	/**
	 * Enter a parse tree produced by `ArrayInitParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ArrayInitParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

