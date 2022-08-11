from rest_framework import serializers
from drf_braces.serializers.form_serializer import FormSerializer
from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from django import forms

from .models import Mesaj
from .forms import Client


# Serializers define the API representation.
# ModelSerializer is used for refactoring purposes. So the fields need to match the model variables.
class MesajSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesaj
        fields = ['id', 'prenume', 'nume', 'tara', 'subiect']


# class ClientsSerializer(FormSerializer):
#     class Meta(object):
#         model = Client
#         '''fields = ['id', 'denumire_firma', 'strada', 'cod_postal', 'telefon',
#                   'fax', 'email', 'doresc', 'CUI',
#                   'reg_comertului', 'banca', 'cont_bancar',
#                   'admin_nume', 'admin_prenume', 'admin_data_nasterii',
#                   'contact_nume', 'contact_prenume', 'contact_data_nasterii']
# '''
#


class LazyEncoder(DjangoJSONEncoder):
    def default(self, o):
        if isinstance(o, forms.Form):
            return str(o)
        return super().default(o)

Clients_serialized = serialize('json', Mesaj.objects.all(), cls=LazyEncoder)

