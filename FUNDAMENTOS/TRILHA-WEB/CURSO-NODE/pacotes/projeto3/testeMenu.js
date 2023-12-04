
import kit from 'terminal-kit'
const term = kit.terminal

var items = [ 'File' , 'Edit' , 'View' , 'History' , 'Bookmarks' , 'Tools' , 'Help' ] ;

var options = {
	y: 1 ,	// the menu will be on the top of the terminal
	style: term.inverse ,
	selectedStyle: term.dim.red.bgGreen
} ;

term.clear() ;

term.singleLineMenu( items , options , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(
		"#%s selecionado: %s (%s,%s)\n" ,
		response.selectedIndex ,
		response.selectedText ,
		response.x ,
		response.y
	) ;
	process.exit() ;
} ) ;