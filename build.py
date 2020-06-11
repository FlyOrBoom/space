import re, glob

css_layout='''
fonts
broad
parts
interactive
article/main
article/about
article/art
article/design
article/contact
article/fun
keyframes
'''[1:].splitlines()

html_layout='''
start
meta
middle
about
art
design
contact
fun
interface
end
'''[1:].splitlines()


open('src/css/keyframes.css','w').write(
	re.sub(
		r'\d\t\d',
		lambda m: str(int(m.group()[0])*12.5)+'vw\t'+str(int(m.group()[2])*12.5)+'vh',
		''.join(
			map(
				lambda f: open(f).read(),
				glob.glob('src/css/keyframes/*.css')
			)
		)
	)
)


open('index.html','w').write(
	''
	.join(
		map(
			lambda f: open('src/html/'+f+'.html').read(),
			html_layout
		)
	)
	.replace(
		'[[stylesheet]]',
		''.join(
			map(
				lambda f: open('src/css/'+f+'.css').read(),
				css_layout
			)
		)
	)
)
