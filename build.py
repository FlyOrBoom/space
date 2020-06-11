import re
draft_css = ''.join(list(
	map(
		lambda match:open('src/css/'+match+'.css').read(),
		re.findall(
			r'.+',
			open('src/layout.css').read()
		)
	)
))

print(draft_css)

draft = list(open('src/layout.html').read())

for match in re.findall(r'{{\w+}}',''.join(draft)):
	start = ''.join(draft).index(match)
	draft [ start : start + len(match) ] = open(
		'src/html/'
		+ match[2:-2]
		+ '.html'
	).read()

final = ''.join(draft)
open('index.html','w').write(final)
