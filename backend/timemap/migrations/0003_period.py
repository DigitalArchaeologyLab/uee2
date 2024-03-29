# Generated by Django 3.2.5 on 2021-08-03 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timemap', '0002_auto_20210730_1409'),
    ]

    operations = [
        migrations.CreateModel(
            name='Period',
            fields=[
                ('path', models.CharField(max_length=255, unique=True)),
                ('depth', models.PositiveIntegerField()),
                ('numchild', models.PositiveIntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name_eng', models.CharField(max_length=200, verbose_name='Name (English)')),
                ('altnames_eng', models.CharField(max_length=500, verbose_name='Alternative names (English)')),
                ('name_ar', models.CharField(max_length=200, verbose_name='Name (Arabic)')),
                ('altnames_ar', models.CharField(max_length=500, verbose_name='Alternative names (Arabic)')),
                ('start', models.IntegerField(null=True)),
                ('end', models.IntegerField(null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
