# Generated by Django 3.2.7 on 2022-06-02 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0006_auto_20220531_1552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='title_eng',
            field=models.CharField(max_length=255, unique=True, verbose_name='Title (English)'),
        ),
    ]