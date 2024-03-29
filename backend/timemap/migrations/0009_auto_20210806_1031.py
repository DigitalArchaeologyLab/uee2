# Generated by Django 3.2.5 on 2021-08-06 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timemap', '0008_alter_activity_notes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='endDate',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='activity',
            name='startDate',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='activity',
            name='type',
            field=models.CharField(choices=[('Construction', 'Construction'), ('Destruction', 'Destruction'), ('Inactive / defunct time', 'Inactive / defunct time'), ('Modification', 'Modification'), ('Use', 'Use')], default='In use', max_length=200),
        ),
    ]
