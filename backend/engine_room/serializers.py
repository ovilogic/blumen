from rest_framework import serializers

from .models import Mesaj


# Serializers define the API representation.
class MesajSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesaj
        fields = ['id', 'prenume', 'nume', 'tara', 'subiect']