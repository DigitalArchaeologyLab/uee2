# Generated by Django 3.2.7 on 2022-06-07 21:17

from django.db import migrations, models
import markdownx.models


class Migration(migrations.Migration):

    dependencies = [
        ('timemap', '0011_auto_20220603_1543'),
        ('article', '0019_article_period'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='activity',
            field=models.ManyToManyField(help_text='An activity linking a place to a specific time range.', to='timemap.Activity', verbose_name='Timemap Reference'),
        ),
        migrations.AlterField(
            model_name='article',
            name='body',
            field=markdownx.models.MarkdownxField(help_text="Use the tag and insert buttons to add the encoding for interactive elements. Highlight the word or phrase you want to tag and then select the appropriate button. To insert an image, place your cursor where you would like the image to be and click the Insert image button. If you need to remove something you have tagged using these buttons, delete everything from the first '<' to the last '>' except the text you had highlighted."),
        ),
        migrations.AlterField(
            model_name='article',
            name='period',
            field=models.ManyToManyField(blank=True, to='timemap.Period'),
        ),
        migrations.AlterField(
            model_name='article',
            name='place',
            field=models.ManyToManyField(blank=True, to='timemap.Place'),
        ),
    ]