# Generated by Django 3.2.9 on 2021-12-09 18:18

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basicpage',
            name='body',
            field=ckeditor.fields.RichTextField(max_length=1500),
        ),
    ]
