// Generated from g:/Thesis/programming/Test/src/starter/ArrayInit.g4 by ANTLR 4.13.2
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
import ArrayInitListener from "./ArrayInitListener.js";
import ArrayInitVisitor from "./ArrayInitVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ArrayInitParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly INT = 4;
	public static readonly WS = 5;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_init = 0;
	public static readonly RULE_value = 1;
	public static readonly literalNames: (string | null)[] = [ null, "'{'", 
                                                            "','", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "INT", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"init", "value",
	];
	public get grammarFileName(): string { return "ArrayInit.g4"; }
	public get literalNames(): (string | null)[] { return ArrayInitParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ArrayInitParser.symbolicNames; }
	public get ruleNames(): string[] { return ArrayInitParser.ruleNames; }
	public get serializedATN(): number[] { return ArrayInitParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ArrayInitParser._ATN, ArrayInitParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public init(): InitContext {
		let localctx: InitContext = new InitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 4;
			this.match(ArrayInitParser.T__0);
			this.state = 5;
			this.value();
			this.state = 10;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 6;
				this.match(ArrayInitParser.T__1);
				this.state = 7;
				this.value();
				}
				}
				this.state = 12;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 13;
			this.match(ArrayInitParser.T__2);
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
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ArrayInitParser.RULE_value);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 15;
				this.init();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 16;
				this.match(ArrayInitParser.INT);
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

	public static readonly _serializedATN: number[] = [4,1,5,20,2,0,7,0,2,1,
	7,1,1,0,1,0,1,0,1,0,5,0,9,8,0,10,0,12,0,12,9,0,1,0,1,0,1,1,1,1,3,1,18,8,
	1,1,1,0,0,2,0,2,0,0,19,0,4,1,0,0,0,2,17,1,0,0,0,4,5,5,1,0,0,5,10,3,2,1,
	0,6,7,5,2,0,0,7,9,3,2,1,0,8,6,1,0,0,0,9,12,1,0,0,0,10,8,1,0,0,0,10,11,1,
	0,0,0,11,13,1,0,0,0,12,10,1,0,0,0,13,14,5,3,0,0,14,1,1,0,0,0,15,18,3,0,
	0,0,16,18,5,4,0,0,17,15,1,0,0,0,17,16,1,0,0,0,18,3,1,0,0,0,2,10,17];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArrayInitParser.__ATN) {
			ArrayInitParser.__ATN = new ATNDeserializer().deserialize(ArrayInitParser._serializedATN);
		}

		return ArrayInitParser.__ATN;
	}


	static DecisionsToDFA = ArrayInitParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class InitContext extends ParserRuleContext {
	constructor(parser?: ArrayInitParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
    public get ruleIndex(): number {
    	return ArrayInitParser.RULE_init;
	}
	public enterRule(listener: ArrayInitListener): void {
	    if(listener.enterInit) {
	 		listener.enterInit(this);
		}
	}
	public exitRule(listener: ArrayInitListener): void {
	    if(listener.exitInit) {
	 		listener.exitInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArrayInitVisitor<Result>): Result {
		if (visitor.visitInit) {
			return visitor.visitInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: ArrayInitParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public init(): InitContext {
		return this.getTypedRuleContext(InitContext, 0) as InitContext;
	}
	public INT(): TerminalNode {
		return this.getToken(ArrayInitParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return ArrayInitParser.RULE_value;
	}
	public enterRule(listener: ArrayInitListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: ArrayInitListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArrayInitVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
