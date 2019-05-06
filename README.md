# plot_chart_gulp4
real time plot the chart with gulp 4.0

### Pre-requirment
1. Django 1.10
2. Python 3.6
3. Virtulal Environment
4. node 10.15.3
5. npm 6.4.1

###  Install
1. git clone git@github.com:MeiChihChang/plot_chart_gulp
2. activate "name of your virtual enviroment"
3. cd plot_chart_gulp4
4. npm install --save-dev gulp gulp-cli browser-sync gulp-eslint  
5. cd plot_chart
6. pip install djangorestframework
7. cd ..

###  build
1. gulp build

###  Run
1. python plot_chart/manage.py migrate
2. python plot_chart/manage.py createsuperuser 
==> this is used for creating admin login user. Later, you can login by http://127.0.0.1:8000/admin/ to add more users
3. gulp
==> enjoy this app with gulp watch (p.s. try modify *.html & .py files to check watch workable)
