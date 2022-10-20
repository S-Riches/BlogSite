from django.urls import path

from . import views

urlpatterns = [
    path('file/', views.readFile)
]