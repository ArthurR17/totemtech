# Generated by Django 5.1.1 on 2024-10-10 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emoji', models.CharField(choices=[('bad', 'Insatisfeito'), ('neutral', 'Neutro'), ('good', 'Satisfeito'), ('excellent', 'Excelente')], max_length=10)),
                ('comentario', models.TextField(blank=True, max_length=450)),
                ('data', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
