// Generated from g:/Thesis/programming/Test/src/tour/Data/Data.g4 by ANTLR 4.13.2
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
export default class DataLexer extends Lexer {
	public static readonly INT = 1;
	public static readonly WS = 2;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [  ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INT", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"INT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, DataLexer._ATN, DataLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Data.g4"; }

	public get literalNames(): (string | null)[] { return DataLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return DataLexer.symbolicNames; }
	public get ruleNames(): string[] { return DataLexer.ruleNames; }

	public get serializedATN(): number[] { return DataLexer._serializedATN; }

	public get channelNames(): string[] { return DataLexer.channelNames; }

	public get modeNames(): string[] { return DataLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,2,17,6,-1,2,0,7,
	0,2,1,7,1,1,0,4,0,7,8,0,11,0,12,0,8,1,1,4,1,12,8,1,11,1,12,1,13,1,1,1,1,
	0,0,2,1,1,3,2,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,18,0,1,1,0,0,0,0,3,1,
	0,0,0,1,6,1,0,0,0,3,11,1,0,0,0,5,7,7,0,0,0,6,5,1,0,0,0,7,8,1,0,0,0,8,6,
	1,0,0,0,8,9,1,0,0,0,9,2,1,0,0,0,10,12,7,1,0,0,11,10,1,0,0,0,12,13,1,0,0,
	0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,0,0,15,16,6,1,0,0,16,4,1,0,0,0,
	3,0,8,13,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DataLexer.__ATN) {
			DataLexer.__ATN = new ATNDeserializer().deserialize(DataLexer._serializedATN);
		}

		return DataLexer.__ATN;
	}


	static DecisionsToDFA = DataLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}