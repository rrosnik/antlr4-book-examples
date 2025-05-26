// Generated from g:/Thesis/programming/Test/src/tour/Expr/Expr.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ExprLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly ID = 4;
	public static readonly INT = 5;
	public static readonly NEWLINE = 6;
	public static readonly WS = 7;
	public static readonly MUL = 8;
	public static readonly DIV = 9;
	public static readonly ADD = 10;
	public static readonly SUB = 11;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "'('", "')'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "ID", "INT", 
                                                             "NEWLINE", 
                                                             "WS", "MUL", 
                                                             "DIV", "ADD", 
                                                             "SUB" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "ID", "INT", "NEWLINE", "WS", "MUL", "DIV", "ADD", 
		"SUB",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ExprLexer._ATN, ExprLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Expr.g4"; }

	public get literalNames(): (string | null)[] { return ExprLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ExprLexer.symbolicNames; }
	public get ruleNames(): string[] { return ExprLexer.ruleNames; }

	public get serializedATN(): number[] { return ExprLexer._serializedATN; }

	public get channelNames(): string[] { return ExprLexer.channelNames; }

	public get modeNames(): string[] { return ExprLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,11,59,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,1,0,1,0,1,1,1,1,1,2,1,2,1,3,4,3,31,8,3,11,3,12,3,32,1,4,4,4,
	36,8,4,11,4,12,4,37,1,5,3,5,41,8,5,1,5,1,5,1,6,4,6,46,8,6,11,6,12,6,47,
	1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,
	6,13,7,15,8,17,9,19,10,21,11,1,0,3,2,0,65,90,97,122,1,0,48,57,2,0,9,9,32,
	32,62,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,1,23,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,30,1,0,0,0,9,35,1,0,0,0,11,40,
	1,0,0,0,13,45,1,0,0,0,15,51,1,0,0,0,17,53,1,0,0,0,19,55,1,0,0,0,21,57,1,
	0,0,0,23,24,5,61,0,0,24,2,1,0,0,0,25,26,5,40,0,0,26,4,1,0,0,0,27,28,5,41,
	0,0,28,6,1,0,0,0,29,31,7,0,0,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,1,0,0,
	0,32,33,1,0,0,0,33,8,1,0,0,0,34,36,7,1,0,0,35,34,1,0,0,0,36,37,1,0,0,0,
	37,35,1,0,0,0,37,38,1,0,0,0,38,10,1,0,0,0,39,41,5,13,0,0,40,39,1,0,0,0,
	40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,10,0,0,43,12,1,0,0,0,44,46,7,2,0,0,
	45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,
	50,6,6,0,0,50,14,1,0,0,0,51,52,5,42,0,0,52,16,1,0,0,0,53,54,5,47,0,0,54,
	18,1,0,0,0,55,56,5,43,0,0,56,20,1,0,0,0,57,58,5,45,0,0,58,22,1,0,0,0,5,
	0,32,37,40,47,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprLexer.__ATN) {
			ExprLexer.__ATN = new ATNDeserializer().deserialize(ExprLexer._serializedATN);
		}

		return ExprLexer.__ATN;
	}


	static DecisionsToDFA = ExprLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}