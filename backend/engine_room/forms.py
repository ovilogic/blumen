from django import forms

class Client(forms.Form):
    denumire_firma = forms.CharField(label='Denumire firma', max_length=100)

    def __str__(self):
        return self.denumire_firma