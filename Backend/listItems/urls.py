from django.urls import path

from . import views

#URLConf module
#IMPORTANT THAT IT IS CALLED 'urlpatterns' AS DJANGO LOOKS FOR THIS
urlpatterns = [
    path('all/', views.listOfFiles)
]