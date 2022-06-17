from django.shortcuts import render
from django.http import HttpResponse
from .models import Mesaj

# Create your views here.


def store(request):

    queryset = Mesaj.objects.all()
    return render(request, 'hello.html')
