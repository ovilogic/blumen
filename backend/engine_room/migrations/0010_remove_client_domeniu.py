# Generated by Django 4.0.5 on 2022-07-31 12:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engine_room', '0009_client_strada'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='domeniu',
        ),
    ]