// Generated from g:/Thesis/programming/Test/src/tour/ExprWithClear/Expr.g4 by ANTLR 4.13.2
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
	public static readonly T__3 = 4;
	public static readonly ID = 5;
	public static readonly INT = 6;
	public static readonly NEWLINE = 7;
	public static readonly WS = 8;
	public static readonly MUL = 9;
	public static readonly DIV = 10;
	public static readonly ADD = 11;
	public static readonly SUB = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "'clear'", "'('", 
                                                            "')'", null, 
                                                            null, null, 
                                                            null, "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "INT", "NEWLINE", 
                                                             "WS", "MUL", 
                                                             "DIV", "ADD", 
                                                             "SUB" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "ID", "INT", "NEWLINE", "WS", "MUL", "DIV", 
		"ADD", "SUB",
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

	public static readonly _serializedATN: number[] = [4,0,12,67,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,
	4,4,4,39,8,4,11,4,12,4,40,1,5,4,5,44,8,5,11,5,12,5,45,1,6,3,6,49,8,6,1,
	6,1,6,1,7,4,7,54,8,7,11,7,12,7,55,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,
	1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,
	0,3,2,0,65,90,97,122,1,0,48,57,2,0,9,9,32,32,70,0,1,1,0,0,0,0,3,1,0,0,0,
	0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
	0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,
	27,1,0,0,0,5,33,1,0,0,0,7,35,1,0,0,0,9,38,1,0,0,0,11,43,1,0,0,0,13,48,1,
	0,0,0,15,53,1,0,0,0,17,59,1,0,0,0,19,61,1,0,0,0,21,63,1,0,0,0,23,65,1,0,
	0,0,25,26,5,61,0,0,26,2,1,0,0,0,27,28,5,99,0,0,28,29,5,108,0,0,29,30,5,
	101,0,0,30,31,5,97,0,0,31,32,5,114,0,0,32,4,1,0,0,0,33,34,5,40,0,0,34,6,
	1,0,0,0,35,36,5,41,0,0,36,8,1,0,0,0,37,39,7,0,0,0,38,37,1,0,0,0,39,40,1,
	0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,10,1,0,0,0,42,44,7,1,0,0,43,42,1,0,
	0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,12,1,0,0,0,47,49,5,13,
	0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,10,0,0,51,14,1,0,
	0,0,52,54,7,2,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,
	0,56,57,1,0,0,0,57,58,6,7,0,0,58,16,1,0,0,0,59,60,5,42,0,0,60,18,1,0,0,
	0,61,62,5,47,0,0,62,20,1,0,0,0,63,64,5,43,0,0,64,22,1,0,0,0,65,66,5,45,
	0,0,66,24,1,0,0,0,5,0,40,45,48,55,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprLexer.__ATN) {
			ExprLexer.__ATN = new ATNDeserializer().deserialize(ExprLexer._serializedATN);
		}

		return ExprLexer.__ATN;
	}


	static DecisionsToDFA = ExprLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}