#!/bin/bash

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://IlyaTish.github.io
# git push -f git@github.com:IlyaTish/IlyaTish.github.io.git master

# если вы публикуете по адресу https://IlyaTish.github.io/oknacheb
# git push -f https://github.com/IlyaTish/oknacheb.git master:gh-pages

cd -