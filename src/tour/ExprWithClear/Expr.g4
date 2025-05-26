grammar Expr;

/** The start rule; begin parsing here. */
prog: stat+;

stat:
	expr NEWLINE			# printExpr
	| ID '=' expr NEWLINE	# assign
	| NEWLINE				# blank
	| 'clear' NEWLINE		# clear
	;

expr:
	expr op = (MUL | DIV) expr		# MulDiv
	| expr op = (ADD | SUB) expr	# AddSub
	| INT							# int
	| ID							# id
	| '(' expr ')'					# parens;

ID: [a-zA-Z]+; // match identifiers
INT: [0-9]+; // match integers
NEWLINE:
	'\r'? '\n'; // return newlines to parser (is end-statement signal)
WS: [ \t]+ -> skip; // toss out whitespace

MUL: '*'; // assigns token name to '*' used above in grammar 
DIV: '/';
ADD: '+';
SUB: '-';