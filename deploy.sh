#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
yarn run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://IlyaTish.github.io
# git push -f git@github.com:IlyaTish/IlyaTish.github.io.git master

# если вы публикуете по адресу https://IlyaTish.github.io/oknacheb.ru
# git push -f git@github.com:IlyaTish/oknacheb.ru.git master:gh-pages

cd -