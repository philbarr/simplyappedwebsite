rem help git find publickey
set HOME=%USERPROFILE%

rem recompile everything
roots compile
rem commit all
git add *
git commit
rem push everything for the source
git push origin master
rem push everything to the website branch at gh-pages
git subtree push --prefix public origin gh-pages
pause