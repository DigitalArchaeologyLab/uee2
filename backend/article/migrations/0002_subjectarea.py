# Generated by Django 3.2.5 on 2021-07-13 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubjectArea',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name_eng', models.CharField(max_length=200, verbose_name='Title (English)')),
                ('name_ar', models.CharField(max_length=200, verbose_name='Title (Arabic)')),
                ('name_de', models.CharField(max_length=200, verbose_name='Title (German)')),
                ('name_fr', models.CharField(max_length=200, verbose_name='Title (French)')),
                ('description', models.TextField(max_length=1500)),
                ('parent', models.ManyToManyField(related_name='subjectArea_parent', to='article.SubjectArea')),
            ],
        ),
    ]