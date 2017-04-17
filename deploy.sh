# THIS MUST BE RUN FROM THE GIT BASH / POWERSHELL like this: ./deploy    (you know, unix-y style)

# recompile everything - this is rem'd out because it terminates the shell
# roots compile

# commit everything
git add .
git commit

# push everything for the source
git push origin master

# push everything to the website branch at gh-pages
git subtree push --prefix public origin gh-pages
