# Generated by Django 5.1.1 on 2024-10-10 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('totemapp', '0003_auto_20241010_0912'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedback',
            name='created_at',
        ),
        migrations.AlterField(
            model_name='feedback',
            name='comentario',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='emoji',
            field=models.CharField(max_length=20),
        ),
    ]
