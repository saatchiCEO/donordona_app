echo "Grunting and pushing to cbookApp... \n\n"


grunt &&
git add . &&
git commit -m "public update (dbg)" &&
git push git@github.com:saatchiCEO/donordona_app.git master -f
