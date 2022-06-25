from django.shortcuts import render
from django.http import HttpResponse
from .models import Mesaj

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response

from .serializers import MesajSerializer


class MesajView(viewsets.ModelViewSet):
  serializer_class = MesajSerializer
  queryset = Mesaj.objects.all()
  

 
  def post(self, request):
    mesajPrimit = MesajSerializer(data=request.data)
    if mesajPrimit.is_valid():
      mesajPrimit.save()
    #   return Response(mesajPrimit.data, status=status.HTTP_201_CREATED)
    # else:
    #   print(mesajPrimit.errors)
    #   return Response(mesajPrimit.errors)
      


  

# the default view, the one for a '' request
def store(request):
    return render(request, 'hello.html')
