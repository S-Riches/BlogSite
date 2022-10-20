from django.urls import path
from . import views

urlpatterns = [
    path('File/', views.updateFile)
]
