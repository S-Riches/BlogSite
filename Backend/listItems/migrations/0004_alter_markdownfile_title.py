# Generated by Django 4.1.2 on 2022-10-19 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listItems', '0003_alter_markdownfile_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='markdownfile',
            name='title',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]