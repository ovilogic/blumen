from django.db import models
from django import forms


class Mesaj(models.Model):
    nume = models.CharField(max_length=250)
    prenume = models.CharField(max_length=250)
    austria = 'Au'
    germany = 'De'
    romania = 'Ro'
    ungaria = 'Hu'

    COUNTRY_CHOICES = [
        ('Au', 'Austria'),
        ('De', 'Germania'),
        ('Ro', 'Romania'),
        ('Hu', 'Ungaria')
    ]

    tara = models.CharField(max_length=2, choices=COUNTRY_CHOICES,
                            default=romania)

    subiect = models.TextField()

    class Meta:
        verbose_name_plural = 'mesaje'

    def __str__(self):
        return self.prenume


class Client(forms.Form):
    DOMENIU_CHOICES = [
        ('flo', 'florarie'),
        ('dec', 'decorator florist'),
        ('hot', 'hoteluri / restaurante'),
        ('org', 'organizatori evenimente'),
        ('ing', 'ingrijire morminte'),
        ('gra', 'gradinari'),
        ('ame', 'amenajari interioare'),
        ('pre', 'prestari servicii'),
        ('arh', 'arhitectura peisagistica'),
        ('des', 'design'),
        ('alt', 'altele')
    ]
    domeniu = forms.ChoiceField(widget=forms.RadioSelect, choices=DOMENIU_CHOICES)
    denumire_firma = forms.CharField(max_length=250)
    strada = forms.CharField(max_length=250)
    cod_postal = forms.CharField(max_length=250)
    telefon = forms.CharField(max_length=250)
    fax = forms.CharField(max_length=250)
    email = forms.CharField(max_length=250)

    doresc = forms.CheckboxInput()

    CUI = forms.CharField(max_length=250)
    reg_comertului = forms.CharField(max_length=250)
    banca = forms.CharField(max_length=250)
    cont_bancar = forms.CharField(max_length=250)

    admin_nume = forms.CharField(max_length=250)
    admin_prenume = forms.CharField(max_length=250)
    admin_data_nasterii = forms.CharField(max_length=250)

    contact_nume = forms.CharField(max_length=250)
    contact_prenume = forms.CharField(max_length=250)
    contact_data_nasterii = forms.CharField(max_length=250)


    def __str__(self):
        return self.denumire_firma

