from django.shortcuts import render
from django.http import HttpResponse
from .models import Mesaj

from rest_framework.decorators import api_view

from rest_framework import viewsets
from rest_framework import permissions

from .serializers import MesajSerializer


class MesajView(viewsets.ModelViewSet):
    serializer_class = MesajSerializer
    def get_queryset(self):
      queryset = Mesaj.objects.all()
      return queryset

# the default view, the one for a '' request
def store(request):
    return render(request, 'hello.html')
