# Generated by Django 3.2.7 on 2022-01-10 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timemap', '0010_auto_20211019_1315'),
        ('article', '0018_article_activity'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='period',
            field=models.ManyToManyField(to='timemap.Period'),
        ),
    ]