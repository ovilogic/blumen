# Generated by Django 4.0.5 on 2022-07-31 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine_room', '0012_rename_cod_p_client_cod_postal'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='email',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='client',
            name='fax',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='client',
            name='telefon',
            field=models.CharField(default='', max_length=250),
        ),
    ]