// Generated from g:/Thesis/programming/Test/src/tour/XMLLexer/XMLLexer.g4 by ANTLR 4.13.2
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
export default class XMLLexer extends Lexer {
	public static readonly OPEN = 1;
	public static readonly COMMENT = 2;
	public static readonly EntityRef = 3;
	public static readonly TEXT = 4;
	public static readonly CLOSE = 5;
	public static readonly SLASH_CLOSE = 6;
	public static readonly EQUALS = 7;
	public static readonly STRING = 8;
	public static readonly SlashName = 9;
	public static readonly Name = 10;
	public static readonly S = 11;
	public static readonly EOF = Token.EOF;
	public static readonly INSIDE = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'<'", 
                                                            null, null, 
                                                            null, "'>'", 
                                                            "'/>'", "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OPEN", 
                                                             "COMMENT", 
                                                             "EntityRef", 
                                                             "TEXT", "CLOSE", 
                                                             "SLASH_CLOSE", 
                                                             "EQUALS", "STRING", 
                                                             "SlashName", 
                                                             "Name", "S" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "INSIDE", ];

	public static readonly ruleNames: string[] = [
		"OPEN", "COMMENT", "EntityRef", "TEXT", "CLOSE", "SLASH_CLOSE", "EQUALS", 
		"STRING", "SlashName", "Name", "S", "ALPHA", "DIGIT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, XMLLexer._ATN, XMLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "XMLLexer.g4"; }

	public get literalNames(): (string | null)[] { return XMLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return XMLLexer.symbolicNames; }
	public get ruleNames(): string[] { return XMLLexer.ruleNames; }

	public get serializedATN(): number[] { return XMLLexer._serializedATN; }

	public get channelNames(): string[] { return XMLLexer.channelNames; }

	public get modeNames(): string[] { return XMLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,11,101,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,
	1,1,1,5,1,39,8,1,10,1,12,1,42,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,4,2,52,
	8,2,11,2,12,2,53,1,2,1,2,1,3,4,3,59,8,3,11,3,12,3,60,1,4,1,4,1,4,1,4,1,
	5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,5,7,76,8,7,10,7,12,7,79,9,7,1,7,1,7,1,
	8,1,8,1,8,1,9,1,9,1,9,5,9,89,8,9,10,9,12,9,92,9,9,1,10,1,10,1,10,1,10,1,
	11,1,11,1,12,1,12,2,40,77,0,13,2,1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,18,9,
	20,10,22,11,24,0,26,0,2,0,1,5,1,0,97,122,2,0,38,38,60,60,3,0,9,10,13,13,
	32,32,2,0,65,90,97,122,1,0,48,57,103,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,
	0,0,8,1,0,0,0,1,10,1,0,0,0,1,12,1,0,0,0,1,14,1,0,0,0,1,16,1,0,0,0,1,18,
	1,0,0,0,1,20,1,0,0,0,1,22,1,0,0,0,2,28,1,0,0,0,4,32,1,0,0,0,6,49,1,0,0,
	0,8,58,1,0,0,0,10,62,1,0,0,0,12,66,1,0,0,0,14,71,1,0,0,0,16,73,1,0,0,0,
	18,82,1,0,0,0,20,85,1,0,0,0,22,93,1,0,0,0,24,97,1,0,0,0,26,99,1,0,0,0,28,
	29,5,60,0,0,29,30,1,0,0,0,30,31,6,0,0,0,31,3,1,0,0,0,32,33,5,60,0,0,33,
	34,5,33,0,0,34,35,5,45,0,0,35,36,5,45,0,0,36,40,1,0,0,0,37,39,9,0,0,0,38,
	37,1,0,0,0,39,42,1,0,0,0,40,41,1,0,0,0,40,38,1,0,0,0,41,43,1,0,0,0,42,40,
	1,0,0,0,43,44,5,45,0,0,44,45,5,45,0,0,45,46,5,62,0,0,46,47,1,0,0,0,47,48,
	6,1,1,0,48,5,1,0,0,0,49,51,5,38,0,0,50,52,7,0,0,0,51,50,1,0,0,0,52,53,1,
	0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,59,0,0,56,7,1,0,
	0,0,57,59,8,1,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,
	0,61,9,1,0,0,0,62,63,5,62,0,0,63,64,1,0,0,0,64,65,6,4,2,0,65,11,1,0,0,0,
	66,67,5,47,0,0,67,68,5,62,0,0,68,69,1,0,0,0,69,70,6,5,2,0,70,13,1,0,0,0,
	71,72,5,61,0,0,72,15,1,0,0,0,73,77,5,34,0,0,74,76,9,0,0,0,75,74,1,0,0,0,
	76,79,1,0,0,0,77,78,1,0,0,0,77,75,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,
	81,5,34,0,0,81,17,1,0,0,0,82,83,5,47,0,0,83,84,3,20,9,0,84,19,1,0,0,0,85,
	90,3,24,11,0,86,89,3,24,11,0,87,89,3,26,12,0,88,86,1,0,0,0,88,87,1,0,0,
	0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,21,1,0,0,0,92,90,1,0,0,0,
	93,94,7,2,0,0,94,95,1,0,0,0,95,96,6,10,1,0,96,23,1,0,0,0,97,98,7,3,0,0,
	98,25,1,0,0,0,99,100,7,4,0,0,100,27,1,0,0,0,8,0,1,40,53,60,77,88,90,3,5,
	1,0,6,0,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XMLLexer.__ATN) {
			XMLLexer.__ATN = new ATNDeserializer().deserialize(XMLLexer._serializedATN);
		}

		return XMLLexer.__ATN;
	}


	static DecisionsToDFA = XMLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}