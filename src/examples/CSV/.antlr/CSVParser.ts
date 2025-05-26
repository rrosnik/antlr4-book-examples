// Generated from g:/Thesis/programming/Test/src/examples/CSV/CSV.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CSVListener from "./CSVListener.js";
import CSVVisitor from "./CSVVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CSVParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly TEXT = 4;
	public static readonly STRING = 5;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_row = 2;
	public static readonly RULE_field = 3;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'\\r'", "'\\n'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "TEXT", "STRING" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "header", "row", "field",
	];
	public get grammarFileName(): string { return "CSV.g4"; }
	public get literalNames(): (string | null)[] { return CSVParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CSVParser.symbolicNames; }
	public get ruleNames(): string[] { return CSVParser.ruleNames; }
	public get serializedATN(): number[] { return CSVParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CSVParser._ATN, CSVParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CSVParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 8;
			this.header();
			this.state = 10;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 9;
				this.row();
				}
				}
				this.state = 12;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let localctx: HeaderContext = new HeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CSVParser.RULE_header);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 14;
			this.row();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public row(): RowContext {
		let localctx: RowContext = new RowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CSVParser.RULE_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 16;
			this.field();
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 17;
				this.match(CSVParser.T__0);
				this.state = 18;
				this.field();
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 24;
				this.match(CSVParser.T__1);
				}
			}

			this.state = 27;
			this.match(CSVParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CSVParser.RULE_field);
		try {
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 29;
				this.match(CSVParser.TEXT);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 30;
				this.match(CSVParser.STRING);
				}
				break;
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,5,35,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,1,0,1,0,4,0,11,8,0,11,0,12,0,12,1,1,1,1,1,2,1,2,1,2,
	5,2,20,8,2,10,2,12,2,23,9,2,1,2,3,2,26,8,2,1,2,1,2,1,3,1,3,1,3,3,3,33,8,
	3,1,3,0,0,4,0,2,4,6,0,0,35,0,8,1,0,0,0,2,14,1,0,0,0,4,16,1,0,0,0,6,32,1,
	0,0,0,8,10,3,2,1,0,9,11,3,4,2,0,10,9,1,0,0,0,11,12,1,0,0,0,12,10,1,0,0,
	0,12,13,1,0,0,0,13,1,1,0,0,0,14,15,3,4,2,0,15,3,1,0,0,0,16,21,3,6,3,0,17,
	18,5,1,0,0,18,20,3,6,3,0,19,17,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,
	1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,24,26,5,2,0,0,25,24,1,0,0,0,25,26,1,
	0,0,0,26,27,1,0,0,0,27,28,5,3,0,0,28,5,1,0,0,0,29,33,5,4,0,0,30,33,5,5,
	0,0,31,33,1,0,0,0,32,29,1,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,7,1,0,0,
	0,4,12,21,25,32];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSVParser.__ATN) {
			CSVParser.__ATN = new ATNDeserializer().deserialize(CSVParser._serializedATN);
		}

		return CSVParser.__ATN;
	}


	static DecisionsToDFA = CSVParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: CSVParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header(): HeaderContext {
		return this.getTypedRuleContext(HeaderContext, 0) as HeaderContext;
	}
	public row_list(): RowContext[] {
		return this.getTypedRuleContexts(RowContext) as RowContext[];
	}
	public row(i: number): RowContext {
		return this.getTypedRuleContext(RowContext, i) as RowContext;
	}
    public get ruleIndex(): number {
    	return CSVParser.RULE_file;
	}
	public enterRule(listener: CSVListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: CSVListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	constructor(parser?: CSVParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public row(): RowContext {
		return this.getTypedRuleContext(RowContext, 0) as RowContext;
	}
    public get ruleIndex(): number {
    	return CSVParser.RULE_header;
	}
	public enterRule(listener: CSVListener): void {
	    if(listener.enterHeader) {
	 		listener.enterHeader(this);
		}
	}
	public exitRule(listener: CSVListener): void {
	    if(listener.exitHeader) {
	 		listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	constructor(parser?: CSVParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
    public get ruleIndex(): number {
    	return CSVParser.RULE_row;
	}
	public enterRule(listener: CSVListener): void {
	    if(listener.enterRow) {
	 		listener.enterRow(this);
		}
	}
	public exitRule(listener: CSVListener): void {
	    if(listener.exitRow) {
	 		listener.exitRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitRow) {
			return visitor.visitRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: CSVParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT(): TerminalNode {
		return this.getToken(CSVParser.TEXT, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(CSVParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return CSVParser.RULE_field;
	}
	public enterRule(listener: CSVListener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: CSVListener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
