// Generated from g:/Thesis/programming/Test/src/tour/Demo/Java.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { CompilationUnitContext } from "./JavaParser.js";
import { PackageDeclarationContext } from "./JavaParser.js";
import { ImportDeclarationContext } from "./JavaParser.js";
import { TypeDeclarationContext } from "./JavaParser.js";
import { ClassDeclarationContext } from "./JavaParser.js";
import { EnumDeclarationContext } from "./JavaParser.js";
import { InterfaceDeclarationContext } from "./JavaParser.js";
import { ClassOrInterfaceModifierContext } from "./JavaParser.js";
import { ModifiersContext } from "./JavaParser.js";
import { TypeParametersContext } from "./JavaParser.js";
import { TypeParameterContext } from "./JavaParser.js";
import { TypeBoundContext } from "./JavaParser.js";
import { EnumBodyContext } from "./JavaParser.js";
import { EnumConstantsContext } from "./JavaParser.js";
import { EnumConstantContext } from "./JavaParser.js";
import { EnumBodyDeclarationsContext } from "./JavaParser.js";
import { NormalInterfaceDeclarationContext } from "./JavaParser.js";
import { TypeListContext } from "./JavaParser.js";
import { ClassBodyContext } from "./JavaParser.js";
import { InterfaceBodyContext } from "./JavaParser.js";
import { ClassBodyDeclarationContext } from "./JavaParser.js";
import { MemberContext } from "./JavaParser.js";
import { MethodDeclarationContext } from "./JavaParser.js";
import { MethodDeclarationRestContext } from "./JavaParser.js";
import { GenericMethodDeclarationContext } from "./JavaParser.js";
import { FieldDeclarationContext } from "./JavaParser.js";
import { ConstructorDeclarationContext } from "./JavaParser.js";
import { InterfaceBodyDeclarationContext } from "./JavaParser.js";
import { InterfaceMemberDeclContext } from "./JavaParser.js";
import { InterfaceMethodOrFieldDeclContext } from "./JavaParser.js";
import { InterfaceMethodOrFieldRestContext } from "./JavaParser.js";
import { VoidMethodDeclaratorRestContext } from "./JavaParser.js";
import { InterfaceMethodDeclaratorRestContext } from "./JavaParser.js";
import { InterfaceGenericMethodDeclContext } from "./JavaParser.js";
import { VoidInterfaceMethodDeclaratorRestContext } from "./JavaParser.js";
import { ConstantDeclaratorContext } from "./JavaParser.js";
import { VariableDeclaratorsContext } from "./JavaParser.js";
import { VariableDeclaratorContext } from "./JavaParser.js";
import { ConstantDeclaratorsRestContext } from "./JavaParser.js";
import { ConstantDeclaratorRestContext } from "./JavaParser.js";
import { VariableDeclaratorIdContext } from "./JavaParser.js";
import { VariableInitializerContext } from "./JavaParser.js";
import { ArrayInitializerContext } from "./JavaParser.js";
import { ModifierContext } from "./JavaParser.js";
import { PackageOrTypeNameContext } from "./JavaParser.js";
import { EnumConstantNameContext } from "./JavaParser.js";
import { TypeNameContext } from "./JavaParser.js";
import { TypeContext } from "./JavaParser.js";
import { ClassOrInterfaceTypeContext } from "./JavaParser.js";
import { PrimitiveTypeContext } from "./JavaParser.js";
import { VariableModifierContext } from "./JavaParser.js";
import { TypeArgumentsContext } from "./JavaParser.js";
import { TypeArgumentContext } from "./JavaParser.js";
import { QualifiedNameListContext } from "./JavaParser.js";
import { FormalParametersContext } from "./JavaParser.js";
import { FormalParameterDeclsContext } from "./JavaParser.js";
import { FormalParameterDeclsRestContext } from "./JavaParser.js";
import { MethodBodyContext } from "./JavaParser.js";
import { ConstructorBodyContext } from "./JavaParser.js";
import { ExplicitConstructorInvocationContext } from "./JavaParser.js";
import { QualifiedNameContext } from "./JavaParser.js";
import { LiteralContext } from "./JavaParser.js";
import { IntegerLiteralContext } from "./JavaParser.js";
import { BooleanLiteralContext } from "./JavaParser.js";
import { AnnotationsContext } from "./JavaParser.js";
import { AnnotationContext } from "./JavaParser.js";
import { AnnotationNameContext } from "./JavaParser.js";
import { ElementValuePairsContext } from "./JavaParser.js";
import { ElementValuePairContext } from "./JavaParser.js";
import { ElementValueContext } from "./JavaParser.js";
import { ElementValueArrayInitializerContext } from "./JavaParser.js";
import { AnnotationTypeDeclarationContext } from "./JavaParser.js";
import { AnnotationTypeBodyContext } from "./JavaParser.js";
import { AnnotationTypeElementDeclarationContext } from "./JavaParser.js";
import { AnnotationTypeElementRestContext } from "./JavaParser.js";
import { AnnotationMethodOrConstantRestContext } from "./JavaParser.js";
import { AnnotationMethodRestContext } from "./JavaParser.js";
import { AnnotationConstantRestContext } from "./JavaParser.js";
import { DefaultValueContext } from "./JavaParser.js";
import { BlockContext } from "./JavaParser.js";
import { BlockStatementContext } from "./JavaParser.js";
import { LocalVariableDeclarationStatementContext } from "./JavaParser.js";
import { LocalVariableDeclarationContext } from "./JavaParser.js";
import { VariableModifiersContext } from "./JavaParser.js";
import { StatementContext } from "./JavaParser.js";
import { CatchesContext } from "./JavaParser.js";
import { CatchClauseContext } from "./JavaParser.js";
import { FormalParameterContext } from "./JavaParser.js";
import { SwitchBlockContext } from "./JavaParser.js";
import { SwitchBlockStatementGroupContext } from "./JavaParser.js";
import { SwitchLabelContext } from "./JavaParser.js";
import { ForControlContext } from "./JavaParser.js";
import { ForInitContext } from "./JavaParser.js";
import { EnhancedForControlContext } from "./JavaParser.js";
import { ForUpdateContext } from "./JavaParser.js";
import { ParExpressionContext } from "./JavaParser.js";
import { ExpressionListContext } from "./JavaParser.js";
import { StatementExpressionContext } from "./JavaParser.js";
import { ConstantExpressionContext } from "./JavaParser.js";
import { ExpressionContext } from "./JavaParser.js";
import { PrimaryContext } from "./JavaParser.js";
import { CreatorContext } from "./JavaParser.js";
import { CreatedNameContext } from "./JavaParser.js";
import { InnerCreatorContext } from "./JavaParser.js";
import { ExplicitGenericInvocationContext } from "./JavaParser.js";
import { ArrayCreatorRestContext } from "./JavaParser.js";
import { ClassCreatorRestContext } from "./JavaParser.js";
import { NonWildcardTypeArgumentsContext } from "./JavaParser.js";
import { ArgumentsContext } from "./JavaParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JavaParser`.
 */
export default class JavaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.methodDeclarationRest`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclarationRest?: (ctx: MethodDeclarationRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.methodDeclarationRest`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclarationRest?: (ctx: MethodDeclarationRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceMemberDecl`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceMemberDecl`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.voidMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	enterVoidMethodDeclaratorRest?: (ctx: VoidMethodDeclaratorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.voidMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	exitVoidMethodDeclaratorRest?: (ctx: VoidMethodDeclaratorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
	 * @param ctx the parse tree
	 */
	enterInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
	 * @param ctx the parse tree
	 */
	exitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.voidInterfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	enterVoidInterfaceMethodDeclaratorRest?: (ctx: VoidInterfaceMethodDeclaratorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.voidInterfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	exitVoidInterfaceMethodDeclaratorRest?: (ctx: VoidInterfaceMethodDeclaratorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constantDeclaratorsRest`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constantDeclaratorsRest`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constantDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constantDeclaratorRest`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	enterPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	exitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.formalParameterDecls`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.formalParameterDecls`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.formalParameterDeclsRest`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.formalParameterDeclsRest`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	exitConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotations`.
	 * @param ctx the parse tree
	 */
	enterAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotations`.
	 * @param ctx the parse tree
	 */
	exitAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.catches`.
	 * @param ctx the parse tree
	 */
	enterCatches?: (ctx: CatchesContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.catches`.
	 * @param ctx the parse tree
	 */
	exitCatches?: (ctx: CatchesContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	enterInnerCreator?: (ctx: InnerCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	exitInnerCreator?: (ctx: InnerCreatorContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `JavaParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

