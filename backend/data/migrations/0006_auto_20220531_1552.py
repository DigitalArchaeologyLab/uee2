# Generated by Django 3.2.7 on 2022-05-31 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0005_remove_image_articles'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='caption',
            field=models.TextField(blank=True, max_length=1000, null=True, verbose_name='Caption and credit line'),
        ),
        migrations.AddField(
            model_name='image',
            name='creator',
            field=models.TextField(blank=True, max_length=255, null=True, verbose_name='Creator (photographer, illustrator, etc)'),
        ),
        migrations.AddField(
            model_name='image',
            name='description',
            field=models.TextField(blank=True, max_length=1000, null=True, verbose_name='Full Description'),
        ),
        migrations.AddField(
            model_name='image',
            name='persons',
            field=models.TextField(blank=True, max_length=1000, null=True, verbose_name='Person(s) within content'),
        ),
    ]
