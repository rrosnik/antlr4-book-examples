// Generated from g:/Thesis/programming/Test/src/tour/Data/Data.g4 by ANTLR 4.13.2
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
import DataListener from "./DataListener.js";
import DataVisitor from "./DataVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class DataParser extends Parser {
	public static readonly INT = 1;
	public static readonly WS = 2;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_sequence = 2;
	public static readonly literalNames: (string | null)[] = [  ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INT", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "group", "sequence",
	];
	public get grammarFileName(): string { return "Data.g4"; }
	public get literalNames(): (string | null)[] { return DataParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DataParser.symbolicNames; }
	public get ruleNames(): string[] { return DataParser.ruleNames; }
	public get serializedATN(): number[] { return DataParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DataParser._ATN, DataParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DataParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.group();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
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
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DataParser.RULE_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 11;
			localctx._INT = this.match(DataParser.INT);
			this.state = 12;
			this.sequence((localctx._INT != null ? Number(localctx._INT.text) : 0));
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
	public sequence(n: int): SequenceContext {
		let localctx: SequenceContext = new SequenceContext(this, this._ctx, this.state, n);
		this.enterRule(localctx, 4, DataParser.RULE_sequence);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 14;
					if (!(localctx.i<=localctx.n)) {
						throw this.createFailedPredicateException("$i<=$n");
					}
					this.state = 15;
					this.match(DataParser.INT);
					localctx.i++;
					}
					}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.sequence_sempred(localctx as SequenceContext, predIndex);
		}
		return true;
	}
	private sequence_sempred(localctx: SequenceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return localctx.i<=localctx.n;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,2,23,2,0,7,0,2,1,
	7,1,2,2,7,2,1,0,4,0,8,8,0,11,0,12,0,9,1,1,1,1,1,1,1,2,1,2,1,2,5,2,18,8,
	2,10,2,12,2,21,9,2,1,2,0,0,3,0,2,4,0,0,21,0,7,1,0,0,0,2,11,1,0,0,0,4,19,
	1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,
	1,1,0,0,0,11,12,5,1,0,0,12,13,3,4,2,0,13,3,1,0,0,0,14,15,4,2,0,1,15,16,
	5,1,0,0,16,18,6,2,-1,0,17,14,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,
	1,0,0,0,20,5,1,0,0,0,21,19,1,0,0,0,2,9,19];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DataParser.__ATN) {
			DataParser.__ATN = new ATNDeserializer().deserialize(DataParser._serializedATN);
		}

		return DataParser.__ATN;
	}


	static DecisionsToDFA = DataParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: DataParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public group_list(): GroupContext[] {
		return this.getTypedRuleContexts(GroupContext) as GroupContext[];
	}
	public group(i: number): GroupContext {
		return this.getTypedRuleContext(GroupContext, i) as GroupContext;
	}
    public get ruleIndex(): number {
    	return DataParser.RULE_file;
	}
	public enterRule(listener: DataListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: DataListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DataVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public _INT!: Token;
	constructor(parser?: DataParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(DataParser.INT, 0);
	}
	public sequence(): SequenceContext {
		return this.sequence();
	}
    public get ruleIndex(): number {
    	return DataParser.RULE_group;
	}
	public enterRule(listener: DataListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: DataListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DataVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public n: int;
	public i: int = 1;;
	constructor(parser: DataParser, parent: ParserRuleContext, invokingState: number, n: int) {
		super(parent, invokingState);
    	this.parser = parser;
        this.n = n;
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(DataParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(DataParser.INT, i);
	}
    public get ruleIndex(): number {
    	return DataParser.RULE_sequence;
	}
	public enterRule(listener: DataListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: DataListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DataVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
