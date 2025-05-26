// Generated from g:/Thesis/programming/Test/src/examples/CSV/CSV.g4 by ANTLR 4.13.2
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
export default class CSVLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly TEXT = 4;
	public static readonly STRING = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'\\r'", "'\\n'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "TEXT", "STRING" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "TEXT", "STRING",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, CSVLexer._ATN, CSVLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "CSV.g4"; }

	public get literalNames(): (string | null)[] { return CSVLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return CSVLexer.symbolicNames; }
	public get ruleNames(): string[] { return CSVLexer.ruleNames; }

	public get serializedATN(): number[] { return CSVLexer._serializedATN; }

	public get channelNames(): string[] { return CSVLexer.channelNames; }

	public get modeNames(): string[] { return CSVLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,5,33,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,1,1,1,1,2,1,2,1,3,4,3,19,8,
	3,11,3,12,3,20,1,4,1,4,1,4,1,4,5,4,27,8,4,10,4,12,4,30,9,4,1,4,1,4,0,0,
	5,1,1,3,2,5,3,7,4,9,5,1,0,2,4,0,10,10,13,13,34,34,44,44,1,0,34,34,35,0,
	1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,
	3,13,1,0,0,0,5,15,1,0,0,0,7,18,1,0,0,0,9,22,1,0,0,0,11,12,5,44,0,0,12,2,
	1,0,0,0,13,14,5,13,0,0,14,4,1,0,0,0,15,16,5,10,0,0,16,6,1,0,0,0,17,19,8,
	0,0,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,8,1,0,
	0,0,22,28,5,34,0,0,23,24,5,34,0,0,24,27,5,34,0,0,25,27,8,1,0,0,26,23,1,
	0,0,0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,31,1,0,
	0,0,30,28,1,0,0,0,31,32,5,34,0,0,32,10,1,0,0,0,4,0,20,26,28,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSVLexer.__ATN) {
			CSVLexer.__ATN = new ATNDeserializer().deserialize(CSVLexer._serializedATN);
		}

		return CSVLexer.__ATN;
	}


	static DecisionsToDFA = CSVLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}