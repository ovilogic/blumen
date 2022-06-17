from re import U
from django.urls import path

from . import views

# URLConf
urlpatterns = [
    path('', views.store),

]
