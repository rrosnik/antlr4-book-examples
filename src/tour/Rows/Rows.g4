grammar Rows;

@parser::members {// add members to generated RowsParser

col: number = 0;
setCol(col: number) {
    this.col = col;
}

}

file: (row NL)+; // NL is newline token: '\r'? '\n'

row
	locals[i:number = 0]: (
		STUFF {
        $i++;
        if(this.col === $i) {
            console.log(`${$STUFF.text}`);
        }
    }
	)+;

TAB: '\t' -> skip; // skip tab characters
NL: '\r'? '\n';
STUFF: ~[\r\n\t]+;