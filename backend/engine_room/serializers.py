from rest_framework import serializers

from .models import Mesaj, Client


# Serializers define the API representation.
# ModelSerializer is used for refactoring purposes. So the fields need to match the model variables.
class MesajSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesaj
        fields = ['id', 'prenume', 'nume', 'tara', 'subiect']


class ClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'denumire_firma', 'strada', 'cod_postal', 'telefon',
                  'fax', 'email', 'doresc', 'CUI',
                  'reg_comertului', 'banca', 'cont_bancar',
                  'admin_nume', 'admin_prenume', 'admin_data_nasterii',
                  'contact_nume', 'contact_prenume', 'contact_data_nasterii']


