# Generated by Django 3.2.8 on 2021-10-25 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_auto_20211025_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='arkID',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='ArkID'),
        ),
    ]
