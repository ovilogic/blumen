from rest_framework import routers

from django.urls import path, include

from . import views

router = routers.DefaultRouter()
router.register(r'lista', views.MesajView, 'mesaje')
router.register(r'clients', views.ClientsView, 'clients')

# URLConf
urlpatterns = [
    path('', views.store),
    path('api/', include(router.urls))

]
