from django.shortcuts import render
from .models import Mesaj
from .forms import Client

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MesajSerializer, Clients_serialized
from django.views.generic.edit import FormView

# @api_view(['GET', 'POST'])
# def mesaje_list(request):
#     """
#     List all mesaje, or create a new mesaj.
#     """
#     if request.method == 'GET':
#         mesaje = Mesaj.objects.all()
#         serializer = MesajSerializer(mesaje, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = MesajSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MesajView(viewsets.ModelViewSet):
    serializer_class = MesajSerializer
    queryset = Mesaj.objects.all()

    def post(self, request):
        mesajPrimit = MesajSerializer(data=request.data)
        if mesajPrimit.is_valid():
            mesajPrimit.save()
            return Response(mesajPrimit.data, status=status.HTTP_201_CREATED)
        else:
            print(mesajPrimit.errors)
            return Response(mesajPrimit.errors)

class ClientsView(viewsets.ViewSet):
    serializer_class = Clients_serialized
    queryset = Client.objects.all()

    def post(self, request):
        clientPrimit = Clients_serialized(data=request.data)
        if clientPrimit.is_valid():
            clientPrimit.save()
            return Response(clientPrimit.data, status=status.HTTP_201_CREATED)
        else:
            print(clientPrimit.errors)
            return Response(clientPrimit.errors)

# Attempting a function-based view for the form:

# def get_firma(request):
#     # Process data if this is a POST request, which, come on, it will always be:
#     if request.method == 'POST':
#         # CREATE a form instance and populate it with data from the request:
#         form = Client(request.POST)
#         if form.is_valid():
#             print(form.cleaned_data)
#             form.cleaned_data.save()
#             return Response(form.data, status=status.HTTP_201_CREATED)
#             print(form)
#         else:
#             print('form not saved for some reason')
#


# the default view, the one for a '' request
def store(request):
    return render(request, 'hello.html')






