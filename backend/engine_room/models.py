
from django.db import models


class Mesaj(models.Model):
    nume = models.CharField(max_length=250)
    prenume = models.CharField(max_length=250)
    austria = 'Au'
    germany = 'Ge'
    romania = 'Ro'

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



