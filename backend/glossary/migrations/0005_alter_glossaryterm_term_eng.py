# Generated by Django 3.2.7 on 2022-06-03 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glossary', '0004_auto_20220531_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glossaryterm',
            name='term_eng',
            field=models.CharField(max_length=255, unique=True, verbose_name='Term (English)'),
        ),
    ]
