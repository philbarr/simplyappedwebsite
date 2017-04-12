rem THIS MUST BE RUN FROM THE GIT BASH / POWERSHELL like this: ./deploy    (you know, unix-y style)

rem recompile everything - this is rem'd out because it terminates the shell
rem roots compile

rem commit everything
git add *
git commit

rem push everything for the source
git push origin master

rem push everything to the website branch at gh-pages
git subtree push --prefix public origin gh-pages
