import re

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

draft = list(open('src/layout.html').read())

for match in re.findall(r'{{\w+}}',''.join(draft)):
	start = ''.join(draft).index(match)
	draft [ start : start + len(match) ] = open(
		'src/html/'
		+ match[2:-2]
		+ '.html'
	).read()


open('index.html','w').write(
	''
	.join(list(map(
			lambda match:open('src/html/'+match+'.html').read(),
			html_layout
		)))
	.replace(
		'[[stylesheet]]',''.join(list(map(
			lambda match:open('src/css/'+match+'.css').read(),
			css_layout
		)))
	)
)
