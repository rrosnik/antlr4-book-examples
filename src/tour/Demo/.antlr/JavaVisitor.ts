// Generated from g:/Thesis/programming/Test/src/tour/Demo/Java.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JavaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.methodDeclarationRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclarationRest?: (ctx: MethodDeclarationRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceMemberDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.voidMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidMethodDeclaratorRest?: (ctx: VoidMethodDeclaratorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.voidInterfaceMethodDeclaratorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidInterfaceMethodDeclaratorRest?: (ctx: VoidInterfaceMethodDeclaratorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constantDeclaratorsRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constantDeclaratorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enumConstantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.formalParameterDecls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.formalParameterDeclsRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.variableModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.catches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatches?: (ctx: CatchesContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.switchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.innerCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerCreator?: (ctx: InnerCreatorContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `JavaParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

