# Generated by Django 3.2.5 on 2021-08-03 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timemap', '0003_period'),
    ]

    operations = [
        migrations.AlterField(
            model_name='period',
            name='altnames_ar',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Alternative names (Arabic)'),
        ),
        migrations.AlterField(
            model_name='period',
            name='altnames_eng',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Alternative names (English)'),
        ),
        migrations.AlterField(
            model_name='period',
            name='name_ar',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Name (Arabic)'),
        ),
    ]
