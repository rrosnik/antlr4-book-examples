// Generated from g:/Thesis/programming/Test/src/tour/Demo/Java.g4 by ANTLR 4.13.2
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
import JavaListener from "./JavaListener.js";
import JavaVisitor from "./JavaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JavaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly HexLiteral = 90;
	public static readonly DecimalLiteral = 91;
	public static readonly OctalLiteral = 92;
	public static readonly FloatingPointLiteral = 93;
	public static readonly CharacterLiteral = 94;
	public static readonly StringLiteral = 95;
	public static readonly ENUM = 96;
	public static readonly ASSERT = 97;
	public static readonly Identifier = 98;
	public static readonly COMMENT = 99;
	public static readonly WS = 100;
	public static readonly LINE_COMMENT = 101;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_classDeclaration = 4;
	public static readonly RULE_enumDeclaration = 5;
	public static readonly RULE_interfaceDeclaration = 6;
	public static readonly RULE_classOrInterfaceModifier = 7;
	public static readonly RULE_modifiers = 8;
	public static readonly RULE_typeParameters = 9;
	public static readonly RULE_typeParameter = 10;
	public static readonly RULE_typeBound = 11;
	public static readonly RULE_enumBody = 12;
	public static readonly RULE_enumConstants = 13;
	public static readonly RULE_enumConstant = 14;
	public static readonly RULE_enumBodyDeclarations = 15;
	public static readonly RULE_normalInterfaceDeclaration = 16;
	public static readonly RULE_typeList = 17;
	public static readonly RULE_classBody = 18;
	public static readonly RULE_interfaceBody = 19;
	public static readonly RULE_classBodyDeclaration = 20;
	public static readonly RULE_member = 21;
	public static readonly RULE_methodDeclaration = 22;
	public static readonly RULE_methodDeclarationRest = 23;
	public static readonly RULE_genericMethodDeclaration = 24;
	public static readonly RULE_fieldDeclaration = 25;
	public static readonly RULE_constructorDeclaration = 26;
	public static readonly RULE_interfaceBodyDeclaration = 27;
	public static readonly RULE_interfaceMemberDecl = 28;
	public static readonly RULE_interfaceMethodOrFieldDecl = 29;
	public static readonly RULE_interfaceMethodOrFieldRest = 30;
	public static readonly RULE_voidMethodDeclaratorRest = 31;
	public static readonly RULE_interfaceMethodDeclaratorRest = 32;
	public static readonly RULE_interfaceGenericMethodDecl = 33;
	public static readonly RULE_voidInterfaceMethodDeclaratorRest = 34;
	public static readonly RULE_constantDeclarator = 35;
	public static readonly RULE_variableDeclarators = 36;
	public static readonly RULE_variableDeclarator = 37;
	public static readonly RULE_constantDeclaratorsRest = 38;
	public static readonly RULE_constantDeclaratorRest = 39;
	public static readonly RULE_variableDeclaratorId = 40;
	public static readonly RULE_variableInitializer = 41;
	public static readonly RULE_arrayInitializer = 42;
	public static readonly RULE_modifier = 43;
	public static readonly RULE_packageOrTypeName = 44;
	public static readonly RULE_enumConstantName = 45;
	public static readonly RULE_typeName = 46;
	public static readonly RULE_type = 47;
	public static readonly RULE_classOrInterfaceType = 48;
	public static readonly RULE_primitiveType = 49;
	public static readonly RULE_variableModifier = 50;
	public static readonly RULE_typeArguments = 51;
	public static readonly RULE_typeArgument = 52;
	public static readonly RULE_qualifiedNameList = 53;
	public static readonly RULE_formalParameters = 54;
	public static readonly RULE_formalParameterDecls = 55;
	public static readonly RULE_formalParameterDeclsRest = 56;
	public static readonly RULE_methodBody = 57;
	public static readonly RULE_constructorBody = 58;
	public static readonly RULE_explicitConstructorInvocation = 59;
	public static readonly RULE_qualifiedName = 60;
	public static readonly RULE_literal = 61;
	public static readonly RULE_integerLiteral = 62;
	public static readonly RULE_booleanLiteral = 63;
	public static readonly RULE_annotations = 64;
	public static readonly RULE_annotation = 65;
	public static readonly RULE_annotationName = 66;
	public static readonly RULE_elementValuePairs = 67;
	public static readonly RULE_elementValuePair = 68;
	public static readonly RULE_elementValue = 69;
	public static readonly RULE_elementValueArrayInitializer = 70;
	public static readonly RULE_annotationTypeDeclaration = 71;
	public static readonly RULE_annotationTypeBody = 72;
	public static readonly RULE_annotationTypeElementDeclaration = 73;
	public static readonly RULE_annotationTypeElementRest = 74;
	public static readonly RULE_annotationMethodOrConstantRest = 75;
	public static readonly RULE_annotationMethodRest = 76;
	public static readonly RULE_annotationConstantRest = 77;
	public static readonly RULE_defaultValue = 78;
	public static readonly RULE_block = 79;
	public static readonly RULE_blockStatement = 80;
	public static readonly RULE_localVariableDeclarationStatement = 81;
	public static readonly RULE_localVariableDeclaration = 82;
	public static readonly RULE_variableModifiers = 83;
	public static readonly RULE_statement = 84;
	public static readonly RULE_catches = 85;
	public static readonly RULE_catchClause = 86;
	public static readonly RULE_formalParameter = 87;
	public static readonly RULE_switchBlock = 88;
	public static readonly RULE_switchBlockStatementGroup = 89;
	public static readonly RULE_switchLabel = 90;
	public static readonly RULE_forControl = 91;
	public static readonly RULE_forInit = 92;
	public static readonly RULE_enhancedForControl = 93;
	public static readonly RULE_forUpdate = 94;
	public static readonly RULE_parExpression = 95;
	public static readonly RULE_expressionList = 96;
	public static readonly RULE_statementExpression = 97;
	public static readonly RULE_constantExpression = 98;
	public static readonly RULE_expression = 99;
	public static readonly RULE_primary = 100;
	public static readonly RULE_creator = 101;
	public static readonly RULE_createdName = 102;
	public static readonly RULE_innerCreator = 103;
	public static readonly RULE_explicitGenericInvocation = 104;
	public static readonly RULE_arrayCreatorRest = 105;
	public static readonly RULE_classCreatorRest = 106;
	public static readonly RULE_nonWildcardTypeArguments = 107;
	public static readonly RULE_arguments = 108;
	public static readonly literalNames: (string | null)[] = [ null, "'package'", 
                                                            "';'", "'import'", 
                                                            "'static'", 
                                                            "'.'", "'*'", 
                                                            "'class'", "'extends'", 
                                                            "'implements'", 
                                                            "'public'", 
                                                            "'protected'", 
                                                            "'private'", 
                                                            "'abstract'", 
                                                            "'final'", "'strictfp'", 
                                                            "'<'", "','", 
                                                            "'>'", "'&'", 
                                                            "'{'", "'}'", 
                                                            "'interface'", 
                                                            "'['", "']'", 
                                                            "'void'", "'throws'", 
                                                            "'='", "'native'", 
                                                            "'synchronized'", 
                                                            "'transient'", 
                                                            "'volatile'", 
                                                            "'boolean'", 
                                                            "'char'", "'byte'", 
                                                            "'short'", "'int'", 
                                                            "'long'", "'float'", 
                                                            "'double'", 
                                                            "'?'", "'super'", 
                                                            "'('", "')'", 
                                                            "'...'", "'this'", 
                                                            "'null'", "'true'", 
                                                            "'false'", "'@'", 
                                                            "'default'", 
                                                            "':'", "'if'", 
                                                            "'else'", "'for'", 
                                                            "'while'", "'do'", 
                                                            "'try'", "'finally'", 
                                                            "'switch'", 
                                                            "'return'", 
                                                            "'throw'", "'break'", 
                                                            "'continue'", 
                                                            "'catch'", "'case'", 
                                                            "'new'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'~'", 
                                                            "'!'", "'/'", 
                                                            "'%'", "'instanceof'", 
                                                            "'=='", "'!='", 
                                                            "'^'", "'|'", 
                                                            "'&&'", "'||'", 
                                                            "'^='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'%='", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'enum'", "'assert'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "HexLiteral", 
                                                             "DecimalLiteral", 
                                                             "OctalLiteral", 
                                                             "FloatingPointLiteral", 
                                                             "CharacterLiteral", 
                                                             "StringLiteral", 
                                                             "ENUM", "ASSERT", 
                                                             "Identifier", 
                                                             "COMMENT", 
                                                             "WS", "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"classDeclaration", "enumDeclaration", "interfaceDeclaration", "classOrInterfaceModifier", 
		"modifiers", "typeParameters", "typeParameter", "typeBound", "enumBody", 
		"enumConstants", "enumConstant", "enumBodyDeclarations", "normalInterfaceDeclaration", 
		"typeList", "classBody", "interfaceBody", "classBodyDeclaration", "member", 
		"methodDeclaration", "methodDeclarationRest", "genericMethodDeclaration", 
		"fieldDeclaration", "constructorDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDecl", "interfaceMethodOrFieldDecl", "interfaceMethodOrFieldRest", 
		"voidMethodDeclaratorRest", "interfaceMethodDeclaratorRest", "interfaceGenericMethodDecl", 
		"voidInterfaceMethodDeclaratorRest", "constantDeclarator", "variableDeclarators", 
		"variableDeclarator", "constantDeclaratorsRest", "constantDeclaratorRest", 
		"variableDeclaratorId", "variableInitializer", "arrayInitializer", "modifier", 
		"packageOrTypeName", "enumConstantName", "typeName", "type", "classOrInterfaceType", 
		"primitiveType", "variableModifier", "typeArguments", "typeArgument", 
		"qualifiedNameList", "formalParameters", "formalParameterDecls", "formalParameterDeclsRest", 
		"methodBody", "constructorBody", "explicitConstructorInvocation", "qualifiedName", 
		"literal", "integerLiteral", "booleanLiteral", "annotations", "annotation", 
		"annotationName", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "block", 
		"blockStatement", "localVariableDeclarationStatement", "localVariableDeclaration", 
		"variableModifiers", "statement", "catches", "catchClause", "formalParameter", 
		"switchBlock", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"forInit", "enhancedForControl", "forUpdate", "parExpression", "expressionList", 
		"statementExpression", "constantExpression", "expression", "primary", 
		"creator", "createdName", "innerCreator", "explicitGenericInvocation", 
		"arrayCreatorRest", "classCreatorRest", "nonWildcardTypeArguments", "arguments",
	];
	public get grammarFileName(): string { return "Java.g4"; }
	public get literalNames(): (string | null)[] { return JavaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JavaParser.symbolicNames; }
	public get ruleNames(): string[] { return JavaParser.ruleNames; }
	public get serializedATN(): number[] { return JavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JavaParser._ATN, JavaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 218;
				this.packageDeclaration();
				}
			}

			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 221;
				this.importDeclaration();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4258964) !== 0) || _la===49 || _la===96) {
				{
				{
				this.state = 227;
				this.typeDeclaration();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this.match(JavaParser.EOF);
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
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JavaParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
			this.match(JavaParser.T__0);
			this.state = 236;
			this.qualifiedName();
			this.state = 237;
			this.match(JavaParser.T__1);
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
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.match(JavaParser.T__2);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 240;
				this.match(JavaParser.T__3);
				}
			}

			this.state = 243;
			this.qualifiedName();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 244;
				this.match(JavaParser.T__4);
				this.state = 245;
				this.match(JavaParser.T__5);
				}
			}

			this.state = 248;
			this.match(JavaParser.T__1);
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
	public typeDeclaration(): TypeDeclarationContext {
		let localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JavaParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 7:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 22:
			case 49:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 250;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 7:
					{
					this.state = 256;
					this.classDeclaration();
					}
					break;
				case 22:
				case 49:
					{
					this.state = 257;
					this.interfaceDeclaration();
					}
					break;
				case 96:
					{
					this.state = 258;
					this.enumDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 261;
				this.match(JavaParser.T__1);
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
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.match(JavaParser.T__6);
			this.state = 265;
			this.match(JavaParser.Identifier);
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 266;
				this.typeParameters();
				}
			}

			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 269;
				this.match(JavaParser.T__7);
				this.state = 270;
				this.type_();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 273;
				this.match(JavaParser.T__8);
				this.state = 274;
				this.typeList();
				}
			}

			this.state = 277;
			this.classBody();
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
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.match(JavaParser.ENUM);
			this.state = 280;
			this.match(JavaParser.Identifier);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 281;
				this.match(JavaParser.T__8);
				this.state = 282;
				this.typeList();
				}
			}

			this.state = 285;
			this.enumBody();
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
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JavaParser.RULE_interfaceDeclaration);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.normalInterfaceDeclaration();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 288;
				this.annotationTypeDeclaration();
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
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 291;
				this.annotation();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 292;
				this.match(JavaParser.T__9);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 293;
				this.match(JavaParser.T__10);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 294;
				this.match(JavaParser.T__11);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 295;
				this.match(JavaParser.T__12);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 296;
				this.match(JavaParser.T__3);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 297;
				this.match(JavaParser.T__13);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 298;
				this.match(JavaParser.T__14);
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
	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		let localctx: ModifiersContext = new ModifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JavaParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.modifier();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(JavaParser.T__15);
			this.state = 308;
			this.typeParameter();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 309;
				this.match(JavaParser.T__16);
				this.state = 310;
				this.typeParameter();
				}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 316;
			this.match(JavaParser.T__17);
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
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.match(JavaParser.Identifier);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 319;
				this.match(JavaParser.T__7);
				this.state = 320;
				this.typeBound();
				}
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
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let localctx: TypeBoundContext = new TypeBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
			this.type_();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19) {
				{
				{
				this.state = 324;
				this.match(JavaParser.T__18);
				this.state = 325;
				this.type_();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let localctx: EnumBodyContext = new EnumBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JavaParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.match(JavaParser.T__19);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===98) {
				{
				this.state = 332;
				this.enumConstants();
				}
			}

			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 335;
				this.match(JavaParser.T__16);
				}
			}

			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 338;
				this.enumBodyDeclarations();
				}
			}

			this.state = 341;
			this.match(JavaParser.T__20);
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
	public enumConstants(): EnumConstantsContext {
		let localctx: EnumConstantsContext = new EnumConstantsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			this.enumConstant();
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 344;
					this.match(JavaParser.T__16);
					this.state = 345;
					this.enumConstant();
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
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
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let localctx: EnumConstantContext = new EnumConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 351;
				this.annotations();
				}
			}

			this.state = 354;
			this.match(JavaParser.Identifier);
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 355;
				this.arguments();
				}
			}

			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 358;
				this.classBody();
				}
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
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 361;
			this.match(JavaParser.T__1);
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4065459348) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131327) !== 0) || _la===98) {
				{
				{
				this.state = 362;
				this.classBodyDeclaration();
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JavaParser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this.match(JavaParser.T__21);
			this.state = 369;
			this.match(JavaParser.Identifier);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 370;
				this.typeParameters();
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 373;
				this.match(JavaParser.T__7);
				this.state = 374;
				this.typeList();
				}
			}

			this.state = 377;
			this.interfaceBody();
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
	public typeList(): TypeListContext {
		let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 379;
			this.type_();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 380;
				this.match(JavaParser.T__16);
				this.state = 381;
				this.type_();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let localctx: ClassBodyContext = new ClassBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 387;
			this.match(JavaParser.T__19);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4065459348) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131327) !== 0) || _la===98) {
				{
				{
				this.state = 388;
				this.classBodyDeclaration();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 394;
			this.match(JavaParser.T__20);
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
	public interfaceBody(): InterfaceBodyContext {
		let localctx: InterfaceBodyContext = new InterfaceBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.match(JavaParser.T__19);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064410772) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131327) !== 0) || _la===98) {
				{
				{
				this.state = 397;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 403;
			this.match(JavaParser.T__20);
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
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this.match(JavaParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 406;
					this.match(JavaParser.T__3);
					}
				}

				this.state = 409;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 410;
				this.modifiers();
				this.state = 411;
				this.member();
				}
				break;
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
	public member(): MemberContext {
		let localctx: MemberContext = new MemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, JavaParser.RULE_member);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 415;
				this.genericMethodDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 416;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 417;
				this.fieldDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 418;
				this.constructorDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 419;
				this.interfaceDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 420;
				this.classDeclaration();
				}
				break;
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
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 423;
				this.type_();
				this.state = 424;
				this.match(JavaParser.Identifier);
				this.state = 425;
				this.formalParameters();
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23) {
					{
					{
					this.state = 426;
					this.match(JavaParser.T__22);
					this.state = 427;
					this.match(JavaParser.T__23);
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 433;
				this.methodDeclarationRest();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 435;
				this.match(JavaParser.T__24);
				this.state = 436;
				this.match(JavaParser.Identifier);
				this.state = 437;
				this.formalParameters();
				this.state = 438;
				this.methodDeclarationRest();
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
	// @RuleVersion(0)
	public methodDeclarationRest(): MethodDeclarationRestContext {
		let localctx: MethodDeclarationRestContext = new MethodDeclarationRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, JavaParser.RULE_methodDeclarationRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 442;
				this.match(JavaParser.T__25);
				this.state = 443;
				this.qualifiedNameList();
				}
			}

			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				{
				this.state = 446;
				this.methodBody();
				}
				break;
			case 2:
				{
				this.state = 447;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 450;
			this.typeParameters();
			this.state = 451;
			this.methodDeclaration();
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
	public fieldDeclaration(): FieldDeclarationContext {
		let localctx: FieldDeclarationContext = new FieldDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.type_();
			this.state = 454;
			this.variableDeclarators();
			this.state = 455;
			this.match(JavaParser.T__1);
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
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 457;
				this.typeParameters();
				}
			}

			this.state = 460;
			this.match(JavaParser.Identifier);
			this.state = 461;
			this.formalParameters();
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 462;
				this.match(JavaParser.T__25);
				this.state = 463;
				this.qualifiedNameList();
				}
			}

			this.state = 466;
			this.constructorBody();
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
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 7:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 22:
			case 25:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 49:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 468;
				this.modifiers();
				this.state = 469;
				this.interfaceMemberDecl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 471;
				this.match(JavaParser.T__1);
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
	// @RuleVersion(0)
	public interfaceMemberDecl(): InterfaceMemberDeclContext {
		let localctx: InterfaceMemberDeclContext = new InterfaceMemberDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, JavaParser.RULE_interfaceMemberDecl);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 474;
				this.interfaceMethodOrFieldDecl();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 475;
				this.interfaceGenericMethodDecl();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 476;
				this.match(JavaParser.T__24);
				this.state = 477;
				this.match(JavaParser.Identifier);
				this.state = 478;
				this.voidInterfaceMethodDeclaratorRest();
				}
				break;
			case 22:
			case 49:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 479;
				this.interfaceDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 480;
				this.classDeclaration();
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
	// @RuleVersion(0)
	public interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext {
		let localctx: InterfaceMethodOrFieldDeclContext = new InterfaceMethodOrFieldDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, JavaParser.RULE_interfaceMethodOrFieldDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 483;
			this.type_();
			this.state = 484;
			this.match(JavaParser.Identifier);
			this.state = 485;
			this.interfaceMethodOrFieldRest();
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
	public interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext {
		let localctx: InterfaceMethodOrFieldRestContext = new InterfaceMethodOrFieldRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, JavaParser.RULE_interfaceMethodOrFieldRest);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
			case 27:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 487;
				this.constantDeclaratorsRest();
				this.state = 488;
				this.match(JavaParser.T__1);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 490;
				this.interfaceMethodDeclaratorRest();
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
	// @RuleVersion(0)
	public voidMethodDeclaratorRest(): VoidMethodDeclaratorRestContext {
		let localctx: VoidMethodDeclaratorRestContext = new VoidMethodDeclaratorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, JavaParser.RULE_voidMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.formalParameters();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 494;
				this.match(JavaParser.T__25);
				this.state = 495;
				this.qualifiedNameList();
				}
			}

			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				{
				this.state = 498;
				this.methodBody();
				}
				break;
			case 2:
				{
				this.state = 499;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext {
		let localctx: InterfaceMethodDeclaratorRestContext = new InterfaceMethodDeclaratorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, JavaParser.RULE_interfaceMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 502;
			this.formalParameters();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23) {
				{
				{
				this.state = 503;
				this.match(JavaParser.T__22);
				this.state = 504;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 510;
				this.match(JavaParser.T__25);
				this.state = 511;
				this.qualifiedNameList();
				}
			}

			this.state = 514;
			this.match(JavaParser.T__1);
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
	public interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext {
		let localctx: InterfaceGenericMethodDeclContext = new InterfaceGenericMethodDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, JavaParser.RULE_interfaceGenericMethodDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 516;
			this.typeParameters();
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				{
				this.state = 517;
				this.type_();
				}
				break;
			case 25:
				{
				this.state = 518;
				this.match(JavaParser.T__24);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 521;
			this.match(JavaParser.Identifier);
			this.state = 522;
			this.interfaceMethodDeclaratorRest();
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
	public voidInterfaceMethodDeclaratorRest(): VoidInterfaceMethodDeclaratorRestContext {
		let localctx: VoidInterfaceMethodDeclaratorRestContext = new VoidInterfaceMethodDeclaratorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, JavaParser.RULE_voidInterfaceMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.formalParameters();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 525;
				this.match(JavaParser.T__25);
				this.state = 526;
				this.qualifiedNameList();
				}
			}

			this.state = 529;
			this.match(JavaParser.T__1);
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
	public constantDeclarator(): ConstantDeclaratorContext {
		let localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, JavaParser.RULE_constantDeclarator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			this.match(JavaParser.Identifier);
			this.state = 532;
			this.constantDeclaratorRest();
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
	public variableDeclarators(): VariableDeclaratorsContext {
		let localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 534;
			this.variableDeclarator();
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 535;
				this.match(JavaParser.T__16);
				this.state = 536;
				this.variableDeclarator();
				}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 542;
			this.variableDeclaratorId();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 543;
				this.match(JavaParser.T__26);
				this.state = 544;
				this.variableInitializer();
				}
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
	// @RuleVersion(0)
	public constantDeclaratorsRest(): ConstantDeclaratorsRestContext {
		let localctx: ConstantDeclaratorsRestContext = new ConstantDeclaratorsRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, JavaParser.RULE_constantDeclaratorsRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 547;
			this.constantDeclaratorRest();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 548;
				this.match(JavaParser.T__16);
				this.state = 549;
				this.constantDeclarator();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		let localctx: ConstantDeclaratorRestContext = new ConstantDeclaratorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, JavaParser.RULE_constantDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23) {
				{
				{
				this.state = 555;
				this.match(JavaParser.T__22);
				this.state = 556;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 562;
			this.match(JavaParser.T__26);
			this.state = 563;
			this.variableInitializer();
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
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 565;
			this.match(JavaParser.Identifier);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23) {
				{
				{
				this.state = 566;
				this.match(JavaParser.T__22);
				this.state = 567;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let localctx: VariableInitializerContext = new VariableInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, JavaParser.RULE_variableInitializer);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 573;
				this.arrayInitializer();
				}
				break;
			case 25:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 41:
			case 42:
			case 45:
			case 46:
			case 47:
			case 48:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 574;
				this.expression(0);
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
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let localctx: ArrayInitializerContext = new ArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 577;
			this.match(JavaParser.T__19);
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 510652449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
				{
				this.state = 578;
				this.variableInitializer();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 579;
						this.match(JavaParser.T__16);
						this.state = 580;
						this.variableInitializer();
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 586;
					this.match(JavaParser.T__16);
					}
				}

				}
			}

			this.state = 591;
			this.match(JavaParser.T__20);
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
	public modifier(): ModifierContext {
		let localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, JavaParser.RULE_modifier);
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 593;
				this.annotation();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 594;
				this.match(JavaParser.T__9);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 595;
				this.match(JavaParser.T__10);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 596;
				this.match(JavaParser.T__11);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 597;
				this.match(JavaParser.T__3);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 598;
				this.match(JavaParser.T__12);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 599;
				this.match(JavaParser.T__13);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 600;
				this.match(JavaParser.T__27);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 601;
				this.match(JavaParser.T__28);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 602;
				this.match(JavaParser.T__29);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 603;
				this.match(JavaParser.T__30);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 604;
				this.match(JavaParser.T__14);
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
	// @RuleVersion(0)
	public packageOrTypeName(): PackageOrTypeNameContext {
		let localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, JavaParser.RULE_packageOrTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 607;
			this.qualifiedName();
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
	public enumConstantName(): EnumConstantNameContext {
		let localctx: EnumConstantNameContext = new EnumConstantNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, JavaParser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this.match(JavaParser.Identifier);
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
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, JavaParser.RULE_typeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 611;
			this.qualifiedName();
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, JavaParser.RULE_type);
		try {
			let _alt: number;
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 613;
				this.classOrInterfaceType();
				this.state = 618;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 614;
						this.match(JavaParser.T__22);
						this.state = 615;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 620;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
				}
				}
				break;
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 621;
				this.primitiveType();
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 622;
						this.match(JavaParser.T__22);
						this.state = 623;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
				}
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
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, JavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 631;
			this.match(JavaParser.Identifier);
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.typeArguments();
				}
				break;
			}
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 635;
					this.match(JavaParser.T__4);
					this.state = 636;
					this.match(JavaParser.Identifier);
					this.state = 638;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 637;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
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
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 645;
			_la = this._input.LA(1);
			if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 255) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let localctx: VariableModifierContext = new VariableModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, JavaParser.RULE_variableModifier);
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 647;
				this.match(JavaParser.T__13);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 648;
				this.annotation();
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
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 651;
			this.match(JavaParser.T__15);
			this.state = 652;
			this.typeArgument();
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 653;
				this.match(JavaParser.T__16);
				this.state = 654;
				this.typeArgument();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this.match(JavaParser.T__17);
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
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 662;
				this.type_();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 663;
				this.match(JavaParser.T__39);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8 || _la===41) {
					{
					this.state = 664;
					_la = this._input.LA(1);
					if(!(_la===8 || _la===41)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 665;
					this.type_();
					}
				}

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
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let localctx: QualifiedNameListContext = new QualifiedNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 670;
			this.qualifiedName();
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 671;
				this.match(JavaParser.T__16);
				this.state = 672;
				this.qualifiedName();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let localctx: FormalParametersContext = new FormalParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 678;
			this.match(JavaParser.T__41);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131327) !== 0) || _la===98) {
				{
				this.state = 679;
				this.formalParameterDecls();
				}
			}

			this.state = 682;
			this.match(JavaParser.T__42);
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
	public formalParameterDecls(): FormalParameterDeclsContext {
		let localctx: FormalParameterDeclsContext = new FormalParameterDeclsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, JavaParser.RULE_formalParameterDecls);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			this.variableModifiers();
			this.state = 685;
			this.type_();
			this.state = 686;
			this.formalParameterDeclsRest();
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
	public formalParameterDeclsRest(): FormalParameterDeclsRestContext {
		let localctx: FormalParameterDeclsRestContext = new FormalParameterDeclsRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, JavaParser.RULE_formalParameterDeclsRest);
		let _la: number;
		try {
			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 688;
				this.variableDeclaratorId();
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 689;
					this.match(JavaParser.T__16);
					this.state = 690;
					this.formalParameterDecls();
					}
				}

				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 693;
				this.match(JavaParser.T__43);
				this.state = 694;
				this.variableDeclaratorId();
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
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let localctx: MethodBodyContext = new MethodBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, JavaParser.RULE_methodBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 697;
			this.block();
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
	public constructorBody(): ConstructorBodyContext {
		let localctx: ConstructorBodyContext = new ConstructorBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, JavaParser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this.match(JavaParser.T__19);
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 700;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 575684740) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4224968447) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3204448383) !== 0) || _la===98) {
				{
				{
				this.state = 703;
				this.blockStatement();
				}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 709;
			this.match(JavaParser.T__20);
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
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, JavaParser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 711;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 714;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===45)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 715;
				this.arguments();
				this.state = 716;
				this.match(JavaParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 718;
				this.primary();
				this.state = 719;
				this.match(JavaParser.T__4);
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 720;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 723;
				this.match(JavaParser.T__40);
				this.state = 724;
				this.arguments();
				this.state = 725;
				this.match(JavaParser.T__1);
				}
				break;
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
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 729;
			this.match(JavaParser.Identifier);
			this.state = 734;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.match(JavaParser.T__4);
					this.state = 731;
					this.match(JavaParser.Identifier);
					}
					}
				}
				this.state = 736;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, JavaParser.RULE_literal);
		try {
			this.state = 743;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
			case 91:
			case 92:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 737;
				this.integerLiteral();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 738;
				this.match(JavaParser.FloatingPointLiteral);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 739;
				this.match(JavaParser.CharacterLiteral);
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 740;
				this.match(JavaParser.StringLiteral);
				}
				break;
			case 47:
			case 48:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 741;
				this.booleanLiteral();
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 742;
				this.match(JavaParser.T__45);
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
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let localctx: IntegerLiteralContext = new IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 745;
			_la = this._input.LA(1);
			if(!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, JavaParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 747;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===48)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	// @RuleVersion(0)
	public annotations(): AnnotationsContext {
		let localctx: AnnotationsContext = new AnnotationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, JavaParser.RULE_annotations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 749;
				this.annotation();
				}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===49);
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
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 754;
			this.match(JavaParser.T__48);
			this.state = 755;
			this.annotationName();
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 756;
				this.match(JavaParser.T__41);
				this.state = 759;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.elementValuePairs();
					}
					break;
				case 2:
					{
					this.state = 758;
					this.elementValue();
					}
					break;
				}
				this.state = 761;
				this.match(JavaParser.T__42);
				}
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
	// @RuleVersion(0)
	public annotationName(): AnnotationNameContext {
		let localctx: AnnotationNameContext = new AnnotationNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, JavaParser.RULE_annotationName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
			this.match(JavaParser.Identifier);
			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 765;
				this.match(JavaParser.T__4);
				this.state = 766;
				this.match(JavaParser.Identifier);
				}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let localctx: ElementValuePairsContext = new ElementValuePairsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 772;
			this.elementValuePair();
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 773;
				this.match(JavaParser.T__16);
				this.state = 774;
				this.elementValuePair();
				}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let localctx: ElementValuePairContext = new ElementValuePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			this.match(JavaParser.Identifier);
			this.state = 781;
			this.match(JavaParser.T__26);
			this.state = 782;
			this.elementValue();
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
	public elementValue(): ElementValueContext {
		let localctx: ElementValueContext = new ElementValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, JavaParser.RULE_elementValue);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 41:
			case 42:
			case 45:
			case 46:
			case 47:
			case 48:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 784;
				this.expression(0);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 785;
				this.annotation();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 786;
				this.elementValueArrayInitializer();
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
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 789;
			this.match(JavaParser.T__19);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 1047523361) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
				{
				this.state = 790;
				this.elementValue();
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 791;
						this.match(JavaParser.T__16);
						this.state = 792;
						this.elementValue();
						}
						}
					}
					this.state = 797;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
				}
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 800;
				this.match(JavaParser.T__16);
				}
			}

			this.state = 803;
			this.match(JavaParser.T__20);
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
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 805;
			this.match(JavaParser.T__48);
			this.state = 806;
			this.match(JavaParser.T__21);
			this.state = 807;
			this.match(JavaParser.Identifier);
			this.state = 808;
			this.annotationTypeBody();
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
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 810;
			this.match(JavaParser.T__19);
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4030790800) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131327) !== 0) || _la===96 || _la===98) {
				{
				{
				this.state = 811;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
			this.match(JavaParser.T__20);
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
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this.modifiers();
			this.state = 820;
			this.annotationTypeElementRest();
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
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, JavaParser.RULE_annotationTypeElementRest);
		let _la: number;
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 822;
				this.type_();
				this.state = 823;
				this.annotationMethodOrConstantRest();
				this.state = 824;
				this.match(JavaParser.T__1);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 826;
				this.classDeclaration();
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 827;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 830;
				this.normalInterfaceDeclaration();
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 831;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 834;
				this.enumDeclaration();
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 835;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 838;
				this.annotationTypeDeclaration();
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 839;
					this.match(JavaParser.T__1);
					}
				}

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
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 844;
				this.annotationMethodRest();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 845;
				this.annotationConstantRest();
				}
				break;
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
	public annotationMethodRest(): AnnotationMethodRestContext {
		let localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 848;
			this.match(JavaParser.Identifier);
			this.state = 849;
			this.match(JavaParser.T__41);
			this.state = 850;
			this.match(JavaParser.T__42);
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 851;
				this.defaultValue();
				}
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
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 854;
			this.variableDeclarators();
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
	public defaultValue(): DefaultValueContext {
		let localctx: DefaultValueContext = new DefaultValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 856;
			this.match(JavaParser.T__49);
			this.state = 857;
			this.elementValue();
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 859;
			this.match(JavaParser.T__19);
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 575684740) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4224968447) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3204448383) !== 0) || _la===98) {
				{
				{
				this.state = 860;
				this.blockStatement();
				}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 866;
			this.match(JavaParser.T__20);
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
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, JavaParser.RULE_blockStatement);
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 868;
				this.localVariableDeclarationStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 869;
				this.classDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 870;
				this.interfaceDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 871;
				this.statement();
				}
				break;
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
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, JavaParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 874;
			this.localVariableDeclaration();
			this.state = 875;
			this.match(JavaParser.T__1);
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
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, JavaParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 877;
			this.variableModifiers();
			this.state = 878;
			this.type_();
			this.state = 879;
			this.variableDeclarators();
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
	public variableModifiers(): VariableModifiersContext {
		let localctx: VariableModifiersContext = new VariableModifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, JavaParser.RULE_variableModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14 || _la===49) {
				{
				{
				this.state = 881;
				this.variableModifier();
				}
				}
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, JavaParser.RULE_statement);
		let _la: number;
		try {
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 887;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 888;
				this.match(JavaParser.ASSERT);
				this.state = 889;
				this.expression(0);
				this.state = 892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 890;
					this.match(JavaParser.T__50);
					this.state = 891;
					this.expression(0);
					}
				}

				this.state = 894;
				this.match(JavaParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 896;
				this.match(JavaParser.T__51);
				this.state = 897;
				this.parExpression();
				this.state = 898;
				this.statement();
				this.state = 901;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 899;
					this.match(JavaParser.T__52);
					this.state = 900;
					this.statement();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 903;
				this.match(JavaParser.T__53);
				this.state = 904;
				this.match(JavaParser.T__41);
				this.state = 905;
				this.forControl();
				this.state = 906;
				this.match(JavaParser.T__42);
				this.state = 907;
				this.statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 909;
				this.match(JavaParser.T__54);
				this.state = 910;
				this.parExpression();
				this.state = 911;
				this.statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 913;
				this.match(JavaParser.T__55);
				this.state = 914;
				this.statement();
				this.state = 915;
				this.match(JavaParser.T__54);
				this.state = 916;
				this.parExpression();
				this.state = 917;
				this.match(JavaParser.T__1);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 919;
				this.match(JavaParser.T__56);
				this.state = 920;
				this.block();
				this.state = 928;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.catches();
					this.state = 922;
					this.match(JavaParser.T__57);
					this.state = 923;
					this.block();
					}
					break;
				case 2:
					{
					this.state = 925;
					this.catches();
					}
					break;
				case 3:
					{
					this.state = 926;
					this.match(JavaParser.T__57);
					this.state = 927;
					this.block();
					}
					break;
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 930;
				this.match(JavaParser.T__58);
				this.state = 931;
				this.parExpression();
				this.state = 932;
				this.switchBlock();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 934;
				this.match(JavaParser.T__28);
				this.state = 935;
				this.parExpression();
				this.state = 936;
				this.block();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 938;
				this.match(JavaParser.T__59);
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
					{
					this.state = 939;
					this.expression(0);
					}
				}

				this.state = 942;
				this.match(JavaParser.T__1);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 943;
				this.match(JavaParser.T__60);
				this.state = 944;
				this.expression(0);
				this.state = 945;
				this.match(JavaParser.T__1);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 947;
				this.match(JavaParser.T__61);
				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===98) {
					{
					this.state = 948;
					this.match(JavaParser.Identifier);
					}
				}

				this.state = 951;
				this.match(JavaParser.T__1);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 952;
				this.match(JavaParser.T__62);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===98) {
					{
					this.state = 953;
					this.match(JavaParser.Identifier);
					}
				}

				this.state = 956;
				this.match(JavaParser.T__1);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 957;
				this.match(JavaParser.T__1);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 958;
				this.statementExpression();
				this.state = 959;
				this.match(JavaParser.T__1);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 961;
				this.match(JavaParser.Identifier);
				this.state = 962;
				this.match(JavaParser.T__50);
				this.state = 963;
				this.statement();
				}
				break;
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
	public catches(): CatchesContext {
		let localctx: CatchesContext = new CatchesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, JavaParser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 966;
			this.catchClause();
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 967;
				this.catchClause();
				}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, JavaParser.RULE_catchClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.match(JavaParser.T__63);
			this.state = 974;
			this.match(JavaParser.T__41);
			this.state = 975;
			this.formalParameter();
			this.state = 976;
			this.match(JavaParser.T__42);
			this.state = 977;
			this.block();
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
	public formalParameter(): FormalParameterContext {
		let localctx: FormalParameterContext = new FormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, JavaParser.RULE_formalParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 979;
			this.variableModifiers();
			this.state = 980;
			this.type_();
			this.state = 981;
			this.variableDeclaratorId();
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
	public switchBlock(): SwitchBlockContext {
		let localctx: SwitchBlockContext = new SwitchBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, JavaParser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 983;
			this.match(JavaParser.T__19);
			this.state = 987;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 984;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 989;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===50 || _la===65) {
				{
				{
				this.state = 990;
				this.switchLabel();
				}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 996;
			this.match(JavaParser.T__20);
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
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 999;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 998;
					this.switchLabel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 575684740) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4224968447) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3204448383) !== 0) || _la===98) {
				{
				{
				this.state = 1003;
				this.blockStatement();
				}
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let localctx: SwitchLabelContext = new SwitchLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, JavaParser.RULE_switchLabel);
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1009;
				this.match(JavaParser.T__64);
				this.state = 1010;
				this.constantExpression();
				this.state = 1011;
				this.match(JavaParser.T__50);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1013;
				this.match(JavaParser.T__64);
				this.state = 1014;
				this.enumConstantName();
				this.state = 1015;
				this.match(JavaParser.T__50);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1017;
				this.match(JavaParser.T__49);
				this.state = 1018;
				this.match(JavaParser.T__50);
				}
				break;
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
	public forControl(): ForControlContext {
		let localctx: ForControlContext = new ForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1021;
				this.enhancedForControl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 2616985601) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 133169167) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 319) !== 0)) {
					{
					this.state = 1022;
					this.forInit();
					}
				}

				this.state = 1025;
				this.match(JavaParser.T__1);
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
					{
					this.state = 1026;
					this.expression(0);
					}
				}

				this.state = 1029;
				this.match(JavaParser.T__1);
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
					{
					this.state = 1030;
					this.forUpdate();
					}
				}

				}
				break;
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
	public forInit(): ForInitContext {
		let localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, JavaParser.RULE_forInit);
		try {
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1035;
				this.localVariableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1036;
				this.expressionList();
				}
				break;
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
	public enhancedForControl(): EnhancedForControlContext {
		let localctx: EnhancedForControlContext = new EnhancedForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, JavaParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this.variableModifiers();
			this.state = 1040;
			this.type_();
			this.state = 1041;
			this.match(JavaParser.Identifier);
			this.state = 1042;
			this.match(JavaParser.T__50);
			this.state = 1043;
			this.expression(0);
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
	public forUpdate(): ForUpdateContext {
		let localctx: ForUpdateContext = new ForUpdateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, JavaParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1045;
			this.expressionList();
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
	public parExpression(): ParExpressionContext {
		let localctx: ParExpressionContext = new ParExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1047;
			this.match(JavaParser.T__41);
			this.state = 1048;
			this.expression(0);
			this.state = 1049;
			this.match(JavaParser.T__42);
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
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this.expression(0);
			this.state = 1056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 1052;
				this.match(JavaParser.T__16);
				this.state = 1053;
				this.expression(0);
				}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let localctx: StatementExpressionContext = new StatementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, JavaParser.RULE_statementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1059;
			this.expression(0);
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
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, JavaParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1061;
			this.expression(0);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 198;
		this.enterRecursionRule(localctx, 198, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1064;
				this.primary();
				}
				break;
			case 2:
				{
				this.state = 1065;
				_la = this._input.LA(1);
				if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1066;
				this.expression(17);
				}
				break;
			case 3:
				{
				this.state = 1067;
				_la = this._input.LA(1);
				if(!(_la===71 || _la===72)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1068;
				this.expression(16);
				}
				break;
			case 4:
				{
				this.state = 1069;
				this.match(JavaParser.T__41);
				this.state = 1070;
				this.type_();
				this.state = 1071;
				this.match(JavaParser.T__42);
				this.state = 1072;
				this.expression(15);
				}
				break;
			case 5:
				{
				this.state = 1074;
				this.match(JavaParser.T__65);
				this.state = 1075;
				this.creator();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1204;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1202;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1078;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1079;
						_la = this._input.LA(1);
						if(!(_la===6 || _la===73 || _la===74)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1080;
						this.expression(14);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1081;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1082;
						_la = this._input.LA(1);
						if(!(_la===69 || _la===70)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1083;
						this.expression(13);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1084;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1092;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
						case 1:
							{
							this.state = 1085;
							this.match(JavaParser.T__15);
							this.state = 1086;
							this.match(JavaParser.T__15);
							}
							break;
						case 2:
							{
							this.state = 1087;
							this.match(JavaParser.T__17);
							this.state = 1088;
							this.match(JavaParser.T__17);
							this.state = 1089;
							this.match(JavaParser.T__17);
							}
							break;
						case 3:
							{
							this.state = 1090;
							this.match(JavaParser.T__17);
							this.state = 1091;
							this.match(JavaParser.T__17);
							}
							break;
						}
						this.state = 1094;
						this.expression(12);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1095;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1102;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
						case 1:
							{
							this.state = 1096;
							this.match(JavaParser.T__15);
							this.state = 1097;
							this.match(JavaParser.T__26);
							}
							break;
						case 2:
							{
							this.state = 1098;
							this.match(JavaParser.T__17);
							this.state = 1099;
							this.match(JavaParser.T__26);
							}
							break;
						case 3:
							{
							this.state = 1100;
							this.match(JavaParser.T__17);
							}
							break;
						case 4:
							{
							this.state = 1101;
							this.match(JavaParser.T__15);
							}
							break;
						}
						this.state = 1104;
						this.expression(11);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1105;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1106;
						_la = this._input.LA(1);
						if(!(_la===76 || _la===77)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1107;
						this.expression(9);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1108;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1109;
						this.match(JavaParser.T__18);
						this.state = 1110;
						this.expression(8);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1111;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1112;
						this.match(JavaParser.T__77);
						this.state = 1113;
						this.expression(7);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1114;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1115;
						this.match(JavaParser.T__78);
						this.state = 1116;
						this.expression(6);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1117;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1118;
						this.match(JavaParser.T__79);
						this.state = 1119;
						this.expression(5);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1120;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1121;
						this.match(JavaParser.T__80);
						this.state = 1122;
						this.expression(4);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1123;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1124;
						this.match(JavaParser.T__39);
						this.state = 1125;
						this.expression(0);
						this.state = 1126;
						this.match(JavaParser.T__50);
						this.state = 1127;
						this.expression(3);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1129;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1149;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
						case 1:
							{
							this.state = 1130;
							this.match(JavaParser.T__81);
							}
							break;
						case 2:
							{
							this.state = 1131;
							this.match(JavaParser.T__82);
							}
							break;
						case 3:
							{
							this.state = 1132;
							this.match(JavaParser.T__83);
							}
							break;
						case 4:
							{
							this.state = 1133;
							this.match(JavaParser.T__84);
							}
							break;
						case 5:
							{
							this.state = 1134;
							this.match(JavaParser.T__85);
							}
							break;
						case 6:
							{
							this.state = 1135;
							this.match(JavaParser.T__86);
							}
							break;
						case 7:
							{
							this.state = 1136;
							this.match(JavaParser.T__87);
							}
							break;
						case 8:
							{
							this.state = 1137;
							this.match(JavaParser.T__26);
							}
							break;
						case 9:
							{
							this.state = 1138;
							this.match(JavaParser.T__17);
							this.state = 1139;
							this.match(JavaParser.T__17);
							this.state = 1140;
							this.match(JavaParser.T__26);
							}
							break;
						case 10:
							{
							this.state = 1141;
							this.match(JavaParser.T__17);
							this.state = 1142;
							this.match(JavaParser.T__17);
							this.state = 1143;
							this.match(JavaParser.T__17);
							this.state = 1144;
							this.match(JavaParser.T__26);
							}
							break;
						case 11:
							{
							this.state = 1145;
							this.match(JavaParser.T__15);
							this.state = 1146;
							this.match(JavaParser.T__15);
							this.state = 1147;
							this.match(JavaParser.T__26);
							}
							break;
						case 12:
							{
							this.state = 1148;
							this.match(JavaParser.T__88);
							}
							break;
						}
						this.state = 1151;
						this.expression(2);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1152;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1153;
						this.match(JavaParser.T__4);
						this.state = 1154;
						this.match(JavaParser.Identifier);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1155;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1156;
						this.match(JavaParser.T__4);
						this.state = 1157;
						this.match(JavaParser.T__44);
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1158;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1159;
						this.match(JavaParser.T__4);
						this.state = 1160;
						this.match(JavaParser.T__40);
						this.state = 1161;
						this.match(JavaParser.T__41);
						this.state = 1163;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
							{
							this.state = 1162;
							this.expressionList();
							}
						}

						this.state = 1165;
						this.match(JavaParser.T__42);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1166;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1167;
						this.match(JavaParser.T__4);
						this.state = 1168;
						this.match(JavaParser.T__65);
						this.state = 1169;
						this.match(JavaParser.Identifier);
						this.state = 1170;
						this.match(JavaParser.T__41);
						this.state = 1172;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
							{
							this.state = 1171;
							this.expressionList();
							}
						}

						this.state = 1174;
						this.match(JavaParser.T__42);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1175;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1176;
						this.match(JavaParser.T__4);
						this.state = 1177;
						this.match(JavaParser.T__40);
						this.state = 1178;
						this.match(JavaParser.T__4);
						this.state = 1179;
						this.match(JavaParser.Identifier);
						this.state = 1181;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
						case 1:
							{
							this.state = 1180;
							this.arguments();
							}
							break;
						}
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1183;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1184;
						this.match(JavaParser.T__4);
						this.state = 1185;
						this.explicitGenericInvocation();
						}
						break;
					case 19:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1186;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1187;
						this.match(JavaParser.T__22);
						this.state = 1188;
						this.expression(0);
						this.state = 1189;
						this.match(JavaParser.T__23);
						}
						break;
					case 20:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1191;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1192;
						this.match(JavaParser.T__41);
						this.state = 1194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
							{
							this.state = 1193;
							this.expressionList();
							}
						}

						this.state = 1196;
						this.match(JavaParser.T__42);
						}
						break;
					case 21:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1197;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1198;
						_la = this._input.LA(1);
						if(!(_la===67 || _la===68)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					case 22:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1199;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1200;
						this.match(JavaParser.T__74);
						this.state = 1201;
						this.type_();
						}
						break;
					}
					}
				}
				this.state = 1206;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, JavaParser.RULE_primary);
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1207;
				this.match(JavaParser.T__41);
				this.state = 1208;
				this.expression(0);
				this.state = 1209;
				this.match(JavaParser.T__42);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1211;
				this.match(JavaParser.T__44);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1212;
				this.match(JavaParser.T__40);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1213;
				this.literal();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1214;
				this.match(JavaParser.Identifier);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1215;
				this.type_();
				this.state = 1216;
				this.match(JavaParser.T__4);
				this.state = 1217;
				this.match(JavaParser.T__6);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1219;
				this.match(JavaParser.T__24);
				this.state = 1220;
				this.match(JavaParser.T__4);
				this.state = 1221;
				this.match(JavaParser.T__6);
				}
				break;
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
	public creator(): CreatorContext {
		let localctx: CreatorContext = new CreatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, JavaParser.RULE_creator);
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1224;
				this.nonWildcardTypeArguments();
				this.state = 1225;
				this.createdName();
				this.state = 1226;
				this.classCreatorRest();
				}
				break;
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 98:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1228;
				this.createdName();
				this.state = 1231;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 23:
					{
					this.state = 1229;
					this.arrayCreatorRest();
					}
					break;
				case 42:
					{
					this.state = 1230;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let localctx: CreatedNameContext = new CreatedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, JavaParser.RULE_createdName);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1235;
				this.classOrInterfaceType();
				}
				break;
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1236;
				this.primitiveType();
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
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let localctx: InnerCreatorContext = new InnerCreatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1239;
				this.nonWildcardTypeArguments();
				}
			}

			this.state = 1242;
			this.match(JavaParser.Identifier);
			this.state = 1243;
			this.classCreatorRest();
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
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.nonWildcardTypeArguments();
			this.state = 1246;
			this.match(JavaParser.Identifier);
			this.state = 1247;
			this.arguments();
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
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1249;
			this.match(JavaParser.T__22);
			this.state = 1277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				{
				this.state = 1250;
				this.match(JavaParser.T__23);
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23) {
					{
					{
					this.state = 1251;
					this.match(JavaParser.T__22);
					this.state = 1252;
					this.match(JavaParser.T__23);
					}
					}
					this.state = 1257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1258;
				this.arrayInitializer();
				}
				break;
			case 25:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 41:
			case 42:
			case 45:
			case 46:
			case 47:
			case 48:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
				{
				this.state = 1259;
				this.expression(0);
				this.state = 1260;
				this.match(JavaParser.T__23);
				this.state = 1267;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1261;
						this.match(JavaParser.T__22);
						this.state = 1262;
						this.expression(0);
						this.state = 1263;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1270;
						this.match(JavaParser.T__22);
						this.state = 1271;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 1276;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1279;
			this.arguments();
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1280;
				this.classBody();
				}
				break;
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
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1283;
			this.match(JavaParser.T__15);
			this.state = 1284;
			this.typeList();
			this.state = 1285;
			this.match(JavaParser.T__17);
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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1287;
			this.match(JavaParser.T__41);
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 15957889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1056964735) !== 0) || _la===98) {
				{
				this.state = 1288;
				this.expressionList();
				}
			}

			this.state = 1291;
			this.match(JavaParser.T__42);
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
		case 99:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		case 12:
			return this.precpred(this._ctx, 26);
		case 13:
			return this.precpred(this._ctx, 25);
		case 14:
			return this.precpred(this._ctx, 24);
		case 15:
			return this.precpred(this._ctx, 23);
		case 16:
			return this.precpred(this._ctx, 22);
		case 17:
			return this.precpred(this._ctx, 21);
		case 18:
			return this.precpred(this._ctx, 20);
		case 19:
			return this.precpred(this._ctx, 19);
		case 20:
			return this.precpred(this._ctx, 18);
		case 21:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,101,1294,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,1,0,3,
	0,220,8,0,1,0,5,0,223,8,0,10,0,12,0,226,9,0,1,0,5,0,229,8,0,10,0,12,0,232,
	9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,3,2,242,8,2,1,2,1,2,1,2,3,2,247,8,2,
	1,2,1,2,1,3,5,3,252,8,3,10,3,12,3,255,9,3,1,3,1,3,1,3,3,3,260,8,3,1,3,3,
	3,263,8,3,1,4,1,4,1,4,3,4,268,8,4,1,4,1,4,3,4,272,8,4,1,4,1,4,3,4,276,8,
	4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,284,8,5,1,5,1,5,1,6,1,6,3,6,290,8,6,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,300,8,7,1,8,5,8,303,8,8,10,8,12,8,306,9,8,
	1,9,1,9,1,9,1,9,5,9,312,8,9,10,9,12,9,315,9,9,1,9,1,9,1,10,1,10,1,10,3,
	10,322,8,10,1,11,1,11,1,11,5,11,327,8,11,10,11,12,11,330,9,11,1,12,1,12,
	3,12,334,8,12,1,12,3,12,337,8,12,1,12,3,12,340,8,12,1,12,1,12,1,13,1,13,
	1,13,5,13,347,8,13,10,13,12,13,350,9,13,1,14,3,14,353,8,14,1,14,1,14,3,
	14,357,8,14,1,14,3,14,360,8,14,1,15,1,15,5,15,364,8,15,10,15,12,15,367,
	9,15,1,16,1,16,1,16,3,16,372,8,16,1,16,1,16,3,16,376,8,16,1,16,1,16,1,17,
	1,17,1,17,5,17,383,8,17,10,17,12,17,386,9,17,1,18,1,18,5,18,390,8,18,10,
	18,12,18,393,9,18,1,18,1,18,1,19,1,19,5,19,399,8,19,10,19,12,19,402,9,19,
	1,19,1,19,1,20,1,20,3,20,408,8,20,1,20,1,20,1,20,1,20,3,20,414,8,20,1,21,
	1,21,1,21,1,21,1,21,1,21,3,21,422,8,21,1,22,1,22,1,22,1,22,1,22,5,22,429,
	8,22,10,22,12,22,432,9,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,441,8,
	22,1,23,1,23,3,23,445,8,23,1,23,1,23,3,23,449,8,23,1,24,1,24,1,24,1,25,
	1,25,1,25,1,25,1,26,3,26,459,8,26,1,26,1,26,1,26,1,26,3,26,465,8,26,1,26,
	1,26,1,27,1,27,1,27,1,27,3,27,473,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,
	28,3,28,482,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,492,8,30,
	1,31,1,31,1,31,3,31,497,8,31,1,31,1,31,3,31,501,8,31,1,32,1,32,1,32,5,32,
	506,8,32,10,32,12,32,509,9,32,1,32,1,32,3,32,513,8,32,1,32,1,32,1,33,1,
	33,1,33,3,33,520,8,33,1,33,1,33,1,33,1,34,1,34,1,34,3,34,528,8,34,1,34,
	1,34,1,35,1,35,1,35,1,36,1,36,1,36,5,36,538,8,36,10,36,12,36,541,9,36,1,
	37,1,37,1,37,3,37,546,8,37,1,38,1,38,1,38,5,38,551,8,38,10,38,12,38,554,
	9,38,1,39,1,39,5,39,558,8,39,10,39,12,39,561,9,39,1,39,1,39,1,39,1,40,1,
	40,1,40,5,40,569,8,40,10,40,12,40,572,9,40,1,41,1,41,3,41,576,8,41,1,42,
	1,42,1,42,1,42,5,42,582,8,42,10,42,12,42,585,9,42,1,42,3,42,588,8,42,3,
	42,590,8,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
	1,43,1,43,3,43,606,8,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,47,5,
	47,617,8,47,10,47,12,47,620,9,47,1,47,1,47,1,47,5,47,625,8,47,10,47,12,
	47,628,9,47,3,47,630,8,47,1,48,1,48,3,48,634,8,48,1,48,1,48,1,48,3,48,639,
	8,48,5,48,641,8,48,10,48,12,48,644,9,48,1,49,1,49,1,50,1,50,3,50,650,8,
	50,1,51,1,51,1,51,1,51,5,51,656,8,51,10,51,12,51,659,9,51,1,51,1,51,1,52,
	1,52,1,52,1,52,3,52,667,8,52,3,52,669,8,52,1,53,1,53,1,53,5,53,674,8,53,
	10,53,12,53,677,9,53,1,54,1,54,3,54,681,8,54,1,54,1,54,1,55,1,55,1,55,1,
	55,1,56,1,56,1,56,3,56,692,8,56,1,56,1,56,3,56,696,8,56,1,57,1,57,1,58,
	1,58,3,58,702,8,58,1,58,5,58,705,8,58,10,58,12,58,708,9,58,1,58,1,58,1,
	59,3,59,713,8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,722,8,59,1,59,
	1,59,1,59,1,59,3,59,728,8,59,1,60,1,60,1,60,5,60,733,8,60,10,60,12,60,736,
	9,60,1,61,1,61,1,61,1,61,1,61,1,61,3,61,744,8,61,1,62,1,62,1,63,1,63,1,
	64,4,64,751,8,64,11,64,12,64,752,1,65,1,65,1,65,1,65,1,65,3,65,760,8,65,
	1,65,3,65,763,8,65,1,66,1,66,1,66,5,66,768,8,66,10,66,12,66,771,9,66,1,
	67,1,67,1,67,5,67,776,8,67,10,67,12,67,779,9,67,1,68,1,68,1,68,1,68,1,69,
	1,69,1,69,3,69,788,8,69,1,70,1,70,1,70,1,70,5,70,794,8,70,10,70,12,70,797,
	9,70,3,70,799,8,70,1,70,3,70,802,8,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,
	1,72,1,72,5,72,813,8,72,10,72,12,72,816,9,72,1,72,1,72,1,73,1,73,1,73,1,
	74,1,74,1,74,1,74,1,74,1,74,3,74,829,8,74,1,74,1,74,3,74,833,8,74,1,74,
	1,74,3,74,837,8,74,1,74,1,74,3,74,841,8,74,3,74,843,8,74,1,75,1,75,3,75,
	847,8,75,1,76,1,76,1,76,1,76,3,76,853,8,76,1,77,1,77,1,78,1,78,1,78,1,79,
	1,79,5,79,862,8,79,10,79,12,79,865,9,79,1,79,1,79,1,80,1,80,1,80,1,80,3,
	80,873,8,80,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,83,5,83,883,8,83,10,83,
	12,83,886,9,83,1,84,1,84,1,84,1,84,1,84,3,84,893,8,84,1,84,1,84,1,84,1,
	84,1,84,1,84,1,84,3,84,902,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,
	1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,
	84,1,84,1,84,3,84,929,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,
	1,84,3,84,941,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,950,8,84,1,84,
	1,84,1,84,3,84,955,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,965,
	8,84,1,85,1,85,5,85,969,8,85,10,85,12,85,972,9,85,1,86,1,86,1,86,1,86,1,
	86,1,86,1,87,1,87,1,87,1,87,1,88,1,88,5,88,986,8,88,10,88,12,88,989,9,88,
	1,88,5,88,992,8,88,10,88,12,88,995,9,88,1,88,1,88,1,89,4,89,1000,8,89,11,
	89,12,89,1001,1,89,5,89,1005,8,89,10,89,12,89,1008,9,89,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1020,8,90,1,91,1,91,3,91,1024,8,
	91,1,91,1,91,3,91,1028,8,91,1,91,1,91,3,91,1032,8,91,3,91,1034,8,91,1,92,
	1,92,3,92,1038,8,92,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,95,1,95,1,
	95,1,95,1,96,1,96,1,96,5,96,1055,8,96,10,96,12,96,1058,9,96,1,97,1,97,1,
	98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	3,99,1077,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,
	99,1,99,1,99,3,99,1093,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,
	1103,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,
	99,1,99,1,99,1,99,3,99,1150,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	1,99,1,99,1,99,1,99,3,99,1164,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,
	99,1173,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1182,8,99,1,99,1,99,
	1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1195,8,99,1,99,1,99,1,
	99,1,99,1,99,1,99,5,99,1203,8,99,10,99,12,99,1206,9,99,1,100,1,100,1,100,
	1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
	3,100,1223,8,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,3,101,1232,8,
	101,3,101,1234,8,101,1,102,1,102,3,102,1238,8,102,1,103,3,103,1241,8,103,
	1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,5,105,
	1254,8,105,10,105,12,105,1257,9,105,1,105,1,105,1,105,1,105,1,105,1,105,
	1,105,5,105,1266,8,105,10,105,12,105,1269,9,105,1,105,1,105,5,105,1273,
	8,105,10,105,12,105,1276,9,105,3,105,1278,8,105,1,106,1,106,3,106,1282,
	8,106,1,107,1,107,1,107,1,107,1,108,1,108,3,108,1290,8,108,1,108,1,108,
	1,108,0,1,198,109,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,
	164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,
	200,202,204,206,208,210,212,214,216,0,11,1,0,32,39,2,0,8,8,41,41,2,0,41,
	41,45,45,1,0,90,92,1,0,47,48,1,0,67,70,1,0,71,72,2,0,6,6,73,74,1,0,69,70,
	1,0,76,77,1,0,67,68,1417,0,219,1,0,0,0,2,235,1,0,0,0,4,239,1,0,0,0,6,262,
	1,0,0,0,8,264,1,0,0,0,10,279,1,0,0,0,12,289,1,0,0,0,14,299,1,0,0,0,16,304,
	1,0,0,0,18,307,1,0,0,0,20,318,1,0,0,0,22,323,1,0,0,0,24,331,1,0,0,0,26,
	343,1,0,0,0,28,352,1,0,0,0,30,361,1,0,0,0,32,368,1,0,0,0,34,379,1,0,0,0,
	36,387,1,0,0,0,38,396,1,0,0,0,40,413,1,0,0,0,42,421,1,0,0,0,44,440,1,0,
	0,0,46,444,1,0,0,0,48,450,1,0,0,0,50,453,1,0,0,0,52,458,1,0,0,0,54,472,
	1,0,0,0,56,481,1,0,0,0,58,483,1,0,0,0,60,491,1,0,0,0,62,493,1,0,0,0,64,
	502,1,0,0,0,66,516,1,0,0,0,68,524,1,0,0,0,70,531,1,0,0,0,72,534,1,0,0,0,
	74,542,1,0,0,0,76,547,1,0,0,0,78,559,1,0,0,0,80,565,1,0,0,0,82,575,1,0,
	0,0,84,577,1,0,0,0,86,605,1,0,0,0,88,607,1,0,0,0,90,609,1,0,0,0,92,611,
	1,0,0,0,94,629,1,0,0,0,96,631,1,0,0,0,98,645,1,0,0,0,100,649,1,0,0,0,102,
	651,1,0,0,0,104,668,1,0,0,0,106,670,1,0,0,0,108,678,1,0,0,0,110,684,1,0,
	0,0,112,695,1,0,0,0,114,697,1,0,0,0,116,699,1,0,0,0,118,727,1,0,0,0,120,
	729,1,0,0,0,122,743,1,0,0,0,124,745,1,0,0,0,126,747,1,0,0,0,128,750,1,0,
	0,0,130,754,1,0,0,0,132,764,1,0,0,0,134,772,1,0,0,0,136,780,1,0,0,0,138,
	787,1,0,0,0,140,789,1,0,0,0,142,805,1,0,0,0,144,810,1,0,0,0,146,819,1,0,
	0,0,148,842,1,0,0,0,150,846,1,0,0,0,152,848,1,0,0,0,154,854,1,0,0,0,156,
	856,1,0,0,0,158,859,1,0,0,0,160,872,1,0,0,0,162,874,1,0,0,0,164,877,1,0,
	0,0,166,884,1,0,0,0,168,964,1,0,0,0,170,966,1,0,0,0,172,973,1,0,0,0,174,
	979,1,0,0,0,176,983,1,0,0,0,178,999,1,0,0,0,180,1019,1,0,0,0,182,1033,1,
	0,0,0,184,1037,1,0,0,0,186,1039,1,0,0,0,188,1045,1,0,0,0,190,1047,1,0,0,
	0,192,1051,1,0,0,0,194,1059,1,0,0,0,196,1061,1,0,0,0,198,1076,1,0,0,0,200,
	1222,1,0,0,0,202,1233,1,0,0,0,204,1237,1,0,0,0,206,1240,1,0,0,0,208,1245,
	1,0,0,0,210,1249,1,0,0,0,212,1279,1,0,0,0,214,1283,1,0,0,0,216,1287,1,0,
	0,0,218,220,3,2,1,0,219,218,1,0,0,0,219,220,1,0,0,0,220,224,1,0,0,0,221,
	223,3,4,2,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,
	0,0,225,230,1,0,0,0,226,224,1,0,0,0,227,229,3,6,3,0,228,227,1,0,0,0,229,
	232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,232,230,1,0,
	0,0,233,234,5,0,0,1,234,1,1,0,0,0,235,236,5,1,0,0,236,237,3,120,60,0,237,
	238,5,2,0,0,238,3,1,0,0,0,239,241,5,3,0,0,240,242,5,4,0,0,241,240,1,0,0,
	0,241,242,1,0,0,0,242,243,1,0,0,0,243,246,3,120,60,0,244,245,5,5,0,0,245,
	247,5,6,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,249,5,2,
	0,0,249,5,1,0,0,0,250,252,3,14,7,0,251,250,1,0,0,0,252,255,1,0,0,0,253,
	251,1,0,0,0,253,254,1,0,0,0,254,259,1,0,0,0,255,253,1,0,0,0,256,260,3,8,
	4,0,257,260,3,12,6,0,258,260,3,10,5,0,259,256,1,0,0,0,259,257,1,0,0,0,259,
	258,1,0,0,0,260,263,1,0,0,0,261,263,5,2,0,0,262,253,1,0,0,0,262,261,1,0,
	0,0,263,7,1,0,0,0,264,265,5,7,0,0,265,267,5,98,0,0,266,268,3,18,9,0,267,
	266,1,0,0,0,267,268,1,0,0,0,268,271,1,0,0,0,269,270,5,8,0,0,270,272,3,94,
	47,0,271,269,1,0,0,0,271,272,1,0,0,0,272,275,1,0,0,0,273,274,5,9,0,0,274,
	276,3,34,17,0,275,273,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,278,3,
	36,18,0,278,9,1,0,0,0,279,280,5,96,0,0,280,283,5,98,0,0,281,282,5,9,0,0,
	282,284,3,34,17,0,283,281,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,
	3,24,12,0,286,11,1,0,0,0,287,290,3,32,16,0,288,290,3,142,71,0,289,287,1,
	0,0,0,289,288,1,0,0,0,290,13,1,0,0,0,291,300,3,130,65,0,292,300,5,10,0,
	0,293,300,5,11,0,0,294,300,5,12,0,0,295,300,5,13,0,0,296,300,5,4,0,0,297,
	300,5,14,0,0,298,300,5,15,0,0,299,291,1,0,0,0,299,292,1,0,0,0,299,293,1,
	0,0,0,299,294,1,0,0,0,299,295,1,0,0,0,299,296,1,0,0,0,299,297,1,0,0,0,299,
	298,1,0,0,0,300,15,1,0,0,0,301,303,3,86,43,0,302,301,1,0,0,0,303,306,1,
	0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,17,1,0,0,0,306,304,1,0,0,0,307,
	308,5,16,0,0,308,313,3,20,10,0,309,310,5,17,0,0,310,312,3,20,10,0,311,309,
	1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,316,1,0,0,0,
	315,313,1,0,0,0,316,317,5,18,0,0,317,19,1,0,0,0,318,321,5,98,0,0,319,320,
	5,8,0,0,320,322,3,22,11,0,321,319,1,0,0,0,321,322,1,0,0,0,322,21,1,0,0,
	0,323,328,3,94,47,0,324,325,5,19,0,0,325,327,3,94,47,0,326,324,1,0,0,0,
	327,330,1,0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,23,1,0,0,0,330,328,
	1,0,0,0,331,333,5,20,0,0,332,334,3,26,13,0,333,332,1,0,0,0,333,334,1,0,
	0,0,334,336,1,0,0,0,335,337,5,17,0,0,336,335,1,0,0,0,336,337,1,0,0,0,337,
	339,1,0,0,0,338,340,3,30,15,0,339,338,1,0,0,0,339,340,1,0,0,0,340,341,1,
	0,0,0,341,342,5,21,0,0,342,25,1,0,0,0,343,348,3,28,14,0,344,345,5,17,0,
	0,345,347,3,28,14,0,346,344,1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,0,348,
	349,1,0,0,0,349,27,1,0,0,0,350,348,1,0,0,0,351,353,3,128,64,0,352,351,1,
	0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,356,5,98,0,0,355,357,3,216,108,
	0,356,355,1,0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,360,3,36,18,0,359,
	358,1,0,0,0,359,360,1,0,0,0,360,29,1,0,0,0,361,365,5,2,0,0,362,364,3,40,
	20,0,363,362,1,0,0,0,364,367,1,0,0,0,365,363,1,0,0,0,365,366,1,0,0,0,366,
	31,1,0,0,0,367,365,1,0,0,0,368,369,5,22,0,0,369,371,5,98,0,0,370,372,3,
	18,9,0,371,370,1,0,0,0,371,372,1,0,0,0,372,375,1,0,0,0,373,374,5,8,0,0,
	374,376,3,34,17,0,375,373,1,0,0,0,375,376,1,0,0,0,376,377,1,0,0,0,377,378,
	3,38,19,0,378,33,1,0,0,0,379,384,3,94,47,0,380,381,5,17,0,0,381,383,3,94,
	47,0,382,380,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,384,385,1,0,0,0,385,
	35,1,0,0,0,386,384,1,0,0,0,387,391,5,20,0,0,388,390,3,40,20,0,389,388,1,
	0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,393,
	391,1,0,0,0,394,395,5,21,0,0,395,37,1,0,0,0,396,400,5,20,0,0,397,399,3,
	54,27,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,
	401,403,1,0,0,0,402,400,1,0,0,0,403,404,5,21,0,0,404,39,1,0,0,0,405,414,
	5,2,0,0,406,408,5,4,0,0,407,406,1,0,0,0,407,408,1,0,0,0,408,409,1,0,0,0,
	409,414,3,158,79,0,410,411,3,16,8,0,411,412,3,42,21,0,412,414,1,0,0,0,413,
	405,1,0,0,0,413,407,1,0,0,0,413,410,1,0,0,0,414,41,1,0,0,0,415,422,3,48,
	24,0,416,422,3,44,22,0,417,422,3,50,25,0,418,422,3,52,26,0,419,422,3,12,
	6,0,420,422,3,8,4,0,421,415,1,0,0,0,421,416,1,0,0,0,421,417,1,0,0,0,421,
	418,1,0,0,0,421,419,1,0,0,0,421,420,1,0,0,0,422,43,1,0,0,0,423,424,3,94,
	47,0,424,425,5,98,0,0,425,430,3,108,54,0,426,427,5,23,0,0,427,429,5,24,
	0,0,428,426,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,
	433,1,0,0,0,432,430,1,0,0,0,433,434,3,46,23,0,434,441,1,0,0,0,435,436,5,
	25,0,0,436,437,5,98,0,0,437,438,3,108,54,0,438,439,3,46,23,0,439,441,1,
	0,0,0,440,423,1,0,0,0,440,435,1,0,0,0,441,45,1,0,0,0,442,443,5,26,0,0,443,
	445,3,106,53,0,444,442,1,0,0,0,444,445,1,0,0,0,445,448,1,0,0,0,446,449,
	3,114,57,0,447,449,5,2,0,0,448,446,1,0,0,0,448,447,1,0,0,0,449,47,1,0,0,
	0,450,451,3,18,9,0,451,452,3,44,22,0,452,49,1,0,0,0,453,454,3,94,47,0,454,
	455,3,72,36,0,455,456,5,2,0,0,456,51,1,0,0,0,457,459,3,18,9,0,458,457,1,
	0,0,0,458,459,1,0,0,0,459,460,1,0,0,0,460,461,5,98,0,0,461,464,3,108,54,
	0,462,463,5,26,0,0,463,465,3,106,53,0,464,462,1,0,0,0,464,465,1,0,0,0,465,
	466,1,0,0,0,466,467,3,116,58,0,467,53,1,0,0,0,468,469,3,16,8,0,469,470,
	3,56,28,0,470,473,1,0,0,0,471,473,5,2,0,0,472,468,1,0,0,0,472,471,1,0,0,
	0,473,55,1,0,0,0,474,482,3,58,29,0,475,482,3,66,33,0,476,477,5,25,0,0,477,
	478,5,98,0,0,478,482,3,68,34,0,479,482,3,12,6,0,480,482,3,8,4,0,481,474,
	1,0,0,0,481,475,1,0,0,0,481,476,1,0,0,0,481,479,1,0,0,0,481,480,1,0,0,0,
	482,57,1,0,0,0,483,484,3,94,47,0,484,485,5,98,0,0,485,486,3,60,30,0,486,
	59,1,0,0,0,487,488,3,76,38,0,488,489,5,2,0,0,489,492,1,0,0,0,490,492,3,
	64,32,0,491,487,1,0,0,0,491,490,1,0,0,0,492,61,1,0,0,0,493,496,3,108,54,
	0,494,495,5,26,0,0,495,497,3,106,53,0,496,494,1,0,0,0,496,497,1,0,0,0,497,
	500,1,0,0,0,498,501,3,114,57,0,499,501,5,2,0,0,500,498,1,0,0,0,500,499,
	1,0,0,0,501,63,1,0,0,0,502,507,3,108,54,0,503,504,5,23,0,0,504,506,5,24,
	0,0,505,503,1,0,0,0,506,509,1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,
	512,1,0,0,0,509,507,1,0,0,0,510,511,5,26,0,0,511,513,3,106,53,0,512,510,
	1,0,0,0,512,513,1,0,0,0,513,514,1,0,0,0,514,515,5,2,0,0,515,65,1,0,0,0,
	516,519,3,18,9,0,517,520,3,94,47,0,518,520,5,25,0,0,519,517,1,0,0,0,519,
	518,1,0,0,0,520,521,1,0,0,0,521,522,5,98,0,0,522,523,3,64,32,0,523,67,1,
	0,0,0,524,527,3,108,54,0,525,526,5,26,0,0,526,528,3,106,53,0,527,525,1,
	0,0,0,527,528,1,0,0,0,528,529,1,0,0,0,529,530,5,2,0,0,530,69,1,0,0,0,531,
	532,5,98,0,0,532,533,3,78,39,0,533,71,1,0,0,0,534,539,3,74,37,0,535,536,
	5,17,0,0,536,538,3,74,37,0,537,535,1,0,0,0,538,541,1,0,0,0,539,537,1,0,
	0,0,539,540,1,0,0,0,540,73,1,0,0,0,541,539,1,0,0,0,542,545,3,80,40,0,543,
	544,5,27,0,0,544,546,3,82,41,0,545,543,1,0,0,0,545,546,1,0,0,0,546,75,1,
	0,0,0,547,552,3,78,39,0,548,549,5,17,0,0,549,551,3,70,35,0,550,548,1,0,
	0,0,551,554,1,0,0,0,552,550,1,0,0,0,552,553,1,0,0,0,553,77,1,0,0,0,554,
	552,1,0,0,0,555,556,5,23,0,0,556,558,5,24,0,0,557,555,1,0,0,0,558,561,1,
	0,0,0,559,557,1,0,0,0,559,560,1,0,0,0,560,562,1,0,0,0,561,559,1,0,0,0,562,
	563,5,27,0,0,563,564,3,82,41,0,564,79,1,0,0,0,565,570,5,98,0,0,566,567,
	5,23,0,0,567,569,5,24,0,0,568,566,1,0,0,0,569,572,1,0,0,0,570,568,1,0,0,
	0,570,571,1,0,0,0,571,81,1,0,0,0,572,570,1,0,0,0,573,576,3,84,42,0,574,
	576,3,198,99,0,575,573,1,0,0,0,575,574,1,0,0,0,576,83,1,0,0,0,577,589,5,
	20,0,0,578,583,3,82,41,0,579,580,5,17,0,0,580,582,3,82,41,0,581,579,1,0,
	0,0,582,585,1,0,0,0,583,581,1,0,0,0,583,584,1,0,0,0,584,587,1,0,0,0,585,
	583,1,0,0,0,586,588,5,17,0,0,587,586,1,0,0,0,587,588,1,0,0,0,588,590,1,
	0,0,0,589,578,1,0,0,0,589,590,1,0,0,0,590,591,1,0,0,0,591,592,5,21,0,0,
	592,85,1,0,0,0,593,606,3,130,65,0,594,606,5,10,0,0,595,606,5,11,0,0,596,
	606,5,12,0,0,597,606,5,4,0,0,598,606,5,13,0,0,599,606,5,14,0,0,600,606,
	5,28,0,0,601,606,5,29,0,0,602,606,5,30,0,0,603,606,5,31,0,0,604,606,5,15,
	0,0,605,593,1,0,0,0,605,594,1,0,0,0,605,595,1,0,0,0,605,596,1,0,0,0,605,
	597,1,0,0,0,605,598,1,0,0,0,605,599,1,0,0,0,605,600,1,0,0,0,605,601,1,0,
	0,0,605,602,1,0,0,0,605,603,1,0,0,0,605,604,1,0,0,0,606,87,1,0,0,0,607,
	608,3,120,60,0,608,89,1,0,0,0,609,610,5,98,0,0,610,91,1,0,0,0,611,612,3,
	120,60,0,612,93,1,0,0,0,613,618,3,96,48,0,614,615,5,23,0,0,615,617,5,24,
	0,0,616,614,1,0,0,0,617,620,1,0,0,0,618,616,1,0,0,0,618,619,1,0,0,0,619,
	630,1,0,0,0,620,618,1,0,0,0,621,626,3,98,49,0,622,623,5,23,0,0,623,625,
	5,24,0,0,624,622,1,0,0,0,625,628,1,0,0,0,626,624,1,0,0,0,626,627,1,0,0,
	0,627,630,1,0,0,0,628,626,1,0,0,0,629,613,1,0,0,0,629,621,1,0,0,0,630,95,
	1,0,0,0,631,633,5,98,0,0,632,634,3,102,51,0,633,632,1,0,0,0,633,634,1,0,
	0,0,634,642,1,0,0,0,635,636,5,5,0,0,636,638,5,98,0,0,637,639,3,102,51,0,
	638,637,1,0,0,0,638,639,1,0,0,0,639,641,1,0,0,0,640,635,1,0,0,0,641,644,
	1,0,0,0,642,640,1,0,0,0,642,643,1,0,0,0,643,97,1,0,0,0,644,642,1,0,0,0,
	645,646,7,0,0,0,646,99,1,0,0,0,647,650,5,14,0,0,648,650,3,130,65,0,649,
	647,1,0,0,0,649,648,1,0,0,0,650,101,1,0,0,0,651,652,5,16,0,0,652,657,3,
	104,52,0,653,654,5,17,0,0,654,656,3,104,52,0,655,653,1,0,0,0,656,659,1,
	0,0,0,657,655,1,0,0,0,657,658,1,0,0,0,658,660,1,0,0,0,659,657,1,0,0,0,660,
	661,5,18,0,0,661,103,1,0,0,0,662,669,3,94,47,0,663,666,5,40,0,0,664,665,
	7,1,0,0,665,667,3,94,47,0,666,664,1,0,0,0,666,667,1,0,0,0,667,669,1,0,0,
	0,668,662,1,0,0,0,668,663,1,0,0,0,669,105,1,0,0,0,670,675,3,120,60,0,671,
	672,5,17,0,0,672,674,3,120,60,0,673,671,1,0,0,0,674,677,1,0,0,0,675,673,
	1,0,0,0,675,676,1,0,0,0,676,107,1,0,0,0,677,675,1,0,0,0,678,680,5,42,0,
	0,679,681,3,110,55,0,680,679,1,0,0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,
	683,5,43,0,0,683,109,1,0,0,0,684,685,3,166,83,0,685,686,3,94,47,0,686,687,
	3,112,56,0,687,111,1,0,0,0,688,691,3,80,40,0,689,690,5,17,0,0,690,692,3,
	110,55,0,691,689,1,0,0,0,691,692,1,0,0,0,692,696,1,0,0,0,693,694,5,44,0,
	0,694,696,3,80,40,0,695,688,1,0,0,0,695,693,1,0,0,0,696,113,1,0,0,0,697,
	698,3,158,79,0,698,115,1,0,0,0,699,701,5,20,0,0,700,702,3,118,59,0,701,
	700,1,0,0,0,701,702,1,0,0,0,702,706,1,0,0,0,703,705,3,160,80,0,704,703,
	1,0,0,0,705,708,1,0,0,0,706,704,1,0,0,0,706,707,1,0,0,0,707,709,1,0,0,0,
	708,706,1,0,0,0,709,710,5,21,0,0,710,117,1,0,0,0,711,713,3,214,107,0,712,
	711,1,0,0,0,712,713,1,0,0,0,713,714,1,0,0,0,714,715,7,2,0,0,715,716,3,216,
	108,0,716,717,5,2,0,0,717,728,1,0,0,0,718,719,3,200,100,0,719,721,5,5,0,
	0,720,722,3,214,107,0,721,720,1,0,0,0,721,722,1,0,0,0,722,723,1,0,0,0,723,
	724,5,41,0,0,724,725,3,216,108,0,725,726,5,2,0,0,726,728,1,0,0,0,727,712,
	1,0,0,0,727,718,1,0,0,0,728,119,1,0,0,0,729,734,5,98,0,0,730,731,5,5,0,
	0,731,733,5,98,0,0,732,730,1,0,0,0,733,736,1,0,0,0,734,732,1,0,0,0,734,
	735,1,0,0,0,735,121,1,0,0,0,736,734,1,0,0,0,737,744,3,124,62,0,738,744,
	5,93,0,0,739,744,5,94,0,0,740,744,5,95,0,0,741,744,3,126,63,0,742,744,5,
	46,0,0,743,737,1,0,0,0,743,738,1,0,0,0,743,739,1,0,0,0,743,740,1,0,0,0,
	743,741,1,0,0,0,743,742,1,0,0,0,744,123,1,0,0,0,745,746,7,3,0,0,746,125,
	1,0,0,0,747,748,7,4,0,0,748,127,1,0,0,0,749,751,3,130,65,0,750,749,1,0,
	0,0,751,752,1,0,0,0,752,750,1,0,0,0,752,753,1,0,0,0,753,129,1,0,0,0,754,
	755,5,49,0,0,755,762,3,132,66,0,756,759,5,42,0,0,757,760,3,134,67,0,758,
	760,3,138,69,0,759,757,1,0,0,0,759,758,1,0,0,0,759,760,1,0,0,0,760,761,
	1,0,0,0,761,763,5,43,0,0,762,756,1,0,0,0,762,763,1,0,0,0,763,131,1,0,0,
	0,764,769,5,98,0,0,765,766,5,5,0,0,766,768,5,98,0,0,767,765,1,0,0,0,768,
	771,1,0,0,0,769,767,1,0,0,0,769,770,1,0,0,0,770,133,1,0,0,0,771,769,1,0,
	0,0,772,777,3,136,68,0,773,774,5,17,0,0,774,776,3,136,68,0,775,773,1,0,
	0,0,776,779,1,0,0,0,777,775,1,0,0,0,777,778,1,0,0,0,778,135,1,0,0,0,779,
	777,1,0,0,0,780,781,5,98,0,0,781,782,5,27,0,0,782,783,3,138,69,0,783,137,
	1,0,0,0,784,788,3,198,99,0,785,788,3,130,65,0,786,788,3,140,70,0,787,784,
	1,0,0,0,787,785,1,0,0,0,787,786,1,0,0,0,788,139,1,0,0,0,789,798,5,20,0,
	0,790,795,3,138,69,0,791,792,5,17,0,0,792,794,3,138,69,0,793,791,1,0,0,
	0,794,797,1,0,0,0,795,793,1,0,0,0,795,796,1,0,0,0,796,799,1,0,0,0,797,795,
	1,0,0,0,798,790,1,0,0,0,798,799,1,0,0,0,799,801,1,0,0,0,800,802,5,17,0,
	0,801,800,1,0,0,0,801,802,1,0,0,0,802,803,1,0,0,0,803,804,5,21,0,0,804,
	141,1,0,0,0,805,806,5,49,0,0,806,807,5,22,0,0,807,808,5,98,0,0,808,809,
	3,144,72,0,809,143,1,0,0,0,810,814,5,20,0,0,811,813,3,146,73,0,812,811,
	1,0,0,0,813,816,1,0,0,0,814,812,1,0,0,0,814,815,1,0,0,0,815,817,1,0,0,0,
	816,814,1,0,0,0,817,818,5,21,0,0,818,145,1,0,0,0,819,820,3,16,8,0,820,821,
	3,148,74,0,821,147,1,0,0,0,822,823,3,94,47,0,823,824,3,150,75,0,824,825,
	5,2,0,0,825,843,1,0,0,0,826,828,3,8,4,0,827,829,5,2,0,0,828,827,1,0,0,0,
	828,829,1,0,0,0,829,843,1,0,0,0,830,832,3,32,16,0,831,833,5,2,0,0,832,831,
	1,0,0,0,832,833,1,0,0,0,833,843,1,0,0,0,834,836,3,10,5,0,835,837,5,2,0,
	0,836,835,1,0,0,0,836,837,1,0,0,0,837,843,1,0,0,0,838,840,3,142,71,0,839,
	841,5,2,0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,843,1,0,0,0,842,822,1,0,
	0,0,842,826,1,0,0,0,842,830,1,0,0,0,842,834,1,0,0,0,842,838,1,0,0,0,843,
	149,1,0,0,0,844,847,3,152,76,0,845,847,3,154,77,0,846,844,1,0,0,0,846,845,
	1,0,0,0,847,151,1,0,0,0,848,849,5,98,0,0,849,850,5,42,0,0,850,852,5,43,
	0,0,851,853,3,156,78,0,852,851,1,0,0,0,852,853,1,0,0,0,853,153,1,0,0,0,
	854,855,3,72,36,0,855,155,1,0,0,0,856,857,5,50,0,0,857,858,3,138,69,0,858,
	157,1,0,0,0,859,863,5,20,0,0,860,862,3,160,80,0,861,860,1,0,0,0,862,865,
	1,0,0,0,863,861,1,0,0,0,863,864,1,0,0,0,864,866,1,0,0,0,865,863,1,0,0,0,
	866,867,5,21,0,0,867,159,1,0,0,0,868,873,3,162,81,0,869,873,3,8,4,0,870,
	873,3,12,6,0,871,873,3,168,84,0,872,868,1,0,0,0,872,869,1,0,0,0,872,870,
	1,0,0,0,872,871,1,0,0,0,873,161,1,0,0,0,874,875,3,164,82,0,875,876,5,2,
	0,0,876,163,1,0,0,0,877,878,3,166,83,0,878,879,3,94,47,0,879,880,3,72,36,
	0,880,165,1,0,0,0,881,883,3,100,50,0,882,881,1,0,0,0,883,886,1,0,0,0,884,
	882,1,0,0,0,884,885,1,0,0,0,885,167,1,0,0,0,886,884,1,0,0,0,887,965,3,158,
	79,0,888,889,5,97,0,0,889,892,3,198,99,0,890,891,5,51,0,0,891,893,3,198,
	99,0,892,890,1,0,0,0,892,893,1,0,0,0,893,894,1,0,0,0,894,895,5,2,0,0,895,
	965,1,0,0,0,896,897,5,52,0,0,897,898,3,190,95,0,898,901,3,168,84,0,899,
	900,5,53,0,0,900,902,3,168,84,0,901,899,1,0,0,0,901,902,1,0,0,0,902,965,
	1,0,0,0,903,904,5,54,0,0,904,905,5,42,0,0,905,906,3,182,91,0,906,907,5,
	43,0,0,907,908,3,168,84,0,908,965,1,0,0,0,909,910,5,55,0,0,910,911,3,190,
	95,0,911,912,3,168,84,0,912,965,1,0,0,0,913,914,5,56,0,0,914,915,3,168,
	84,0,915,916,5,55,0,0,916,917,3,190,95,0,917,918,5,2,0,0,918,965,1,0,0,
	0,919,920,5,57,0,0,920,928,3,158,79,0,921,922,3,170,85,0,922,923,5,58,0,
	0,923,924,3,158,79,0,924,929,1,0,0,0,925,929,3,170,85,0,926,927,5,58,0,
	0,927,929,3,158,79,0,928,921,1,0,0,0,928,925,1,0,0,0,928,926,1,0,0,0,929,
	965,1,0,0,0,930,931,5,59,0,0,931,932,3,190,95,0,932,933,3,176,88,0,933,
	965,1,0,0,0,934,935,5,29,0,0,935,936,3,190,95,0,936,937,3,158,79,0,937,
	965,1,0,0,0,938,940,5,60,0,0,939,941,3,198,99,0,940,939,1,0,0,0,940,941,
	1,0,0,0,941,942,1,0,0,0,942,965,5,2,0,0,943,944,5,61,0,0,944,945,3,198,
	99,0,945,946,5,2,0,0,946,965,1,0,0,0,947,949,5,62,0,0,948,950,5,98,0,0,
	949,948,1,0,0,0,949,950,1,0,0,0,950,951,1,0,0,0,951,965,5,2,0,0,952,954,
	5,63,0,0,953,955,5,98,0,0,954,953,1,0,0,0,954,955,1,0,0,0,955,956,1,0,0,
	0,956,965,5,2,0,0,957,965,5,2,0,0,958,959,3,194,97,0,959,960,5,2,0,0,960,
	965,1,0,0,0,961,962,5,98,0,0,962,963,5,51,0,0,963,965,3,168,84,0,964,887,
	1,0,0,0,964,888,1,0,0,0,964,896,1,0,0,0,964,903,1,0,0,0,964,909,1,0,0,0,
	964,913,1,0,0,0,964,919,1,0,0,0,964,930,1,0,0,0,964,934,1,0,0,0,964,938,
	1,0,0,0,964,943,1,0,0,0,964,947,1,0,0,0,964,952,1,0,0,0,964,957,1,0,0,0,
	964,958,1,0,0,0,964,961,1,0,0,0,965,169,1,0,0,0,966,970,3,172,86,0,967,
	969,3,172,86,0,968,967,1,0,0,0,969,972,1,0,0,0,970,968,1,0,0,0,970,971,
	1,0,0,0,971,171,1,0,0,0,972,970,1,0,0,0,973,974,5,64,0,0,974,975,5,42,0,
	0,975,976,3,174,87,0,976,977,5,43,0,0,977,978,3,158,79,0,978,173,1,0,0,
	0,979,980,3,166,83,0,980,981,3,94,47,0,981,982,3,80,40,0,982,175,1,0,0,
	0,983,987,5,20,0,0,984,986,3,178,89,0,985,984,1,0,0,0,986,989,1,0,0,0,987,
	985,1,0,0,0,987,988,1,0,0,0,988,993,1,0,0,0,989,987,1,0,0,0,990,992,3,180,
	90,0,991,990,1,0,0,0,992,995,1,0,0,0,993,991,1,0,0,0,993,994,1,0,0,0,994,
	996,1,0,0,0,995,993,1,0,0,0,996,997,5,21,0,0,997,177,1,0,0,0,998,1000,3,
	180,90,0,999,998,1,0,0,0,1000,1001,1,0,0,0,1001,999,1,0,0,0,1001,1002,1,
	0,0,0,1002,1006,1,0,0,0,1003,1005,3,160,80,0,1004,1003,1,0,0,0,1005,1008,
	1,0,0,0,1006,1004,1,0,0,0,1006,1007,1,0,0,0,1007,179,1,0,0,0,1008,1006,
	1,0,0,0,1009,1010,5,65,0,0,1010,1011,3,196,98,0,1011,1012,5,51,0,0,1012,
	1020,1,0,0,0,1013,1014,5,65,0,0,1014,1015,3,90,45,0,1015,1016,5,51,0,0,
	1016,1020,1,0,0,0,1017,1018,5,50,0,0,1018,1020,5,51,0,0,1019,1009,1,0,0,
	0,1019,1013,1,0,0,0,1019,1017,1,0,0,0,1020,181,1,0,0,0,1021,1034,3,186,
	93,0,1022,1024,3,184,92,0,1023,1022,1,0,0,0,1023,1024,1,0,0,0,1024,1025,
	1,0,0,0,1025,1027,5,2,0,0,1026,1028,3,198,99,0,1027,1026,1,0,0,0,1027,1028,
	1,0,0,0,1028,1029,1,0,0,0,1029,1031,5,2,0,0,1030,1032,3,188,94,0,1031,1030,
	1,0,0,0,1031,1032,1,0,0,0,1032,1034,1,0,0,0,1033,1021,1,0,0,0,1033,1023,
	1,0,0,0,1034,183,1,0,0,0,1035,1038,3,164,82,0,1036,1038,3,192,96,0,1037,
	1035,1,0,0,0,1037,1036,1,0,0,0,1038,185,1,0,0,0,1039,1040,3,166,83,0,1040,
	1041,3,94,47,0,1041,1042,5,98,0,0,1042,1043,5,51,0,0,1043,1044,3,198,99,
	0,1044,187,1,0,0,0,1045,1046,3,192,96,0,1046,189,1,0,0,0,1047,1048,5,42,
	0,0,1048,1049,3,198,99,0,1049,1050,5,43,0,0,1050,191,1,0,0,0,1051,1056,
	3,198,99,0,1052,1053,5,17,0,0,1053,1055,3,198,99,0,1054,1052,1,0,0,0,1055,
	1058,1,0,0,0,1056,1054,1,0,0,0,1056,1057,1,0,0,0,1057,193,1,0,0,0,1058,
	1056,1,0,0,0,1059,1060,3,198,99,0,1060,195,1,0,0,0,1061,1062,3,198,99,0,
	1062,197,1,0,0,0,1063,1064,6,99,-1,0,1064,1077,3,200,100,0,1065,1066,7,
	5,0,0,1066,1077,3,198,99,17,1067,1068,7,6,0,0,1068,1077,3,198,99,16,1069,
	1070,5,42,0,0,1070,1071,3,94,47,0,1071,1072,5,43,0,0,1072,1073,3,198,99,
	15,1073,1077,1,0,0,0,1074,1075,5,66,0,0,1075,1077,3,202,101,0,1076,1063,
	1,0,0,0,1076,1065,1,0,0,0,1076,1067,1,0,0,0,1076,1069,1,0,0,0,1076,1074,
	1,0,0,0,1077,1204,1,0,0,0,1078,1079,10,13,0,0,1079,1080,7,7,0,0,1080,1203,
	3,198,99,14,1081,1082,10,12,0,0,1082,1083,7,8,0,0,1083,1203,3,198,99,13,
	1084,1092,10,11,0,0,1085,1086,5,16,0,0,1086,1093,5,16,0,0,1087,1088,5,18,
	0,0,1088,1089,5,18,0,0,1089,1093,5,18,0,0,1090,1091,5,18,0,0,1091,1093,
	5,18,0,0,1092,1085,1,0,0,0,1092,1087,1,0,0,0,1092,1090,1,0,0,0,1093,1094,
	1,0,0,0,1094,1203,3,198,99,12,1095,1102,10,10,0,0,1096,1097,5,16,0,0,1097,
	1103,5,27,0,0,1098,1099,5,18,0,0,1099,1103,5,27,0,0,1100,1103,5,18,0,0,
	1101,1103,5,16,0,0,1102,1096,1,0,0,0,1102,1098,1,0,0,0,1102,1100,1,0,0,
	0,1102,1101,1,0,0,0,1103,1104,1,0,0,0,1104,1203,3,198,99,11,1105,1106,10,
	8,0,0,1106,1107,7,9,0,0,1107,1203,3,198,99,9,1108,1109,10,7,0,0,1109,1110,
	5,19,0,0,1110,1203,3,198,99,8,1111,1112,10,6,0,0,1112,1113,5,78,0,0,1113,
	1203,3,198,99,7,1114,1115,10,5,0,0,1115,1116,5,79,0,0,1116,1203,3,198,99,
	6,1117,1118,10,4,0,0,1118,1119,5,80,0,0,1119,1203,3,198,99,5,1120,1121,
	10,3,0,0,1121,1122,5,81,0,0,1122,1203,3,198,99,4,1123,1124,10,2,0,0,1124,
	1125,5,40,0,0,1125,1126,3,198,99,0,1126,1127,5,51,0,0,1127,1128,3,198,99,
	3,1128,1203,1,0,0,0,1129,1149,10,1,0,0,1130,1150,5,82,0,0,1131,1150,5,83,
	0,0,1132,1150,5,84,0,0,1133,1150,5,85,0,0,1134,1150,5,86,0,0,1135,1150,
	5,87,0,0,1136,1150,5,88,0,0,1137,1150,5,27,0,0,1138,1139,5,18,0,0,1139,
	1140,5,18,0,0,1140,1150,5,27,0,0,1141,1142,5,18,0,0,1142,1143,5,18,0,0,
	1143,1144,5,18,0,0,1144,1150,5,27,0,0,1145,1146,5,16,0,0,1146,1147,5,16,
	0,0,1147,1150,5,27,0,0,1148,1150,5,89,0,0,1149,1130,1,0,0,0,1149,1131,1,
	0,0,0,1149,1132,1,0,0,0,1149,1133,1,0,0,0,1149,1134,1,0,0,0,1149,1135,1,
	0,0,0,1149,1136,1,0,0,0,1149,1137,1,0,0,0,1149,1138,1,0,0,0,1149,1141,1,
	0,0,0,1149,1145,1,0,0,0,1149,1148,1,0,0,0,1150,1151,1,0,0,0,1151,1203,3,
	198,99,2,1152,1153,10,26,0,0,1153,1154,5,5,0,0,1154,1203,5,98,0,0,1155,
	1156,10,25,0,0,1156,1157,5,5,0,0,1157,1203,5,45,0,0,1158,1159,10,24,0,0,
	1159,1160,5,5,0,0,1160,1161,5,41,0,0,1161,1163,5,42,0,0,1162,1164,3,192,
	96,0,1163,1162,1,0,0,0,1163,1164,1,0,0,0,1164,1165,1,0,0,0,1165,1203,5,
	43,0,0,1166,1167,10,23,0,0,1167,1168,5,5,0,0,1168,1169,5,66,0,0,1169,1170,
	5,98,0,0,1170,1172,5,42,0,0,1171,1173,3,192,96,0,1172,1171,1,0,0,0,1172,
	1173,1,0,0,0,1173,1174,1,0,0,0,1174,1203,5,43,0,0,1175,1176,10,22,0,0,1176,
	1177,5,5,0,0,1177,1178,5,41,0,0,1178,1179,5,5,0,0,1179,1181,5,98,0,0,1180,
	1182,3,216,108,0,1181,1180,1,0,0,0,1181,1182,1,0,0,0,1182,1203,1,0,0,0,
	1183,1184,10,21,0,0,1184,1185,5,5,0,0,1185,1203,3,208,104,0,1186,1187,10,
	20,0,0,1187,1188,5,23,0,0,1188,1189,3,198,99,0,1189,1190,5,24,0,0,1190,
	1203,1,0,0,0,1191,1192,10,19,0,0,1192,1194,5,42,0,0,1193,1195,3,192,96,
	0,1194,1193,1,0,0,0,1194,1195,1,0,0,0,1195,1196,1,0,0,0,1196,1203,5,43,
	0,0,1197,1198,10,18,0,0,1198,1203,7,10,0,0,1199,1200,10,9,0,0,1200,1201,
	5,75,0,0,1201,1203,3,94,47,0,1202,1078,1,0,0,0,1202,1081,1,0,0,0,1202,1084,
	1,0,0,0,1202,1095,1,0,0,0,1202,1105,1,0,0,0,1202,1108,1,0,0,0,1202,1111,
	1,0,0,0,1202,1114,1,0,0,0,1202,1117,1,0,0,0,1202,1120,1,0,0,0,1202,1123,
	1,0,0,0,1202,1129,1,0,0,0,1202,1152,1,0,0,0,1202,1155,1,0,0,0,1202,1158,
	1,0,0,0,1202,1166,1,0,0,0,1202,1175,1,0,0,0,1202,1183,1,0,0,0,1202,1186,
	1,0,0,0,1202,1191,1,0,0,0,1202,1197,1,0,0,0,1202,1199,1,0,0,0,1203,1206,
	1,0,0,0,1204,1202,1,0,0,0,1204,1205,1,0,0,0,1205,199,1,0,0,0,1206,1204,
	1,0,0,0,1207,1208,5,42,0,0,1208,1209,3,198,99,0,1209,1210,5,43,0,0,1210,
	1223,1,0,0,0,1211,1223,5,45,0,0,1212,1223,5,41,0,0,1213,1223,3,122,61,0,
	1214,1223,5,98,0,0,1215,1216,3,94,47,0,1216,1217,5,5,0,0,1217,1218,5,7,
	0,0,1218,1223,1,0,0,0,1219,1220,5,25,0,0,1220,1221,5,5,0,0,1221,1223,5,
	7,0,0,1222,1207,1,0,0,0,1222,1211,1,0,0,0,1222,1212,1,0,0,0,1222,1213,1,
	0,0,0,1222,1214,1,0,0,0,1222,1215,1,0,0,0,1222,1219,1,0,0,0,1223,201,1,
	0,0,0,1224,1225,3,214,107,0,1225,1226,3,204,102,0,1226,1227,3,212,106,0,
	1227,1234,1,0,0,0,1228,1231,3,204,102,0,1229,1232,3,210,105,0,1230,1232,
	3,212,106,0,1231,1229,1,0,0,0,1231,1230,1,0,0,0,1232,1234,1,0,0,0,1233,
	1224,1,0,0,0,1233,1228,1,0,0,0,1234,203,1,0,0,0,1235,1238,3,96,48,0,1236,
	1238,3,98,49,0,1237,1235,1,0,0,0,1237,1236,1,0,0,0,1238,205,1,0,0,0,1239,
	1241,3,214,107,0,1240,1239,1,0,0,0,1240,1241,1,0,0,0,1241,1242,1,0,0,0,
	1242,1243,5,98,0,0,1243,1244,3,212,106,0,1244,207,1,0,0,0,1245,1246,3,214,
	107,0,1246,1247,5,98,0,0,1247,1248,3,216,108,0,1248,209,1,0,0,0,1249,1277,
	5,23,0,0,1250,1255,5,24,0,0,1251,1252,5,23,0,0,1252,1254,5,24,0,0,1253,
	1251,1,0,0,0,1254,1257,1,0,0,0,1255,1253,1,0,0,0,1255,1256,1,0,0,0,1256,
	1258,1,0,0,0,1257,1255,1,0,0,0,1258,1278,3,84,42,0,1259,1260,3,198,99,0,
	1260,1267,5,24,0,0,1261,1262,5,23,0,0,1262,1263,3,198,99,0,1263,1264,5,
	24,0,0,1264,1266,1,0,0,0,1265,1261,1,0,0,0,1266,1269,1,0,0,0,1267,1265,
	1,0,0,0,1267,1268,1,0,0,0,1268,1274,1,0,0,0,1269,1267,1,0,0,0,1270,1271,
	5,23,0,0,1271,1273,5,24,0,0,1272,1270,1,0,0,0,1273,1276,1,0,0,0,1274,1272,
	1,0,0,0,1274,1275,1,0,0,0,1275,1278,1,0,0,0,1276,1274,1,0,0,0,1277,1250,
	1,0,0,0,1277,1259,1,0,0,0,1278,211,1,0,0,0,1279,1281,3,216,108,0,1280,1282,
	3,36,18,0,1281,1280,1,0,0,0,1281,1282,1,0,0,0,1282,213,1,0,0,0,1283,1284,
	5,16,0,0,1284,1285,3,34,17,0,1285,1286,5,18,0,0,1286,215,1,0,0,0,1287,1289,
	5,42,0,0,1288,1290,3,192,96,0,1289,1288,1,0,0,0,1289,1290,1,0,0,0,1290,
	1291,1,0,0,0,1291,1292,5,43,0,0,1292,217,1,0,0,0,140,219,224,230,241,246,
	253,259,262,267,271,275,283,289,299,304,313,321,328,333,336,339,348,352,
	356,359,365,371,375,384,391,400,407,413,421,430,440,444,448,458,464,472,
	481,491,496,500,507,512,519,527,539,545,552,559,570,575,583,587,589,605,
	618,626,629,633,638,642,649,657,666,668,675,680,691,695,701,706,712,721,
	727,734,743,752,759,762,769,777,787,795,798,801,814,828,832,836,840,842,
	846,852,863,872,884,892,901,928,940,949,954,964,970,987,993,1001,1006,1019,
	1023,1027,1031,1033,1037,1056,1076,1092,1102,1149,1163,1172,1181,1194,1202,
	1204,1222,1231,1233,1237,1240,1255,1267,1274,1277,1281,1289];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(JavaParser._serializedATN);
		}

		return JavaParser.__ATN;
	}


	static DecisionsToDFA = JavaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(JavaParser.EOF, 0);
	}
	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
	public typeDeclaration_list(): TypeDeclarationContext[] {
		return this.getTypedRuleContexts(TypeDeclarationContext) as TypeDeclarationContext[];
	}
	public typeDeclaration(i: number): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, i) as TypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_compilationUnit;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_packageDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_importDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public classOrInterfaceModifier_list(): ClassOrInterfaceModifierContext[] {
		return this.getTypedRuleContexts(ClassOrInterfaceModifierContext) as ClassOrInterfaceModifierContext[];
	}
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, i) as ClassOrInterfaceModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(JavaParser.ENUM, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		return this.getTypedRuleContext(NormalInterfaceDeclarationContext, 0) as NormalInterfaceDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceDeclaration) {
	 		listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceDeclaration) {
	 		listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classOrInterfaceModifier;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassOrInterfaceModifier) {
	 		listener.enterClassOrInterfaceModifier(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassOrInterfaceModifier) {
	 		listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifiersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_modifiers;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterModifiers) {
	 		listener.enterModifiers(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitModifiers) {
	 		listener.exitModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitModifiers) {
			return visitor.visitModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeParameters;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public typeBound(): TypeBoundContext {
		return this.getTypedRuleContext(TypeBoundContext, 0) as TypeBoundContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeParameter;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeBound;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeBound) {
	 		listener.enterTypeBound(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeBound) {
	 		listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumConstants(): EnumConstantsContext {
		return this.getTypedRuleContext(EnumConstantsContext, 0) as EnumConstantsContext;
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		return this.getTypedRuleContext(EnumBodyDeclarationsContext, 0) as EnumBodyDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumConstant_list(): EnumConstantContext[] {
		return this.getTypedRuleContexts(EnumConstantContext) as EnumConstantContext[];
	}
	public enumConstant(i: number): EnumConstantContext {
		return this.getTypedRuleContext(EnumConstantContext, i) as EnumConstantContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumConstants;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumConstants) {
	 		listener.enterEnumConstants(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumConstants) {
	 		listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public annotations(): AnnotationsContext {
		return this.getTypedRuleContext(AnnotationsContext, 0) as AnnotationsContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumConstant;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumConstant) {
	 		listener.enterEnumConstant(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumConstant) {
	 		listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumBodyDeclarations;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumBodyDeclarations) {
	 		listener.enterEnumBodyDeclarations(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumBodyDeclarations) {
	 		listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getTypedRuleContext(InterfaceBodyContext, 0) as InterfaceBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_normalInterfaceDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterNormalInterfaceDeclaration) {
	 		listener.enterNormalInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitNormalInterfaceDeclaration) {
	 		listener.exitNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeList;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassBody) {
	 		listener.enterClassBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassBody) {
	 		listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceBodyDeclaration_list(): InterfaceBodyDeclarationContext[] {
		return this.getTypedRuleContexts(InterfaceBodyDeclarationContext) as InterfaceBodyDeclarationContext[];
	}
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext {
		return this.getTypedRuleContext(InterfaceBodyDeclarationContext, i) as InterfaceBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceBody) {
	 		listener.enterInterfaceBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceBody) {
	 		listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public modifiers(): ModifiersContext {
		return this.getTypedRuleContext(ModifiersContext, 0) as ModifiersContext;
	}
	public member(): MemberContext {
		return this.getTypedRuleContext(MemberContext, 0) as MemberContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classBodyDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassBodyDeclaration) {
	 		listener.enterClassBodyDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassBodyDeclaration) {
	 		listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		return this.getTypedRuleContext(GenericMethodDeclarationContext, 0) as GenericMethodDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
	public fieldDeclaration(): FieldDeclarationContext {
		return this.getTypedRuleContext(FieldDeclarationContext, 0) as FieldDeclarationContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_member;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterMember) {
	 		listener.enterMember(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitMember) {
	 		listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public methodDeclarationRest(): MethodDeclarationRestContext {
		return this.getTypedRuleContext(MethodDeclarationRestContext, 0) as MethodDeclarationRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodDeclarationRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterMethodDeclarationRest) {
	 		listener.enterMethodDeclarationRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitMethodDeclarationRest) {
	 		listener.exitMethodDeclarationRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMethodDeclarationRest) {
			return visitor.visitMethodDeclarationRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_genericMethodDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterGenericMethodDeclaration) {
	 		listener.enterGenericMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitGenericMethodDeclaration) {
	 		listener.exitGenericMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_fieldDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterFieldDeclaration) {
	 		listener.enterFieldDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitFieldDeclaration) {
	 		listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getTypedRuleContext(ConstructorBodyContext, 0) as ConstructorBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constructorDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstructorDeclaration) {
	 		listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstructorDeclaration) {
	 		listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public modifiers(): ModifiersContext {
		return this.getTypedRuleContext(ModifiersContext, 0) as ModifiersContext;
	}
	public interfaceMemberDecl(): InterfaceMemberDeclContext {
		return this.getTypedRuleContext(InterfaceMemberDeclContext, 0) as InterfaceMemberDeclContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceBodyDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceBodyDeclaration) {
	 		listener.enterInterfaceBodyDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceBodyDeclaration) {
	 		listener.exitInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext {
		return this.getTypedRuleContext(InterfaceMethodOrFieldDeclContext, 0) as InterfaceMethodOrFieldDeclContext;
	}
	public interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext {
		return this.getTypedRuleContext(InterfaceGenericMethodDeclContext, 0) as InterfaceGenericMethodDeclContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public voidInterfaceMethodDeclaratorRest(): VoidInterfaceMethodDeclaratorRestContext {
		return this.getTypedRuleContext(VoidInterfaceMethodDeclaratorRestContext, 0) as VoidInterfaceMethodDeclaratorRestContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMemberDecl;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceMemberDecl) {
	 		listener.enterInterfaceMemberDecl(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceMemberDecl) {
	 		listener.exitInterfaceMemberDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDecl) {
			return visitor.visitInterfaceMemberDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodOrFieldDeclContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext {
		return this.getTypedRuleContext(InterfaceMethodOrFieldRestContext, 0) as InterfaceMethodOrFieldRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMethodOrFieldDecl;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceMethodOrFieldDecl) {
	 		listener.enterInterfaceMethodOrFieldDecl(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceMethodOrFieldDecl) {
	 		listener.exitInterfaceMethodOrFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodOrFieldDecl) {
			return visitor.visitInterfaceMethodOrFieldDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodOrFieldRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantDeclaratorsRest(): ConstantDeclaratorsRestContext {
		return this.getTypedRuleContext(ConstantDeclaratorsRestContext, 0) as ConstantDeclaratorsRestContext;
	}
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext {
		return this.getTypedRuleContext(InterfaceMethodDeclaratorRestContext, 0) as InterfaceMethodDeclaratorRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMethodOrFieldRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceMethodOrFieldRest) {
	 		listener.enterInterfaceMethodOrFieldRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceMethodOrFieldRest) {
	 		listener.exitInterfaceMethodOrFieldRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodOrFieldRest) {
			return visitor.visitInterfaceMethodOrFieldRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoidMethodDeclaratorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_voidMethodDeclaratorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVoidMethodDeclaratorRest) {
	 		listener.enterVoidMethodDeclaratorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVoidMethodDeclaratorRest) {
	 		listener.exitVoidMethodDeclaratorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVoidMethodDeclaratorRest) {
			return visitor.visitVoidMethodDeclaratorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclaratorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMethodDeclaratorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceMethodDeclaratorRest) {
	 		listener.enterInterfaceMethodDeclaratorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceMethodDeclaratorRest) {
	 		listener.exitInterfaceMethodDeclaratorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaratorRest) {
			return visitor.visitInterfaceMethodDeclaratorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceGenericMethodDeclContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext {
		return this.getTypedRuleContext(InterfaceMethodDeclaratorRestContext, 0) as InterfaceMethodDeclaratorRestContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceGenericMethodDecl;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInterfaceGenericMethodDecl) {
	 		listener.enterInterfaceGenericMethodDecl(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInterfaceGenericMethodDecl) {
	 		listener.exitInterfaceGenericMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceGenericMethodDecl) {
			return visitor.visitInterfaceGenericMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoidInterfaceMethodDeclaratorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_voidInterfaceMethodDeclaratorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVoidInterfaceMethodDeclaratorRest) {
	 		listener.enterVoidInterfaceMethodDeclaratorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVoidInterfaceMethodDeclaratorRest) {
	 		listener.exitVoidInterfaceMethodDeclaratorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVoidInterfaceMethodDeclaratorRest) {
			return visitor.visitVoidInterfaceMethodDeclaratorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		return this.getTypedRuleContext(ConstantDeclaratorRestContext, 0) as ConstantDeclaratorRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constantDeclarator;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstantDeclarator) {
	 		listener.enterConstantDeclarator(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstantDeclarator) {
	 		listener.exitConstantDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarator_list(): VariableDeclaratorContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorContext) as VariableDeclaratorContext[];
	}
	public variableDeclarator(i: number): VariableDeclaratorContext {
		return this.getTypedRuleContext(VariableDeclaratorContext, i) as VariableDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclarators;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableDeclarators) {
	 		listener.enterVariableDeclarators(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableDeclarators) {
	 		listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclarator;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableDeclarator) {
	 		listener.enterVariableDeclarator(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableDeclarator) {
	 		listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorsRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		return this.getTypedRuleContext(ConstantDeclaratorRestContext, 0) as ConstantDeclaratorRestContext;
	}
	public constantDeclarator_list(): ConstantDeclaratorContext[] {
		return this.getTypedRuleContexts(ConstantDeclaratorContext) as ConstantDeclaratorContext[];
	}
	public constantDeclarator(i: number): ConstantDeclaratorContext {
		return this.getTypedRuleContext(ConstantDeclaratorContext, i) as ConstantDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constantDeclaratorsRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstantDeclaratorsRest) {
	 		listener.enterConstantDeclaratorsRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstantDeclaratorsRest) {
	 		listener.exitConstantDeclaratorsRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantDeclaratorsRest) {
			return visitor.visitConstantDeclaratorsRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constantDeclaratorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstantDeclaratorRest) {
	 		listener.enterConstantDeclaratorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstantDeclaratorRest) {
	 		listener.exitConstantDeclaratorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantDeclaratorRest) {
			return visitor.visitConstantDeclaratorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclaratorId;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableDeclaratorId) {
	 		listener.enterVariableDeclaratorId(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableDeclaratorId) {
	 		listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableInitializer;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableInitializer) {
	 		listener.enterVariableInitializer(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableInitializer) {
	 		listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableInitializer_list(): VariableInitializerContext[] {
		return this.getTypedRuleContexts(VariableInitializerContext) as VariableInitializerContext[];
	}
	public variableInitializer(i: number): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, i) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arrayInitializer;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterArrayInitializer) {
	 		listener.enterArrayInitializer(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitArrayInitializer) {
	 		listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_modifier;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterModifier) {
	 		listener.enterModifier(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitModifier) {
	 		listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_packageOrTypeName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterPackageOrTypeName) {
	 		listener.enterPackageOrTypeName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitPackageOrTypeName) {
	 		listener.exitPackageOrTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumConstantName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnumConstantName) {
	 		listener.enterEnumConstantName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnumConstantName) {
	 		listener.exitEnumConstantName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_type;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(JavaParser.Identifier, i);
	}
	public typeArguments_list(): TypeArgumentsContext[] {
		return this.getTypedRuleContexts(TypeArgumentsContext) as TypeArgumentsContext[];
	}
	public typeArguments(i: number): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, i) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classOrInterfaceType;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassOrInterfaceType) {
	 		listener.enterClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassOrInterfaceType) {
	 		listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_primitiveType;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableModifier;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableModifier) {
	 		listener.enterVariableModifier(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableModifier) {
	 		listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeArguments;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeArgument;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_qualifiedNameList;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterQualifiedNameList) {
	 		listener.enterQualifiedNameList(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitQualifiedNameList) {
	 		listener.exitQualifiedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameterDecls(): FormalParameterDeclsContext {
		return this.getTypedRuleContext(FormalParameterDeclsContext, 0) as FormalParameterDeclsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameters;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterFormalParameters) {
	 		listener.enterFormalParameters(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitFormalParameters) {
	 		listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterDeclsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableModifiers(): VariableModifiersContext {
		return this.getTypedRuleContext(VariableModifiersContext, 0) as VariableModifiersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public formalParameterDeclsRest(): FormalParameterDeclsRestContext {
		return this.getTypedRuleContext(FormalParameterDeclsRestContext, 0) as FormalParameterDeclsRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameterDecls;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterFormalParameterDecls) {
	 		listener.enterFormalParameterDecls(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitFormalParameterDecls) {
	 		listener.exitFormalParameterDecls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameterDecls) {
			return visitor.visitFormalParameterDecls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterDeclsRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public formalParameterDecls(): FormalParameterDeclsContext {
		return this.getTypedRuleContext(FormalParameterDeclsContext, 0) as FormalParameterDeclsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameterDeclsRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterFormalParameterDeclsRest) {
	 		listener.enterFormalParameterDeclsRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitFormalParameterDeclsRest) {
	 		listener.exitFormalParameterDeclsRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameterDeclsRest) {
			return visitor.visitFormalParameterDeclsRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterMethodBody) {
	 		listener.enterMethodBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitMethodBody) {
	 		listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		return this.getTypedRuleContext(ExplicitConstructorInvocationContext, 0) as ExplicitConstructorInvocationContext;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constructorBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstructorBody) {
	 		listener.enterConstructorBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstructorBody) {
	 		listener.exitConstructorBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_explicitConstructorInvocation;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterExplicitConstructorInvocation) {
	 		listener.enterExplicitConstructorInvocation(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitExplicitConstructorInvocation) {
	 		listener.exitExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(JavaParser.Identifier, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_qualifiedName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
	public FloatingPointLiteral(): TerminalNode {
		return this.getToken(JavaParser.FloatingPointLiteral, 0);
	}
	public CharacterLiteral(): TerminalNode {
		return this.getToken(JavaParser.CharacterLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(JavaParser.StringLiteral, 0);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_literal;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HexLiteral(): TerminalNode {
		return this.getToken(JavaParser.HexLiteral, 0);
	}
	public OctalLiteral(): TerminalNode {
		return this.getToken(JavaParser.OctalLiteral, 0);
	}
	public DecimalLiteral(): TerminalNode {
		return this.getToken(JavaParser.DecimalLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_integerLiteral;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_booleanLiteral;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotations;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotations) {
	 		listener.enterAnnotations(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotations) {
	 		listener.exitAnnotations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotations) {
			return visitor.visitAnnotations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationName(): AnnotationNameContext {
		return this.getTypedRuleContext(AnnotationNameContext, 0) as AnnotationNameContext;
	}
	public elementValuePairs(): ElementValuePairsContext {
		return this.getTypedRuleContext(ElementValuePairsContext, 0) as ElementValuePairsContext;
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotation;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(JavaParser.Identifier, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationName) {
	 		listener.enterAnnotationName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationName) {
	 		listener.exitAnnotationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationName) {
			return visitor.visitAnnotationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValuePair_list(): ElementValuePairContext[] {
		return this.getTypedRuleContexts(ElementValuePairContext) as ElementValuePairContext[];
	}
	public elementValuePair(i: number): ElementValuePairContext {
		return this.getTypedRuleContext(ElementValuePairContext, i) as ElementValuePairContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValuePairs;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterElementValuePairs) {
	 		listener.enterElementValuePairs(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitElementValuePairs) {
	 		listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValuePair;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterElementValuePair) {
	 		listener.enterElementValuePair(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitElementValuePair) {
	 		listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getTypedRuleContext(ElementValueArrayInitializerContext, 0) as ElementValueArrayInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValue;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterElementValue) {
	 		listener.enterElementValue(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitElementValue) {
	 		listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValue_list(): ElementValueContext[] {
		return this.getTypedRuleContexts(ElementValueContext) as ElementValueContext[];
	}
	public elementValue(i: number): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, i) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValueArrayInitializer;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterElementValueArrayInitializer) {
	 		listener.enterElementValueArrayInitializer(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitElementValueArrayInitializer) {
	 		listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getTypedRuleContext(AnnotationTypeBodyContext, 0) as AnnotationTypeBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationTypeDeclaration) {
	 		listener.enterAnnotationTypeDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationTypeDeclaration) {
	 		listener.exitAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationTypeElementDeclaration_list(): AnnotationTypeElementDeclarationContext[] {
		return this.getTypedRuleContexts(AnnotationTypeElementDeclarationContext) as AnnotationTypeElementDeclarationContext[];
	}
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeElementDeclarationContext, i) as AnnotationTypeElementDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeBody;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationTypeBody) {
	 		listener.enterAnnotationTypeBody(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationTypeBody) {
	 		listener.exitAnnotationTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public modifiers(): ModifiersContext {
		return this.getTypedRuleContext(ModifiersContext, 0) as ModifiersContext;
	}
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		return this.getTypedRuleContext(AnnotationTypeElementRestContext, 0) as AnnotationTypeElementRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeElementDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationTypeElementDeclaration) {
	 		listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationTypeElementDeclaration) {
	 		listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		return this.getTypedRuleContext(AnnotationMethodOrConstantRestContext, 0) as AnnotationMethodOrConstantRestContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		return this.getTypedRuleContext(NormalInterfaceDeclarationContext, 0) as NormalInterfaceDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeElementRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationTypeElementRest) {
	 		listener.enterAnnotationTypeElementRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationTypeElementRest) {
	 		listener.exitAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationMethodRest(): AnnotationMethodRestContext {
		return this.getTypedRuleContext(AnnotationMethodRestContext, 0) as AnnotationMethodRestContext;
	}
	public annotationConstantRest(): AnnotationConstantRestContext {
		return this.getTypedRuleContext(AnnotationConstantRestContext, 0) as AnnotationConstantRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationMethodOrConstantRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationMethodOrConstantRest) {
	 		listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationMethodOrConstantRest) {
	 		listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public defaultValue(): DefaultValueContext {
		return this.getTypedRuleContext(DefaultValueContext, 0) as DefaultValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationMethodRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationMethodRest) {
	 		listener.enterAnnotationMethodRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationMethodRest) {
	 		listener.exitAnnotationMethodRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationConstantRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterAnnotationConstantRest) {
	 		listener.enterAnnotationConstantRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitAnnotationConstantRest) {
	 		listener.exitAnnotationConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_defaultValue;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterDefaultValue) {
	 		listener.enterDefaultValue(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitDefaultValue) {
	 		listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_block;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		return this.getTypedRuleContext(LocalVariableDeclarationStatementContext, 0) as LocalVariableDeclarationStatementContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_blockStatement;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterBlockStatement) {
	 		listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitBlockStatement) {
	 		listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_localVariableDeclarationStatement;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterLocalVariableDeclarationStatement) {
	 		listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitLocalVariableDeclarationStatement) {
	 		listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableModifiers(): VariableModifiersContext {
		return this.getTypedRuleContext(VariableModifiersContext, 0) as VariableModifiersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_localVariableDeclaration;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterLocalVariableDeclaration) {
	 		listener.enterLocalVariableDeclaration(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitLocalVariableDeclaration) {
	 		listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifiersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableModifiers;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterVariableModifiers) {
	 		listener.enterVariableModifiers(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitVariableModifiers) {
	 		listener.exitVariableModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableModifiers) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(JavaParser.ASSERT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public forControl(): ForControlContext {
		return this.getTypedRuleContext(ForControlContext, 0) as ForControlContext;
	}
	public catches(): CatchesContext {
		return this.getTypedRuleContext(CatchesContext, 0) as CatchesContext;
	}
	public switchBlock(): SwitchBlockContext {
		return this.getTypedRuleContext(SwitchBlockContext, 0) as SwitchBlockContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_statement;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}
	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_catches;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterCatches) {
	 		listener.enterCatches(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitCatches) {
	 		listener.exitCatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameter(): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, 0) as FormalParameterContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_catchClause;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterCatchClause) {
	 		listener.enterCatchClause(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitCatchClause) {
	 		listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableModifiers(): VariableModifiersContext {
		return this.getTypedRuleContext(VariableModifiersContext, 0) as VariableModifiersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameter;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterFormalParameter) {
	 		listener.enterFormalParameter(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitFormalParameter) {
	 		listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementGroupContext) as SwitchBlockStatementGroupContext[];
	}
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementGroupContext, i) as SwitchBlockStatementGroupContext;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchBlock;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterSwitchBlock) {
	 		listener.enterSwitchBlock(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitSwitchBlock) {
	 		listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchBlockStatementGroup;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterSwitchBlockStatementGroup) {
	 		listener.enterSwitchBlockStatementGroup(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitSwitchBlockStatementGroup) {
	 		listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public enumConstantName(): EnumConstantNameContext {
		return this.getTypedRuleContext(EnumConstantNameContext, 0) as EnumConstantNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchLabel;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterSwitchLabel) {
	 		listener.enterSwitchLabel(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitSwitchLabel) {
	 		listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enhancedForControl(): EnhancedForControlContext {
		return this.getTypedRuleContext(EnhancedForControlContext, 0) as EnhancedForControlContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_forControl;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterForControl) {
	 		listener.enterForControl(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitForControl) {
	 		listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_forInit;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterForInit) {
	 		listener.enterForInit(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitForInit) {
	 		listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableModifiers(): VariableModifiersContext {
		return this.getTypedRuleContext(VariableModifiersContext, 0) as VariableModifiersContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enhancedForControl;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterEnhancedForControl) {
	 		listener.enterEnhancedForControl(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitEnhancedForControl) {
	 		listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_forUpdate;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterForUpdate) {
	 		listener.enterForUpdate(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitForUpdate) {
	 		listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_parExpression;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterParExpression) {
	 		listener.enterParExpression(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitParExpression) {
	 		listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_expressionList;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_statementExpression;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterStatementExpression) {
	 		listener.enterStatementExpression(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitStatementExpression) {
	 		listener.exitStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constantExpression;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public creator(): CreatorContext {
		return this.getTypedRuleContext(CreatorContext, 0) as CreatorContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		return this.getTypedRuleContext(ExplicitGenericInvocationContext, 0) as ExplicitGenericInvocationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_expression;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_primary;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public createdName(): CreatedNameContext {
		return this.getTypedRuleContext(CreatedNameContext, 0) as CreatedNameContext;
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getTypedRuleContext(ClassCreatorRestContext, 0) as ClassCreatorRestContext;
	}
	public arrayCreatorRest(): ArrayCreatorRestContext {
		return this.getTypedRuleContext(ArrayCreatorRestContext, 0) as ArrayCreatorRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_creator;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterCreator) {
	 		listener.enterCreator(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitCreator) {
	 		listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_createdName;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterCreatedName) {
	 		listener.enterCreatedName(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitCreatedName) {
	 		listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getTypedRuleContext(ClassCreatorRestContext, 0) as ClassCreatorRestContext;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_innerCreator;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterInnerCreator) {
	 		listener.enterInnerCreator(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitInnerCreator) {
	 		listener.exitInnerCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaParser.Identifier, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_explicitGenericInvocation;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterExplicitGenericInvocation) {
	 		listener.enterExplicitGenericInvocation(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitExplicitGenericInvocation) {
	 		listener.exitExplicitGenericInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arrayCreatorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterArrayCreatorRest) {
	 		listener.enterArrayCreatorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitArrayCreatorRest) {
	 		listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classCreatorRest;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterClassCreatorRest) {
	 		listener.enterClassCreatorRest(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitClassCreatorRest) {
	 		listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_nonWildcardTypeArguments;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterNonWildcardTypeArguments) {
	 		listener.enterNonWildcardTypeArguments(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitNonWildcardTypeArguments) {
	 		listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arguments;
	}
	public enterRule(listener: JavaListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: JavaListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
