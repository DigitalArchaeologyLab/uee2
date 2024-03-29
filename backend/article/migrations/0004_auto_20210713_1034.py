# Generated by Django 3.2.5 on 2021-07-13 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_auto_20210713_0914'),
    ]

    operations = [
        migrations.CreateModel(
            name='TreeTest',
            fields=[
                ('path', models.CharField(max_length=255, unique=True)),
                ('depth', models.PositiveIntegerField()),
                ('numchild', models.PositiveIntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('U', 'Unpublished'), ('P', 'Published')], default='U', max_length=255),
        ),
        migrations.AlterField(
            model_name='article',
            name='title_ar',
            field=models.CharField(max_length=255, verbose_name='Title (Arabic)'),
        ),
        migrations.AlterField(
            model_name='article',
            name='title_de',
            field=models.CharField(max_length=255, verbose_name='Title (German)'),
        ),
        migrations.AlterField(
            model_name='article',
            name='title_eng',
            field=models.CharField(max_length=255, verbose_name='Title (English)'),
        ),
        migrations.AlterField(
            model_name='article',
            name='title_fr',
            field=models.CharField(max_length=255, verbose_name='Title (French)'),
        ),
        migrations.AlterField(
            model_name='author',
            name='first_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='author',
            name='last_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='author',
            name='middle_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='keyword_type',
            field=models.CharField(choices=[('Places', 'Places'), ('Periods', 'Periods'), ('Glossary terms', 'Glossary terms')], default='Glossary terms', max_length=255),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='name_ar',
            field=models.CharField(max_length=255, verbose_name='Name (Arabic)'),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='name_eng',
            field=models.CharField(max_length=255, verbose_name='Name (English)'),
        ),
        migrations.AlterField(
            model_name='subjectarea',
            name='name_ar',
            field=models.CharField(max_length=255, verbose_name='Subject (Arabic)'),
        ),
        migrations.AlterField(
            model_name='subjectarea',
            name='name_de',
            field=models.CharField(max_length=255, verbose_name='Subject (German)'),
        ),
        migrations.AlterField(
            model_name='subjectarea',
            name='name_eng',
            field=models.CharField(max_length=255, verbose_name='Subject (English)'),
        ),
        migrations.AlterField(
            model_name='subjectarea',
            name='name_fr',
            field=models.CharField(max_length=255, verbose_name='Subject (French)'),
        ),
    ]
