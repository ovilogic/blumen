# Generated by Django 4.0.5 on 2022-07-31 12:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engine_room', '0011_client_cod_p'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='cod_p',
            new_name='cod_postal',
        ),
    ]
