# Generated by Django 3.2.7 on 2021-09-02 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0012_reference_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='reference',
            name='article',
            field=models.ManyToManyField(blank=True, to='article.Article'),
        ),
    ]
