find ./docs -type f -name '*.html' | xargs sed -i.bak --regexp-extended 's:(href="[^"]+)functions/:\1funcs/:g' 
