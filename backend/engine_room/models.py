from django.db import models


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


class Client(models.Model):
    # DOMENIU_CHOICES = [
    #     ('flo', 'florarie'),
    #     ('dec', 'decorator florist'),
    #     ('hot', 'hoteluri / restaurante'),
    #     ('org', 'organizatori evenimente'),
    #     ('ing', 'ingrijire morminte'),
    #     ('gra', 'gradinari'),
    #     ('ame', 'amenajari interioare'),
    #     ('pre', 'prestari servicii'),
    #     ('arh', 'arhitectura peisagistica'),
    #     ('des', 'design'),
    #     ('alt', 'altele')
    # ]
    # domeniu = models.CharField(max_length=3, choices=DOMENIU_CHOICES)
    denumire_firma = models.CharField(max_length=250, default='')
    strada = models.CharField(max_length=250, default='')
    cod_postal = models.CharField(max_length=250, default='')
    telefon = models.CharField(max_length=250, default='')
    fax = models.CharField(max_length=250, default='')
    email = models.CharField(max_length=250, default='')

    doresc = models.BooleanField(default=False)

    CUI = models.CharField(max_length=250, default='')
    reg_comertului = models.CharField(max_length=250, default='')
    banca = models.CharField(max_length=250, default='')
    cont_bancar = models.CharField(max_length=250, default='')

    admin_nume = models.CharField(max_length=250, default='')
    admin_prenume = models.CharField(max_length=250, default='')
    admin_data_nasterii = models.CharField(max_length=250, default='')

    contact_nume = models.CharField(max_length=250, default='')
    contact_prenume = models.CharField(max_length=250, default='')
    contact_data_nasterii = models.CharField(max_length=250, default='')


    def __str__(self):
        return self.denumire_firma

