#Tips para Sublime text

* [Presentación](http://davecarter.github.io/sublime-hangout/#/)
* [Shortcuts Windows/Linux](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_win.html)
* [API Reference](https://www.sublimetext.com/docs/3/api_reference.html)

Estos son otros TIPS que vimos durante la sesión:

Atajos de teclado (Mac)
```
Focus Sidebar                 ctrl+0
Focus Group 1                 ctrl+1
Sort line                     f5
Reopen close file             cmd+shit+t
Paste history                 cmd+k+v | cmd+alt+v
```

Comandos para la consola
```
sublime.log_commands(True)    Activar el registro de comandos en consola
sublime.log_input(True)       Activar el registro de entrada en consola

sublime.log_commands(False)   Desactivar el registro de comandos en consola
sublime.log_input(False)      Desactivar el registro de entrada en consola
```

Cambiar el shortcut de mostrar la consola, acceder desde `Preference -> Key Bindings - User` y añadir
```
{
	"keys": ["ctrl+alt+c"],
	"command": "show_panel",
	"args": {
		"panel": "console",
		"toggle": true
	}
},
```
