# Generated by Django 3.2.7 on 2021-09-02 20:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0014_article_treewidgettest'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='treeWidgetTest',
        ),
    ]
