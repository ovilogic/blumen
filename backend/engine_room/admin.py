from django.contrib import admin

# Register your models here.

from .models import Mesaj, Client

admin.site.register(Mesaj)
admin.site.register(Client)
